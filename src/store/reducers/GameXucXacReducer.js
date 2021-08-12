import * as gameXucXacConstants from "../constants/gameXucXacConstants";

const initialState = {
  taiXiu: true, // true: tài (3- 11), xỉu: > 12
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    { diem: 1, hinhAnh: "./images/gameXucXac/1.png" },
    { diem: 1, hinhAnh: "./images/gameXucXac/1.png" },
    { diem: 1, hinhAnh: "./images/gameXucXac/1.png" },
  ],
};

const gameXucXacReducer = (state = initialState, { type, payload }) => {
  //   const { type, payload } = action;
  switch (type) {
    case gameXucXacConstants.CHON_TAI_XIU:
      state.taiXiu = payload;
      return { ...state };
    case gameXucXacConstants.DAT_CUOC:
      const mangXucXacRanDom = [];
      state.soBanChoi += 1;
      for (let i = 0; i < 3; i++) {
        const soNgauNhien = Math.floor(Math.random() * 6) + 1;

        const xucXacNgauNhien = {
          diem: soNgauNhien,
          hinhAnh: `./images/gameXucXac/${soNgauNhien}.png`,
        };

        mangXucXacRanDom.push(xucXacNgauNhien);
      }

      const tongDiemXucXac = mangXucXacRanDom.reduce((tongDiem, xucXac) =>{
        return tongDiem += xucXac.diem;
      }, 0)

      if((state.taiXiu && tongDiemXucXac <= 11) || (!state.taiXiu && tongDiemXucXac >= 12)){
          state.soBanThang += 1;
      }

      return { ...state, mangXucXac: mangXucXacRanDom };
    default:
      return state;
  }
};

export default gameXucXacReducer;
