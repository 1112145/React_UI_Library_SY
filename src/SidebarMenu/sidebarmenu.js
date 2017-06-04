import React from 'react';
import style from './style.scss';
import { Image, ListView, Overlay } from '../';

export default class SidebarMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isVisible: false};
    }

    render() {
        return (<div>
            <Image id="btn-menu" src={this.props.src || 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyNCAxMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTEyLDZIMTJDNS40LDYsMCwxMS40LDAsMThzNS40LDEyLDEyLDEyaDEwMGM2LjYsMCwxMi01LjQsMTItMTJTMTE4LjYsNiwxMTIsNnoiIGZpbGw9IiNGRkZGRkYiLz4KCTxwYXRoIGQ9Ik0xMTIsNTBIMTJDNS40LDUwLDAsNTUuNCwwLDYyYzAsNi42LDUuNCwxMiwxMiwxMmgxMDBjNi42LDAsMTItNS40LDEyLTEyQzEyNCw1NS40LDExOC42LDUwLDExMiw1MHoiIGZpbGw9IiNGRkZGRkYiLz4KCTxwYXRoIGQ9Ik0xMTIsOTRIMTJjLTYuNiwwLTEyLDUuNC0xMiwxMnM1LjQsMTIsMTIsMTJoMTAwYzYuNiwwLDEyLTUuNCwxMi0xMlMxMTguNiw5NCwxMTIsOTR6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=='} onClick={this.onClickBtnMenu.bind(this)} />
            {this.renderMenu()}
        </div>);
    }

    renderMenu() {
        var element = <div id='menu'>
        <Overlay id="overlay-sidebar" onClick={this.onClickOverlay.bind(this)} />
            <div id='sidebar-menu-container'>{this.props.children}</div>
        </div>

        return element;
    }

    componentDidMount(){
        this.container = document.getElementById('sidebar-menu-container');
        this.overlay = document.getElementById('overlay-sidebar');
        this.hide();
    }


    onClickOverlay(){
        this.hide();
    }

    onClickBtnMenu() {
        this.show();
    }

    show = function(){
        this.overlay.style.display = 'block';
        this.container.style.left = "-100%";
        this.container.style.left = "0%";
    }

    hide = function(){
        this.container.style.left = "0%";
        this.container.style.left = "-100%";
        this.overlay.style.display = 'none';
    }

} 