import React, { Component } from 'react';
import style from './style.scss';

export default class Overlay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id={this.props.id}
            className={this.props.className || "overlay"}
            onClick={this.onClickOverlay.bind(this)}
            >
        </div>)
    }

    onClickOverlay() {
        if (this.props.onClick != undefined)
            this.props.onClick.call();
    }
}