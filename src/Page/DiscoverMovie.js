import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import Singlemovie from '../component/SingleMovie.js';

const Discovermovie = () => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON'
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0].Country);
        setMovieData(data);
      });
  }, []);
  return (
    <View>
      <FlatList
        data={movieData}
        renderItem={Singlemovie}
        keyExtractor={(item) => item.imdbID}
      />
    </View>
  );
};

export default Discovermovie;
