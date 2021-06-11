import React, {Component} from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/styles';
import TitleBar from '../shared/TitleBar';


//Info Screen Component
export default class Info extends Component {

  //component lifecycle
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <React.Fragment>
        <TitleBar name={this.props.route.name} theme={this.theme} navigation={this.props.navigation}></TitleBar>
        <View style={globalStyles.screenContainer}>
          <Text>Developed by: {"\n"}Mieszko Maciura {"&"} Kamil Pagacz</Text>
        </View>
      </React.Fragment>
    );
  };

  //styles
  theme = {
    color: {
      primary: '#c2185b',
      primaryLight: '#fa5788',
      primaryDark: '#8c0032',
      primaryText: '#ffffff',
      // primaryBackground: '#E1E2E1',
      // seconaryBackground: '#F5F5F6'
    }
  }
};