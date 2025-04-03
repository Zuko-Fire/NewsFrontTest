import { type FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Chip, Link, Stack } from '@mui/material';

import * as locales from '../../locales/en.json';
import defaultImage from '../../assets/defaultImage.png';

import { PostCardProps } from './PostCard.props';
import { CARD_SX, CARD_MEDIA_SX } from './constants';
import './style.css';

export const PostCard: FC<PostCardProps> = ({
  authorId,
  text,
  title,
  img,
  tags,
  author,
  createDate
}) => {
  const date = new Date(createDate).toDateString();
  const chips = tags.map((tag) => (
    <Chip className="post-card__chip" key={tag.id} label={tag.value} />
  ));
  return (
    <Card sx={CARD_SX} className="post-card">
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          textAlign="center"
          className="post-card__header"
        >
          {title}
        </Typography>
        <Stack direction="row" spacing={3}>
          <Typography
            gutterBottom
            variant="caption"
            component="div"
            className="post-card__date"
          >
            {`${locales.PUBLISHING_DATA}: \n ${date}`}
          </Typography>
          <Typography>
            {`${locales.AUTHOR_NEWS}: \n`}
            <Link href={`users/${authorId}`}>
              {author}
            </Link>
          </Typography>
        </Stack>
        <CardMedia
          component="img"
          sx={CARD_MEDIA_SX}
          image={img || defaultImage}
          title={title}
          className="post-card__media"
        />
        {chips}
        <Typography
          className="post-card__text"
          gutterBottom
          variant="body1"
          component="div"
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
