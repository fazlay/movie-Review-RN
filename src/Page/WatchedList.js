import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Singlemovie from "../component/SingleMovie";

const Watchedlist = () => {
  const watchList = useSelector((state) => state.moviesList.watchedList);
  console.log("This is watched List", watchList);
  return (
    <View>
      <FlatList
        data={watchList}
        renderItem={({ item }) => {
          return <Singlemovie movieData={item} />;
        }}
        keyExtractor={(item) => item.imdbID}
      />
    </View>
  );
};

export default Watchedlist;
