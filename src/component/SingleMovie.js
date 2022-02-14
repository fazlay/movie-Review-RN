import React from "react";
import { useState } from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { useDispatch } from "react-redux";

import { addToWatchedList } from "../../redux/slices/movieSlice";

const Singlemovie = (movieData) => {
  // const [state, setState] = useState();
  // const dispatch = useDispatch();
  //onClick={() => dispatch(addToWatchedList(movieData))}
  return (
    <Card>
      <Card.Content>
        <Title>{movieData.item?.Title}</Title>
        <Paragraph>IMDB Rating: {movieData.item?.imdbRating}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: movieData.item?.Images[0] }} />
      <Card.Actions>
        <Button>Add TO Watchlist</Button>
        <Button>Add to Favourite</Button>
      </Card.Actions>
    </Card>
  );
};

export default Singlemovie;
