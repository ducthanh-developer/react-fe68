import React, { Component } from "react";
class ClassDataBinding extends Component {
  productName = "Iphone 12";
  description = "Mô tả sản phẩm iphone 12";
  renderProduct = () => (
    <div>
      <h1>{this.productName}</h1>
      <p>{this.description}</p>
    </div>
  );
  render() {
    return <div>{this.renderProduct()}</div>;
  }
}

export default ClassDataBinding;
