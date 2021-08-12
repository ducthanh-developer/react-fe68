import * as gameXucXacConstants from '../constants/gameXucXacConstants'

export const actChonTaiXiu = taiXiu => ({
    type: gameXucXacConstants.CHON_TAI_XIU,
    payload: taiXiu,
});

export const actDatCuoc = taiXiu => ({
    type: gameXucXacConstants.DAT_CUOC,
});
