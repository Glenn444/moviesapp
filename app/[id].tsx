import { View, Text, ActivityIndicator, Image, Pressable } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchMovie } from "@/api/movies";
import { FontAwesome } from "@expo/vector-icons";
import { addMovieToWatchList, MoviesToWatch } from "@/api/watchList";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
const client = useQueryClient()

  const { data, isLoading, error } = useQuery({
    queryKey: ["movies", id],
    queryFn: () => fetchMovie(Number(id)),
  });
  const { data: watchMovies } = useQuery({
    queryKey: ["movieswatch"],
    queryFn: () => MoviesToWatch(),
  });
  const { mutate } = useMutation({
    mutationKey: ["addMovie", id],
    mutationFn: () => addMovieToWatchList(Number(id)),
    onSuccess: () =>{
        client.invalidateQueries({
           queryKey : ['movieswatch']
        })
  
    }
  });

  if (isLoading) {
    return <ActivityIndicator style={{ justifyContent: "center" }} />;
  }
  if (error) {
    return <Text>Error fetching movie: {error.message}</Text>;
  }

  return (
    <View>
      <Stack.Screen options={{ title: data.title }} />
      <Image
        source={{ uri: "https://image.tmdb.org/t/p/w500" + data.backdrop_path }}
        style={{ width: "100%", height: 300 }}
      />
      <View>
        <Text style={{ fontSize: 24, fontWeight: "500" }}>{data.title}</Text>
        {watchMovies?.map((movie: any) => (
          <View style={{ position: "absolute", right: 20 }}>
            <Pressable onPress={() => mutate()}>
              <FontAwesome
                key={movie.id}
                name={
                  watchMovies && movie.id === data.id
                    ? "bookmark"
                    : "bookmark-o"
                }
                size={34}
                color="green"
              />
            </Pressable>
          </View>
        ))}
        <Text style={{ fontSize: 18, fontWeight: "400" }}>{data.overview}</Text>
      </View>
    </View>
  );
};

export default MovieDetails;
