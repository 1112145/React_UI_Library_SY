import React, { Component } from 'react';
import style from './style.scss';

export default class ListView extends Component {

    render() {
        return (<div className={this.props.className || 'list'}>{this.renderItems()}</div>);
    }

    renderItems() {
        if (this.props.items == undefined) return;
        var items = [];
        for (var i = 0; i < this.props.items.length; i++) {
            var element = <div key={i}
                className={this.props.itemClassName || 'list-item'}
                onClick={this.onItemClick.bind(this, i)}>
                {this.props.items[i]}
            </div>;
            items.push(element);
        }

        return items;
    }

    onItemClick(index) {
        if (this.props.onItemClick != undefined)
            this.props.onItemClick.call(this, index);
    }

}