/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';

import BasicTable from '../components/tables/BasicTables';
import AdvancedTable from '../components/tables/AdvancedTables';
import BasicForm from '../components/forms/BasicForm';
import AsynchronousTable from '../components/tables/AsynchronousTable';
import AuthBasic from '../components/auth/Basic';
import Dashboard from '../components/dashboard/Dashboard';
import RouterEnter from '../components/auth/RouterEnter';
import ExampleAnimations from '../components/animation/ExampleAnimations';
import BasicAnimations from '../components/animation/BasicAnimations';
import Drags from '../components/ui/Draggable';

import Icons from '../components/ui/Icons';
import Buttons from '../components/ui/Buttons';
import Spins from '../components/ui/Spins';
import Modals from '../components/ui/Modals';
import Notifications from '../components/ui/Notifications';
import Tabs from '../components/ui/Tabs';
import Banners from '../components/ui/banners';



export default class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { auth } = this.props;
        const { permissions } = auth.data;
        // const { auth } = store.getState().httpData;
        if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
        return component;
    };
    render() {
        return (
            <Switch>
                <Route exact path="/app/dashboard/index" component={Dashboard} />
                <Route exact path="/app/form/basicForm" component={BasicForm} />
                <Route exact path="/app/table/basicTable" component={BasicTable} />
                <Route exact path="/app/table/advancedTable" component={AdvancedTable} />
                <Route exact path="/app/table/asynchronousTable" component={AsynchronousTable} />


                <Route exact path="/app/ui/icons" component={Icons} />
                <Route exact path="/app/ui/buttons" component={Buttons} />
                <Route exact path="/app/ui/spins" component={Spins} />
                <Route exact path="/app/ui/modals" component={Modals} />
                <Route exact path="/app/ui/notifications" component={Notifications} />
                <Route exact path="/app/ui/tabs" component={Tabs} />
                <Route exact path="/app/ui/banners" component={Banners} />
                <Route exact path="/app/ui/drags" component={Drags} />


                <Route exact path="/app/animation/basicAnimations" component={BasicAnimations} />
                <Route exact path="/app/animation/exampleAnimations" component={ExampleAnimations} />
                <Route exact path="/app/auth/basic" component={AuthBasic} />
                <Route exact path="/app/auth/routerEnter" component={(props) => this.requireAuth('auth/testPage', <RouterEnter {...props} />)} />

                <Route render={() => <Redirect to="/404" />} />


            </Switch>
        )
    }
}