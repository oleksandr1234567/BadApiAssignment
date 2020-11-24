//@Autor Oleksandr Zakirov
import React from 'react';
import { Layout, Typography } from 'antd';

// Icon imports
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';

// Basic imports (Styles, images etc.)
import 'antd/dist/antd.css';
import './App.css';



// Component imports
import RoutingSystem from './menu&router/router';
import MenuSide from './menu&router/menu';



// Destructuring imports
const { Header, Content, Sider } = Layout;
const { Title } = Typography;

// Main class
export default class App extends React.Component {
    constructor(props) {
        super(props);
        // Set the primary state
        this.state = {
            menuCollapsed: false,
            
           
        };
        // Collapse menu on mobile widths
        if(window.screen.width < 750) {
            this.state.menuCollapsed = true;
        }

        this.menuCollapse = this.menuCollapse.bind(this);

    }

    menuCollapse = () => {
        this.setState({
            menuCollapsed: !this.state.menuCollapsed,
        });
    };

    
    render() {
            return (
            <Layout className="app_main_window">
                <Sider trigger={null} collapsible collapsed={this.state.menuCollapsed}>
                    <div className="logo">Menu</div>
                    <MenuSide collapseMenu= {this.menuCollapse}>  </MenuSide>
                </Sider>

                <Layout className="site-layout">
                
                <Header className="site-main-header" style={{ padding: 0 }}>
                    {React.createElement(this.state.menuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger collapseMenuButton' + (this.state.menuCollapsed ? '' : ' sidemenuCollapsed'),
                    onClick: this.menuCollapse,
                    })}
                    <Title level={2} style={{padding: '0 15px', marginTop: '10px'}}> The absolutely amazing viewer</Title>
                    <Title level={3} style={{padding: '0 15px', marginTop: '10px'}}> TAAV</Title>
                </Header>

                <Content
                    className="site-layout-background"
                    style={{
                    margin: '12px 8px',
                    padding: 12,
                    minHeight: 280,
                    
                    }}
                >
                    <RoutingSystem></RoutingSystem>
                </Content>
                </Layout>
            </Layout>
            );
        }
    }
