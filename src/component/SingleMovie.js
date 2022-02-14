import React from "react";
import { useState } from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { useDispatch } from "react-redux";

import {
  addToFavouriteList,
  addToWatchedList,
} from "../../redux/slices/movieSlice";

const Singlemovie = ({ movieData = {}, screen }) => {
  console.log(screen);
  const dispatch = useDispatch();

  return (
    <Card>
      <Card.Content>
        <Title>{movieData?.Title}</Title>
        <Paragraph>IMDB Rating: {movieData?.imdbRating}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: movieData?.Images[0] }} />
      {screen == "Discover" ? (
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
