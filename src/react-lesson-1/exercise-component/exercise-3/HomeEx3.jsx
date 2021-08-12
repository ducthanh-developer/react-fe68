import React, { Component } from 'react';
import Carouses from './Carouses';
import Footer from './Footer';
import Header from './Header';
import List from './List';
class HomeEx3 extends Component {
    render(){
        return (
            <div>
                <Header />
                <Carouses />
                <List />
                <Footer />
            </div>
        );
    }
}

export default HomeEx3;