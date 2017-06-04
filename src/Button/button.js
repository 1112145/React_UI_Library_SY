import React, { Component } from 'react';
import style from './style.scss';

// TODO: Change button image.
export default class Button extends Component {

    render() {
        return (<button
                    onClick={this.onClick.bind(this)}
                    className={this.props.className || "button"}
                    id={this.props.id}>
                    {this.props.label || "Button"}
                </button>)
    }

    onClick() {
        if(this.props.onClick != undefined)
            this.props.onClick.call();
    }

}