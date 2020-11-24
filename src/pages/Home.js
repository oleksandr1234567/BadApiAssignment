//@Autor Oleksandr Zakirov
import React from 'react';
import { Typography } from 'antd';

// Icon imports
import { FaRocket } from 'react-icons/fa';

// Destructuring imports
const { Title } = Typography;

// Main class
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div className="App" >
                <Title level={2} style={{textAlign: 'center'}}>Hello</Title>

                <FaRocket className="App-logo" />

                <Title level={4} style={{textAlign: 'center'}}>You can start using the app. </Title>

                <p>Code available at: https://github.com/oleksandr1234567/BadApiAssignment</p>
            </div>
        );
    }
}