import React from 'react';
import style from './style.scss';
import { Overlay } from '../';

export default class Dialog extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className='dialog' ref={(instance) => this.container = instance}>
            <Overlay id='overlay-dialog' onClick={this.onClickOverlay.bind(this)} />
            <div id={this.props.id || 'dialog-content'}>
                {this.props.children}
            </div>
        </div>)
    }

    onClickOverlay() {
        this.hide();
    }

    componentDidMount() {
        this.content = document.getElementById(this.props.id || 'dialog-content');
        this.overlay = document.getElementById('overlay-dialog');
        this.hide();
    }

    show = function () {
        this.container.style.zIndex = 0;
        this.overlay.style.display = 'block';
        this.content.style.height = '0px';
        this.content.style.height = '40%';
    }

    hide = function () {
        this.container.style.zIndex = -1;
        this.overlay.style.display = 'none';
        this.content.style.height = '40%';
        this.content.style.height = '0px';
    }
}
