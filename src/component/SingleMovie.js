import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const Singlemovie = (movieData) => {
  console.log(movieData.item?.Poster);
  //imdbRating
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
