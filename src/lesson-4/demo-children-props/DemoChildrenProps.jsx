import React, { Component } from 'react'
import Button from './Button'

export default class DemoChildrenProps extends Component {
    render() {
        return (
            <div>
                {/* Children Props: truyền nội dung giữa 2 thẻ đóng mở */}
                <Button>Login</Button>
                <Button>Register</Button>
                <Button>View</Button>
                <Button>View All</Button>
            </div>
        )
    }
}
