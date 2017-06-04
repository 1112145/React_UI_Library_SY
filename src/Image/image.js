import React, { Component } from 'react';
import style from './style.scss';

export default class Image extends Component {

        constructor(props){
                super(props);
        }

        render() {
                var element = <img className={this.props.className || 'image'}
                        id={this.props.id}
                        src={this.props.src}
                        width={this.props.width}
                        height={this.props.height}
                        onClick={this.onClick.bind(this)}
                />
                if(this.props.isVisible == true || this.props.isVisible == undefined) 
                        return element;
                else return null;
        }

        onClick() {
                if (this.props.onClick != undefined)
                        this.props.onClick.call();
        }
}
