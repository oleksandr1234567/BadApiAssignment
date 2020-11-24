//@Autor Oleksandr Zakirov// Package imports
import React from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { Router, Route, Switch } from "react-router";
import 'antd/dist/antd.css';


// Icon imports
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons  from "react-icons/gi";
import * as FaIcons  from "react-icons/fa";


export default class MenuSide extends React.Component {
    
    constructor(props) {
        super(props);

        this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMenuClick() {
        // Collapse menu on mobile widths
        if(window.screen.width < 750) {
            this.props.collapseMenu();
        }
    }


    render() {

        return (
            <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']}>

                <Menu.Item key="1" icon={<AiIcons.AiOutlineHome     className="MuiSvgIcon-root"/>} onClick={this.onMenuClick}> <Link to="/"> Home</Link> </Menu.Item>
                <Menu.Item key="2" icon={<GiIcons.GiMonclerJacket   className="MuiSvgIcon-root"/>} onClick={this.onMenuClick}> <Link to="/jackets"> Jackets</Link> </Menu.Item>
                <Menu.Item key="3" icon={<IoIcons.IoIosShirt        className="MuiSvgIcon-root"/>} onClick={this.onMenuClick}> <Link to="/shirts"> Shirts</Link> </Menu.Item>
                <Menu.Item key="4" icon={<FaIcons.FaRedhat          className="MuiSvgIcon-root"/>} onClick={this.onMenuClick}> <Link to="/accessories"> Accessories</Link> </Menu.Item>
          
            </Menu>
      );
    }
}
