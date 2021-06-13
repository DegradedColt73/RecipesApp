import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './rootNavigation';
import Home from '../screens/Home';
import Info from '../screens/Info';
import Find from '../screens/Find';
import ViewAll from '../screens/ViewAll';
import Settings from '../screens/Settings';
import Favourites from '../screens/Favourites';

//navigation drawer
export default class HomeDrawer extends Component {

    //component logic
    Drawer = createDrawerNavigator();

    //component lifecycle
    render() {
        return (
            <NavigationContainer ref={navigationRef}>
                <this.Drawer.Navigator initialRouteName="Home">
                    <this.Drawer.Screen name="Home" component={Home} />
                    <this.Drawer.Screen name="Find" component={Find} />
                    <this.Drawer.Screen name="View All" component={ViewAll} />
                    <this.Drawer.Screen name="Info" component={Info} />
                    <this.Drawer.Screen name="Settings" component={Settings} />
                    <this.Drawer.Screen name="Favourites" component={Favourites} />
                </this.Drawer.Navigator>
            </NavigationContainer>
        );
    };
};
