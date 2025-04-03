import { Tag } from '../../redux/types';

export interface PostCardProps {
  authorId: number;
  text: string;
  title: string;
  tags: Tag[];
  author: string;
  createDate: Date;
  img?: string;
}
