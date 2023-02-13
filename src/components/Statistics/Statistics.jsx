import PropTypes from 'prop-types';
import {
  Statisctic,
  StatiscticTitle,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from './Statistics.styled';


export const Statistics = ({title, stats}) => {
  return <Statisctic>
    <StatiscticTitle>{title && null}</StatiscticTitle>

    <StatList>
    {stats.map(({id, label, percentage})=>{
      return <StatListItem>
        <Label key={id}>{label}</Label>
        <Percentage percentage={percentage}>{percentage}%</Percentage> 
      </StatListItem>
    })}
    </StatList>
  </Statisctic>
};



Statistics.protoTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
};