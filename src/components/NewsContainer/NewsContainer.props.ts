import { News } from '../../redux/types';

export interface NewsContainerProps {
  news: News[];
  author?: string;
}
