import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actUpdateQuantity,
  actRemoveFromShoppingList,
} from "../../store/actions/shoesShopAction";

class ShoppingList extends Component {
  render() {
    const { shoppingList, updateQuantity, removeFromShoppingList } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="shoppingList"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {shoppingList.length > 0 ? (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shoppingList.map((shoe) => {
                        const { id, name, price, quantity, image } = shoe;
                        return (
                          <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>
                              <img src={image} alt="" width="40px" />
                            </td>
                            <td>{price}$</td>
                            <td>
                              <button
                                className="btn btn-success"
                                onClick={() => updateQuantity(id, true)}
                              >
                                +
                              </button>{" "}
                              {quantity}{" "}
                              <button
                                className="btn btn-danger"
                                onClick={() => updateQuantity(id, false)}
                              >
                                -
                              </button>
                            </td>
                            <td>{price * quantity}$</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => removeFromShoppingList(id)}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center my-4">There is no item</div>
                )}
                {/* Tính tổng tiền thanh toán */}
                {shoppingList.length > 0 && (
                  <div className="text-right">
                    <span className="font-weight-bold">Total payment:</span>{" "}
                    <span>
                      {/* total : biến tích lũy
                        current: element hiện tại */}
                      {shoppingList.reduce((total, current) => {
                        return (total += current.price * current.quantity);
                      }, 0)}
                      $
                    </span>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Connect tới store redux để lấy dữ liệu trở thành props của component
const mapStateToProps = (state) => ({
  shoppingList: state.shoesShopReducer.shoppingList,
});

const mapDespatchToProps = (dispatch) => ({
  updateQuantity: (id, type) => {
    dispatch(actUpdateQuantity(id, type));
  },
  removeFromShoppingList: (id) => {
    dispatch(actRemoveFromShoppingList(id));
  },
});
// Connect: giúp connect react component
export default connect(mapStateToProps, mapDespatchToProps)(ShoppingList);
