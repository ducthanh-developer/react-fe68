import React, { Component } from "react";

export default class DemoListAndKeys extends Component {
  productList = [
    {
      id: 1,
      name: "Crystal Black",
      price: 10000,
      image: "./images/black-car.jpg",
    },
    {
      id: 2,
      name: "Mordern Steel",
      price: 20000,
      image: "./images/steel-car.jpg",
    },
    {
      id: 3,
      name: "Lunar Silver",
      price: 30000,
      image: "./images/silver-car.jpg",
    },
    { id: 4, name: "Rallye Red", price: 40000, image: "./images/red-car.jpg" },
  ];

  renderProductList = () => {
    return this.productList.map((car, index) => {
      const { id, name, price, image } = car;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{price}</td>
          <td>
            <img src={image} width="50px" alt="" />
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center my-4">List of Fashion car</h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>{this.renderProductList()}</tbody>
        </table>
      </div>
    );
  }
}
