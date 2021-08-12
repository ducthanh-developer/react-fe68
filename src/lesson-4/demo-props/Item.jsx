import React, { Component } from 'react';

class Item extends Component {
    render() {
        // Nhận props từ object props trong component
        // Lấy giá trị của các props thông qua key mà chúng ta truyền
        const { name, desc } = this.props;
        
        return (
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-collection" />
                  </div>
                  <h2 className="fs-4 fw-bold">{name}</h2>
                  <p className="mb-0">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
        )
    }
}

export default Item;