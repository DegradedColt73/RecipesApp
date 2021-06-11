import React, { Component } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, Linking } from 'react-native';
import globalStyles from '../styles/styles';
import TitleBar from '../shared/TitleBar';
import Card from '../shared/Card';


//find screen component
export default class Find extends Component {

    //component lifecycle
    //part of navigations
    state = {
        data: [],
        operationalData: [],
        isLoading: true,
        inputText: '',
        inputComponents: []
    };

    constructor(props) {
        super(props);
    };

    render() {
        let properView = '';

        if (this.state.operationalData) {
            properView = <FlatList contentContainerStyle={{ paddingBottom: 20 }} style={{ paddingTop: 20 }} data={this.state.operationalData}
                renderItem={({ item }) =>
                    <Card title={item.title} content={item.components}>
                        <Text>{item.description}</Text>
                    </Card>}
            />
        }

        return (
            <React.Fragment>
                <TitleBar name={this.props.route.name} theme={this.theme} navigation={this.props.navigation}></TitleBar>
                <View style={globalStyles.screenContainer}>
                    <TextInput onChangeText={(text) => { this.inputTextTracker(text) }} placeholder="Wypisz składniki" style={this.styles.inputField}></TextInput>
                    {properView}
                </View>
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
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    //component logic
    theme = {
        color: {
            primary: '#dd2c00',
            primaryLight: '#ff6434',
            primaryDark: '#a30000',
            primaryText: '#ffffff'
        }
    }

    inputTextTracker = (text) => {
        this.state.inputComponents = text.split(' ');

        if(text === ''){
            this.setState({operationalData: []});
            return;
        }

        this.setState({ operationalData: JSON.parse(JSON.stringify(this.state.data)) })
        this.setState({ inputText: text }, () => {
            this.setState({
                operationalData: this.state.data.filter((item) => {
                    let temporaryComponentsArray = [];
                    temporaryComponentsArray = item.components.filter((component) => {
                        return (component.toLowerCase().includes(this.state.inputText.toLowerCase()))
                    })
                    console.log(temporaryComponentsArray);
                    console.log(this.state.inputComponents);
                    return (temporaryComponentsArray.length === 0) ? false : true;
                })
            })
        });
    }

    //styles
    styles = StyleSheet.create({
        inputField: {
            //structure
            marginVertical: 20,
            marginHorizontal: 20,
            height: 50,
            paddingHorizontal: 14,
            //look
            borderRadius: 10,
            elevation: 4,
            backgroundColor: '#fff',
            shadowOffset: {
                width: 1,
                height: 1
            },
            shadowColor: '#333',
            shadowOpacity: 0.3
        }
    })
};