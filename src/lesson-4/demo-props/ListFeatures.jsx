import React, { Component } from 'react';
import Item from './Item';

class ListFeatures extends Component {
  render() {
    return (
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
            {/* props:
            - Tương tự như thuộc tính của 1 thẻ html
            - Truyền props với dạng key=value
            - Truyền từ component cha (ListFeatures) sang component con (Item) */}
            <Item name="Name 1" desc="Description 1" />
            <Item name="Name 2" desc="Description 2" />
            <Item name="Name 3" desc="Description 3" />
            <Item name="Name 4" desc="Description 4" />
            <Item name="Name 5" desc="Description 5" />
            <Item name="Name 6" desc="Description 6" />
          </div>
        </div>
      </section>
    );
  }
}

export default ListFeatures;
