import React, { Component } from 'react'
import Counter from './Counter'

export default class DemoReactLifeCircles extends Component {
    render() {
        console.log('DemoReactLifeCircles render');
        return (
            <div>
                DemoReactLifeCircles
                <Counter />
            </div>
        )
    }
}
