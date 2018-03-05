import React,{ Component } from 'react'

export default class Text extends Component {
constructor(props) {
    super(props);

    this.state = {
        text:""
    }
}

changeText = (text) => {
this.setState ({
    text: text
    }
}
render() {
    <input type="text" onChange = {(event) => this.changeText(event)}>

}
}
