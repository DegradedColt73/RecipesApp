import React, { Component } from 'react';
import { Text, Views } from 'react-native';
import globalStyles from '../styles/styles';
import TitleBar from '../shared/TitleBar';

//settings screen component
export default class Settings extends Component {
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
            primary: '#455a64',
            primaryLight: '#718792',
            primaryDark: '#1c313a',
            primaryText: '#ffffff',
            // primaryBackground: '#E1E2E1',
            // seconaryBackground: '#F5F5F6'
        }
    }
}