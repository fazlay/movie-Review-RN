import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Singlemovie from "../component/SingleMovie.js";

const Discovermovie = () => {
  const movies = useSelector((state) => state.moviesList.discover);

  return (
    <View>
      <FlatList
        data={movies}
        renderItem={Singlemovie}
        keyExtractor={(item) => item.imdbID}
      />
    </View>
  );
};

export default Discovermovie;
