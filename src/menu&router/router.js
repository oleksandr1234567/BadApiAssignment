//@Autor Oleksandr Zakirov
import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

// Basic imports

// Component imports
import Home from '../pages/Home';
import Jackets from '../pages/Jackets';
import Accessories from '../pages/Accessories';
import Shirts from '../pages/Shirts';


export default class RoutingSystem extends React.Component {

    render() {
        return (
            <section style={{
                overflowY: 'auto',
                overflowX: 'hidden'
            }}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/jackets" component={Jackets} />
                    <Route path="/shirts" component={Shirts} />
                    <Route path="/accessories" component={Accessories} />
                  
                </Switch>
            </section>
          );
    }
}