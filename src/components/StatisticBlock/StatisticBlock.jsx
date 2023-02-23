import PropTypes from 'prop-types';
import { Item } from './StatisticBlock.styled';

export const StatisticBlock = ({ item: { label, percentage } }) => {
  return (
    <Item>
      <span>{label}</span>
      <span>{percentage}%</span>
    </Item>
  );
};

StatisticBlock.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
