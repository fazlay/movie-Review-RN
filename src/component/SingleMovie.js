import React from 'react';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import { useDispatch } from 'react-redux';

import {
  addToFavouriteList,
  addToWatchedList,
} from '../../redux/slices/movieSlice';

const Singlemovie = ({ movieData = {}, screen }) => {
  console.log(screen);
  const dispatch = useDispatch();

  return (
    <Card>
      <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
        <Image
          source={{ uri: movieData?.Poster }}
          resizeMode='cover'
          style={{ width: 100, height: 150, borderRadius: 10 }}
        />
        <View style={{ marginLeft: 15, marginTop: 5 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            {movieData?.Title}
          </Text>
          <Text
            style={{ width: 230, flex: 1, fontSize: 15, fontWeight: 'bold' }}
          >
            {movieData?.Plot}
          </Text>
        </View>
      </View>
      {screen == 'Discover' ? (
        <Card.Actions>
          <Button onPress={() => dispatch(addToWatchedList(movieData))}>
            Add TO Watchlist
          </Button>
          <Button onPress={() => dispatch(addToFavouriteList(movieData))}>
            Add to Favourite
          </Button>
        </Card.Actions>
      ) : null}
    </Card>
  );
};

export default Singlemovie;
