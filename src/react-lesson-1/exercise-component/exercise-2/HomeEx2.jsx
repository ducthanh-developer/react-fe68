import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Navigation from './Navigation';
import Footer from './Footer';
class HomeEx2 extends Component {
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Header />
                    </div>
                    <div className="col-4">
                        <Navigation />
                    </div>
                    <div className="col-8">
                        <Content />
                    </div>
                    <div className="col-12">
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeEx2;