import React from 'react';

import style from './style.scss';
import { TextInput } from '../';

export default class DatePicker extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <TextInput type='date' 
                          onChange={this.onChange.bind(this)}
                          className={this.props.className}/>
    }

    onChange(value){
        console.log(value);
    }

}


