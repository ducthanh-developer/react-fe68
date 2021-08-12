import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddToShoppingList } from "../../store/actions/shoesShopAction";

class ProductItem extends Component {
  render() {
    const { shoe, addToShoppingList } = this.props;
    return (
      <div className="col-4" style={{ paddingBottom: "30px" }}>
        <div className="card">
          <img className="card-img-top" src={shoe.image} alt />
          <div className="card-body">
            <h4 className="card-title">{shoe.name}</h4>
            <p className="card-text">{shoe.price}$</p>
            <button
              className="btn btn-dark"
              onClick={() => addToShoppingList(shoe)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToShoppingList: (shoe) => {
    dispatch(actAddToShoppingList(shoe));
  },
});
export default connect(null, mapDispatchToProps)(ProductItem);