import { type FC } from 'react';
import Grid from '@mui/material/Grid';

import { PostCard } from '../PostCard';

import { NewsContainerProps } from './NewsContainer.props';

export const NewsContainer: FC<NewsContainerProps> = ({ news, author }) => {
  const items = news.map((card) => (
    <PostCard
      key={card.id}
      authorId={card.userId}
      title={card.header}
      img={card.imagePath}
      text={card.text}
      tags={card.tags}
      author={author != null ? author : card.user.login}
      createDate={card.createdAt}
    />
  ));
  return (
    <Grid
      container
      className="news-container"
      spacing="1"
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      alignContent="space-evenly"
      padding="20px"
    >
      {items}
    </Grid>
  );
};
