import React from "react";
import { View,Text } from "react-native";
import { useQuery } from "react-query";
import axios from "axios";
import { useRoute } from "@react-navigation/native";




export default function Details() {
    const route = useRoute()
    const { data: catData, isLoading, isError, refetch } = useQuery(
        ["cat"],
        () => {
          return axios.get("https://catfact.ninja/fact").then((res) => res.data);
        }
      );

      if (isError) {
        return <Text> Sorry, there was an error </Text>;
      }

      if (isLoading) {
        return <Text> Loading...</Text>;
      }


  return (
    <View>
        <Text>Hello {route.params.name1}!</Text>
    <Text>{catData?.fact}</Text>

        </View>
  )
}