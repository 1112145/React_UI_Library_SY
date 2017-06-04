import style from './style.scss';
import React from 'react';

import { TextInput } from '../';

export default class PasswordField extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return <TextInput type='password'
                          placeholder = {this.props.placeholder || 'Enter Password!'}
                          onEnter={this.onEnter.bind(this)}
                          onChange={this.onChange.bind(this)}
                          title={this.props.title || 'Title'}
                          />
    }

    onEnter(value){
        if(this.props.onEnter != undefined)
            this.props.onEnter.call(this,value);
    }

    onChange(value){
        if(this.props.onChange != undefined)
            this.props.onChange.call(this,value);
    }

}