import {
  Table,
  TableHeaders,
  TableRows,
  TableHeaderItem,
  TableRow,
  TableBody,
} from './Transactions.styled';
import PropTypes from 'prop-types';

export const Transactions =({operation})=>{
    return <Table>
    <TableHeaders>
    <TableRows>
      <TableHeaderItem>Type</TableHeaderItem>
      <TableHeaderItem>Amount</TableHeaderItem>
      <TableHeaderItem>Currency</TableHeaderItem>
    </TableRows>
  </TableHeaders>
  {operation.map(({id, type, amount, currency})=> {
    return <TableBody>
    <TableRows key={id}>
      <TableRow>{type}</TableRow>
      <TableRow>{amount}</TableRow>
      <TableRow>{currency}</TableRow>
    </TableRows>
  </TableBody>
  })} 
  </Table>
}

Transactions.propTypes = {
  operation: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

// id, type, amount, currency