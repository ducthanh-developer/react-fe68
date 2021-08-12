import React, { Component } from 'react'

export default class DemoHandlingEvent extends Component {
    // Hàm không tham số
    greeting = () => {
        alert('Welcome to this page!');
    }

    // Hàm có tham số
    subscribe = (username) => {
        alert(`Thanks ${username} for subscribing`)
    }
    render() {
        return (
            <div className="text-center mt-5">
                <h1 className="mb-4">Handling Events</h1>
                {/* Gọi hàm không tham số */}
                <button className="btn btn-danger" onClick={this.greeting}>Click me</button>

                {/* Gọi hàm có tham số */}
                <button className="btn btn-danger" onClick={() => this.subscribe("Đức")}>Subscribe</button>
            </div>
        )
    }
}
