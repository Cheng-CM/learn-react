import React, { Component } from 'react';
import { Spring, animated } from 'react-spring'
var cowsay = require("cowsay");
class Cow extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "...", lines: ['Moo', 'MOO'], eyes: "oo", animation: { from: "", to: "" } }
        this.default = this.default.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.touch = this.touch.bind(this);
    }

    componentDidMount() {

    }

    render() {
        return <Spring
            from={this.state.animation.from}
            to={this.state.animation.to}>{styles => (
                <animated.div style={styles} onClick={this.handleClick}>
                    <pre style={{ textAlign: 'left' }}>
                        {cowsay.say({ text: this.state.text, eyes: this.state.eyes })}
                    </pre>
                </animated.div>)}</Spring>
    }

    handleClick() {
        this.touch()
    }
    
    touch() {
        this.setState({ text: "MOO!", eyes: '><', animation: { from: { y: 0 }, to: [{ y: -20 }, { y: 0 }] } });
        setTimeout(() => { this.default(); }, 1000);
    }

    default() {
        this.setState({ ...this.state, text: "...", eyes: 'oo' })
    }
}
export default Cow;
