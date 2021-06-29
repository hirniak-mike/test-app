import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export const sortByType = [
  {
    id: 0,
    value: 'name_asc',
    name: "Name",
    img: <ArrowDownwardIcon fontSize="small" />,
  },
  {
    id: 1,
    value: 'name_desc',
    name: "Name",
    img: <ArrowUpwardIcon fontSize="small" />,
  },
  {
    id: 2,
    value: 'count_asc',
    name: "Count",
    img: <ArrowDownwardIcon fontSize="small" />,
  },
  {
    id: 3,
    value: 'count_desc',
    name: "Count",
    img: <ArrowUpwardIcon fontSize="small" />,
  },
]