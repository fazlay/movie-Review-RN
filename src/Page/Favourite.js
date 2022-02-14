import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Singlemovie from "../component/SingleMovie";

const Favourite = () => {
  const favouriteList = useSelector((state) => state.moviesList.favouriteList);

  return (
    <View>
      <FlatList
        data={favouriteList}
        renderItem={({ item }) => {
          return <Singlemovie movieData={item} />;
        }}
        keyExtractor={(item) => item.imdbID}
      />
    </View>
  );
};

export default Favourite;
