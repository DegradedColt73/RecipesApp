import React, { Component } from 'react';
import { Text, ActivityIndicator, FlatList } from 'react-native';
import Card from '../shared/Card';
import TitleBar from '../shared/TitleBar';


//View all component
export default class ViewAll extends Component {

  state = {
    data: [],
    isLoading: true
  }

  //component lifecycle
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <TitleBar name={this.props.route.name} theme={this.theme} navigation={this.props.navigation}></TitleBar>
        {this.state.isLoading ? <ActivityIndicator /> :
          <FlatList contentContainerStyle={{paddingBottom: 20}} style={{paddingTop: 20}} data={this.state.data}
            renderItem={({ item }) =>
              <Card title={item.title} content={item.components}>
                <Text>{item.description}</Text>
              </Card>}
          />}
      </React.Fragment>
    );
  };

  componentDidMount() {
    fetch('https://reactrecipeapps-default-rtdb.europe-west1.firebasedatabase.app/.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json })
      })
      .catch((error) => console.error(error))
      .finally(() => this.setState({ isLoading: false }));
  }


  theme = {
    color: {
      primary: '#2e7d32',
      primaryLight: '#60ad5e',
      primaryDark: '#005005',
      primaryText: '#ffffff',
      // primaryBackground: '#E1E2E1',
      // seconaryBackground: '#F5F5F6'
    }
  }
};