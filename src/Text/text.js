import React, {Component} from 'react';
import style from './style.scss';

export default class Text extends Component {
    
    render(){
        return <span className={this.props.className || "text"}
                    onClick = {this.onClick.bind(this)}
                     id={this.props.id}>
                    {this.props.text || 'Text'}
                </span>
    }

    onClick(){
        if(this.props.onClick != undefined) 
            this.props.onClick.call();
    }

}
