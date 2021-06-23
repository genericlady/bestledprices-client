import { Table } from 'reactstrap';
import { uid } from 'uid';

export default function PriceTable({ priceList }) {
  const renderRows = () => {
    return priceList.map(({ image, description, price, href }) => (
      <tr key={uid()}>
        <th scope="row"><img src={image} alt={description} /></th>
        <td>{description}</td>
        <td>{price}</td>
        <td><a href={href}>link to product</a></td>
      </tr>
    ));
  }

  return (
    <Table hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
          <th>Href</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </Table>
  );
}
