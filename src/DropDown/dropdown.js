import React from 'react';

import { ListView, Image } from '../index.js';
import style from './style.scss';

export default class DropDown extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isShowing: false,
            items: this.props.items || ["item 1","item 2", "item 3","item 4","item 5", "item 6"],
            currentIndex: 0
        }

        
    }

    render() {
        return <div className="dropdown">
                    <input ref={(input) => {this.input = input}} onClick={this.onClickDropdown.bind(this)} readOnly />
                    <Image className="btn-dropdown"
                            src={this.props.src || 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'} 
                            onClick={this.onClickDropdown.bind(this)}/>
                    {this.showList()}
               </div>
    }

    onClickDropdown(){
        this.setState({isShowing: !this.state.isShowing});
    }

    onItemClick(index){
        this.setState({isShowing: false, currentIndex: index});
        this.input.value = this.state.items[index];
        if(this.props.onItemClick != undefined)
            this.props.onItemClick.call(this, index);
    }

    showList(){
        if(this.state.isShowing){
            return <ListView className="dropdown-menu-list" 
                         items={this.state.items}
                         itemClassName='dropdown-item'
                         onItemClick={ this.onItemClick.bind(this)}/>;
        }
    }

}