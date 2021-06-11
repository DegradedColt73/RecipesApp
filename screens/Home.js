import React from 'react';
import { View } from 'react-native';
import globalStyles from '../styles/styles';
import HomeTileComponent from '../components/HomeTileContainer';
import TitleBar from '../shared/TitleBar';
import StatusBarOnFocusRefreshableComponent from '../classes/StatusBarOnFocusRefreshableComponent';

//Home screen component
export default class Home extends StatusBarOnFocusRefreshableComponent {

  //Component lifecycle
  constructor(props){
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <TitleBar name={this.props.route.name} theme={this.theme} home={true}></TitleBar>
        <View style={globalStyles.screenContainer}>
          <HomeTileComponent></HomeTileComponent>
        </View>
      </React.Fragment>
    );
  };

  //styles
  theme = {
    color: {
      primary: '#0277bd',
      primaryLight: '#58a5f0',
      primaryDark: '#004c8c',
      primaryText: '#ffffff',
      // primaryBackground: '#E1E2E1',
      // seconaryBackground: '#F5F5F6'
    }
  }
};