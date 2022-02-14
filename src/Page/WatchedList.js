import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Singlemovie from "../component/SingleMovie";

const Watchedlist = () => {
  const watchList = useSelector((state) => state.moviesList.watchedList);
  console.log("This is watched List", watchList);
  return (
    <View>
      {watchList.length == 0 && (
        <Text
          style={{ textAlign: "center", fontWeight: "bold", marginTop: "50%" }}
        >
          List is Empty . First Add some movie to the list
        </Text>
      )}
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
