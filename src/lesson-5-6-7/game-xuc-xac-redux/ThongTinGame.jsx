import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinGame extends Component {
  render() {
    const { taiXiu, soBanThang, soBanChoi } = this.props;
    return (
      <div className="pt-5">
        <h1>
          BẠN CHỌN:{" "}
          <span className="text-danger">{taiXiu ? "TÀI" : "XỈU"}</span>
        </h1>
        <h1>
          SỐ LẦN THẮNG: <span className="text-primary">{soBanThang}</span>
        </h1>
        <h1>
          TỔNG SỐ LẦN CHƠI: <span className="text-success">{soBanChoi}</span>
        </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  taiXiu: state.gameXucXacReducer.taiXiu,
  soBanThang: state.gameXucXacReducer.soBanThang,
  soBanChoi: state.gameXucXacReducer.soBanChoi,
});

export default connect(mapStateToProps)(ThongTinGame);
