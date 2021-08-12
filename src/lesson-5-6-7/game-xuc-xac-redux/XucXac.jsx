import React, { Component } from 'react';
import {connect} from 'react-redux';

class XucXac extends Component {
    render() {
        const {mangXucXac} = this.props;
        return (
            <div>
                {mangXucXac.map((xucXac, idx)=>{
                    return <img key={idx} src={xucXac.hinhAnh} width="60px" className="pr-1"/>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    mangXucXac: state.gameXucXacReducer.mangXucXac,
})

export default connect(mapStateToProps)(XucXac);