import { fetchMovies } from '@/api/movies';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Platform, Text, View, FlatList, ActivityIndicator } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import {useQuery} from '@tanstack/react-query'
import MovieListItem from '@/components/MovieListItem';
export default function HomeScreen() {
  const {data: movies, isLoading, error} = useQuery({
    queryKey:['movies'],
    queryFn: fetchMovies
  })

  if (isLoading){
    return <ActivityIndicator/>
  }
  return (
    <SafeAreaView>
      <FlatList
      data={movies}
      numColumns={2}
      keyExtractor={(item, index) => item.id}
      contentContainerStyle={{gap:5}}
      columnWrapperStyle={{gap:5}}
      renderItem={({item}:any) =>(
    <MovieListItem movie={item}/>
      )}
      />
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container:{
    flex:1
  }
});
