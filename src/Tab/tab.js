import React from 'react';

import style from './style.scss';
import { Button, Text } from '../';


export default class Tab extends React.Component {

    constructor(props){
        super(props);

    this.defaultData = [{tab_name:"Tab 1", tab_ui: <Text text="Alibaba"/>},
                        {tab_name:"Tab 2", tab_ui: <Text text="40 tên cướp"/>},
                        {tab_name:"Tab 3", tab_ui: <Text text="20 tên cướp"/>},
                        {tab_name:"Tab 4", tab_ui: <Button label="Doreamon"/>}];

        this.state = {
            currentTabIndex : 0,
            tabs: this.props.tabs || this.defaultData
        }
        
    }

    render(){
        return (<div className='tab-container'>
                    <div className='tab-control'>
                        {this.renderTabControl()}
                    </div>
                    <div className='tab-view'>
                        {this.renderTabView()}
                    </div>
                </div>)
    }

    renderTabControl(){
        var buttons = [];
        for(var i = 0; i < this.state.tabs.length; i++){
            var button = <Button className={this.getTabButtonClassName(i)} 
                                 label={this.state.tabs[i].tab_name}
                                 onClick={this.onClick.bind(this,i)}
                                 key={i}/>;
            buttons.push(button);
        }

        return buttons;
    }

    getTabButtonClassName(index){
        if(index == this.state.currentTabIndex){
            return this.props.currentTabClassName || "currentTab";
        }
        else {
            return this.props.btnTabClassName || "tab-button";
        }
    }


    onClick(index){
        this.setState({currentTabIndex: index});
        if(this.props.onClick != undefined) this.props.onClick.call(this,index);
    }


    renderTabView(){
        return (<div className="tab-view">
                {this.state.tabs[this.state.currentTabIndex].tab_ui}
                </div>)
    }

}