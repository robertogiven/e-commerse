import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DataProductAPI() {
  const [dataProductAPI, setDataProductApi] = useState([]);

  useEffect(() => {
    getDataProductFromApi();
  }, []);

  const getDataProductFromApi = async () => {
    const getDataProduct = await axios.get(
      "http://localhost:3001/api/dataproduct"
    );
    setDataProductApi(getDataProduct.data.data);
  };

  return (
    <div className="container">
      <h1> Data Product API</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {dataProductAPI.map((item, index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td>{item.img}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
