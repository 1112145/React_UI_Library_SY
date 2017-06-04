import React from 'react';

import style from './style.scss';
import {Text} from '../';

export default class TextInput extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (<div className='input-text-container'>
                    {this.renderTitle()}
                    <input placeholder={this.props.placeholder || 'Enter some text!'}
                           ref = {(input) => {this.input = input}}
                           onChange={this.onChange.bind(this)}
                           onKeyDown ={this.onEnter.bind(this)}
                           className ={this.props.className || 'inputText'}
                           type={this.props.type || 'text'}
                           />
                    {this.renderMessage()}
                </div>)
    }

    renderTitle(){
        if(this.props.title != undefined){
            return <Text className={this.props.titleclassName || 'title' } text={this.props.title}/>
        }
    }

    renderMessage(){
        if(this.props.error != undefined){
            return <Text text = {this.props.error} className = 'error'/>
        }

        if(this.props.warning != undefined){
            return <Text text = {this.props.warning} className = 'warning'/>
        }

        if(this.props.success != undefined){
            return <Text text = {this.props.success} className = 'success'/>
        }


    }

    onChange = function(){
        if(this.props.onChange != undefined)
            this.props.onChange.call(this, this.input.value);
    }

    onEnter = function(e) {
        if(e.keyCode == 13){
            if(this.props.onEnter != undefined)
                this.props.onEnter.call(this,this.input.value);
            this.clearText();
        }
    }

    clearText(){
        this.input.value = '';
    }

}

