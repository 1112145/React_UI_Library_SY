import React from 'react';
import style from './style.scss';
import { Image, ListView } from '../';

export default class SearchBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEmpty: true,
            value: '',
            intellisenseData: this.props.intellisenseData || ['AAA', 'ABB', 'CCC', 'DDD', 'EEE'],
            intellisenseResult: []
        }


    }

    render() {
        return (<div className={this.props.className || "search-box"}>
            <Image id='btn-search' src={this.props.src ||"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDQ1LjAwOCA0NS4wMDkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjAwOCA0NS4wMDk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNDMuNDYyLDM1Ljk5N2wtMTEuNDAxLTExLjM3YzEuMTk3LTIuMzUyLDEuODQ1LTQuOTYyLDEuODQ1LTcuNjc2YzAtNC41MjgtMS43NjUtOC43ODUtNC45NjYtMTEuOTg2ICAgQzI1LjczOSwxLjc2MywyMS40ODEsMCwxNi45NTMsMEMxMi40MjYsMCw4LjE2NywxLjc2Myw0Ljk2Niw0Ljk2NUMxLjc2NSw4LjE2NywwLDEyLjQyNCwwLDE2Ljk1MiAgIGMwLDQuNTI4LDEuNzY0LDguNzg1LDQuOTY2LDExLjk4NmMzLjIwMSwzLjIwMiw3LjQ1OSw0Ljk2NSwxMS45ODYsNC45NjVjMi43MTQsMCw1LjMyNS0wLjY0Niw3LjY3NS0xLjg0MmwxMS4zNzEsMTEuNDAyICAgYzEuMDI5LDEuMDI5LDIuMzgyLDEuNTQ2LDMuNzMyLDEuNTQ2YzEuMzUsMCwyLjcwMS0wLjUxNywzLjczMS0xLjU0NkM0NS41MjQsNDEuNCw0NS41MjQsMzguMDU5LDQzLjQ2MiwzNS45OTd6IE05LjQ0NCwyNC40NTkgICBjLTIuMDA1LTIuMDA2LTMuMTA5LTQuNjcxLTMuMTA5LTcuNTA3czEuMTA0LTUuNTAyLDMuMTEtNy41MDhjMi4wMDUtMi4wMDUsNC42NzEtMy4xMSw3LjUwNy0zLjExczUuNTAyLDEuMTA0LDcuNTA4LDMuMTEgICBjMi4wMDUsMi4wMDUsMy4xMSw0LjY3MSwzLjExLDcuNTA3cy0xLjEwNSw1LjUwMi0zLjExLDcuNTA4Yy0yLjAwNiwyLjAwNS00LjY3MywzLjEwOS03LjUwOCwzLjEwOSAgIEMxNC4xMTcsMjcuNTY4LDExLjQ1MSwyNi40NjUsOS40NDQsMjQuNDU5eiIgZmlsbD0iIzNlNDk1MiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="} />
            <input
                ref={(input) => { this.input = input; }}
                placeholder={this.props.labelText}
                onChange={this.onChange.bind(this)}
                onKeyDown={this.onKeyDown.bind(this)} />
            <Image id='btn-clear' src={this.props.src || "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxLjExMiAzMS4xMTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjExMiAzMS4xMTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPHBvbHlnb24gcG9pbnRzPSIzMS4xMTIsMS40MTQgMjkuNjk4LDAgMTUuNTU2LDE0LjE0MiAxLjQxNCwwIDAsMS40MTQgMTQuMTQyLDE1LjU1NiAwLDI5LjY5OCAxLjQxNCwzMS4xMTIgMTUuNTU2LDE2Ljk3ICAgMjkuNjk4LDMxLjExMiAzMS4xMTIsMjkuNjk4IDE2Ljk3LDE1LjU1NiAiIGZpbGw9IiMwMDAwMDAiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="} 
                    onClick={this.onClickClearTextButton.bind(this)} isVisible={!this.state.isEmpty} />
            {this.intellisense()}
        </div>)
    }

    onChange() {
        this.setState({ isEmpty: (this.input.value == ''), value: this.input.value });
        if (this.props.onChange != undefined)
            this.props.onChange.call(this, this.input.value);
    }

    onKeyDown(e) {
        // 13 is enter key code!
        if (e.keyCode === 13) {
            if (this.props.onEnter != undefined) {
                this.props.onEnter.call(this, this.input.value);
            }
            if(this.state.intellisenseResult.length == 0)
                this.resetAll();
            else {
                this.input.value = this.state.intellisenseResult[0];
                this.clearIntelliseneResult();
            }
        }
    }

    onClickClearTextButton() {
        this.resetAll();
        this.setState({ isEmpty: true });
    }

    onClickIntellisenseItem(index){
        this.input.value = this.state.intellisenseResult[index];
        this.clearIntelliseneResult();
    }

    intellisense() {
        this.state.intellisenseResult = [];
        for (var i = 0; i < this.state.intellisenseData.length; i++) {
            if (this.state.intellisenseData[i].toLowerCase().includes(this.state.value.toLowerCase()) && this.state.value != '') {
                this.state.intellisenseResult.push(this.state.intellisenseData[i]);
            }
        }
        return <ListView className='intellisense-list'
            itemClassName='intellisense-list-item'
            items={this.state.intellisenseResult}
            onItemClick={this.onClickIntellisenseItem.bind(this)}/>
    }


    resetAll() {
        this.input.value = '';
        this.setState({
            isEmpty :false,
            intellisenseResult:[],
            value: ''
        });
    }

    clearIntelliseneResult(){
        this.setState({intellisenseResult: []});
    }

}

