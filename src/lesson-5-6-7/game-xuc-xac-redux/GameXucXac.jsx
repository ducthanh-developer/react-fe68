import React, { Component } from "react";
import "./GameXucXac.css";
import ThongTinGame from "./ThongTinGame";
import XucXac from "./XucXac";
import { connect } from "react-redux";
import { actChonTaiXiu,actDatCuoc } from '../../store/actions/gameXucXacActions';

class GamXucXac extends Component {
  render() {
    const {taiXiu, chonTaiXiu, datCuoc} = this.props;
    return (
      <div className="game-container">
        <h1 className="text-center py-5">GAME ĐỔ XÚC XẮC</h1>
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-5">
              <button className={`btnTaiXiu ${taiXiu && 'btnTaiXiuSelected'}`} onClick={() => chonTaiXiu(true)}>TÀI</button>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <XucXac />
            </div>
            <div className="col-5">
              <button className={`btnTaiXiu ${!taiXiu && 'btnTaiXiuSelected'}`} onClick={() => chonTaiXiu(false)}>XỈU</button>
            </div>
          </div>
          <div className="text-center">
            <ThongTinGame />
            <button className="btn btn-success mt-4 px-4 py-2" onClick={() => datCuoc()}>ĐẶT CƯỢC</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  taiXiu: state.gameXucXacReducer.taiXiu,
});

const maoDispatchToProps = dispatch => ({
  chonTaiXiu: taiXiu => {
    dispatch(actChonTaiXiu(taiXiu));
  },

  datCuoc: () => {
    dispatch(actDatCuoc());
  }
})

export default connect(mapStateToProps, maoDispatchToProps)(GamXucXac);

