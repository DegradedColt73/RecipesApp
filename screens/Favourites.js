import React, { Component } from 'react';
import { Text, Views } from 'react-native';
import globalStyles from '../styles/styles';
import TitleBar from '../shared/TitleBar';

//settings screen component
export default class Favourites extends Component {
    //component lifecycle
    //part of navigation
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <TitleBar name={this.props.route.name} theme={this.theme} navigation={this.props.navigation}></TitleBar>
            </React.Fragment>
        )
    };

    //styles
    theme = {
        color: {
            primary: '#fbc02d',
            primaryLight: '#fff263',
            primaryDark: '#c49000',
            primaryText: '#000000',
            // primaryBackground: '#E1E2E1',
            // seconaryBackground: '#F5F5F6'
        }
    }
}