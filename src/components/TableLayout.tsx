import { Table } from "reactstrap";
import { uid } from "uid";
import { ProductListInterface } from "./interfaces/index";

 const TableLayout = ({ productList }: ProductListInterface) => {
  const renderRows = () => {
    return productList.map(({ image, video, title, price, href }) => (
      <tr key={uid()} className="product-row">
        <th scope="row">
          <img src={image.src} alt={title} />
        </th>
        <td>{title}</td>
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
          <th>Product</th>
          <th>Href</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </Table>
  );
}

export default TableLayout;
