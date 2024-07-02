import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function MovieListItem({movie}:any) {
  return (
    <Link href={`/${movie.id}`} asChild>
    <Pressable style={{padding:10, flex:1}}>
        <Image
        source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}}
        style={{width: '100%', aspectRatio:1}}
         />
      <Text>{movie.title}</Text>
    </Pressable>
    </Link>
  )
}