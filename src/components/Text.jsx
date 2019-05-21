import React, { Component } from 'react';

class Text extends Component {

    render() {
        const { content } = this.props
        return (
            <h1 className="Text" >{content}</h1>
        )
    }
}

export default Text;