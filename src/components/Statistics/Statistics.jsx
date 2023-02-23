import { StatisticBlock } from 'components/StatisticBlock/StatisticBlock';
import PropTypes from 'prop-types';
import { Container, List, Title } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(item => (
          <StatisticBlock key={item.id} item={item} />
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
