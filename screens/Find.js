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
        isLoading: true,
        inputText: '',
        inputComponents: [],
        currentMatchData: [],
        operationalData: [],
        matchedDataSnapshot: [],
        inputComponentsCount: 1
    };

    constructor(props) {
        super(props);
    };

    render() {
        let properView = '';

        if (this.state.currentMatchData) {
            properView = <FlatList contentContainerStyle={{ paddingBottom: 20 }} style={{ paddingTop: 20 }} data={this.state.currentMatchData}
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
                this.setState({ operationalData: JSON.parse(JSON.stringify(this.state.data)) });
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
        console.log(this.state.matchedDataSnapshot);
        this.setState({ inputComponents: text.split(' ') }, () => {
            if(this.state.inputComponents.length > this.state.inputComponentsCount){
                console.log('a word is added now');
                this.setState({ operationalData: this.componentMatcher(this.state.currentMatchData, this.state.inputComponents[this.state.inputComponents.length - 2]) }, () => {
                    this.setState({ currentMatchData: this.state.operationalData })
                    this.setState({ inputComponentsCount: this.state.inputComponents.length })
                    let tmpSnapshotArray = [...this.state.matchedDataSnapshot];
                    tmpSnapshotArray[this.state.inputComponents.length - 2] = JSON.parse(JSON.stringify(this.state.currentMatchData));
                    this.setState({ matchedDataSnapshot: tmpSnapshotArray});
                })
            } else if(this.state.inputComponents.length < this.state.inputComponentsCount){
                console.log('a word is deleted now');
                this.setState({ inputComponentsCount: this.state.inputComponents.length });
                this.setState({ currentMatchData: this.state.matchedDataSnapshot[this.state.inputComponents.length - 1] });
                this.setState({ operationalData: this.state.currentMatchData });
                
            } else if((this.state.inputComponents.length === this.state.inputComponentsCount)){
                this.setState({ inputComponentsCount: this.state.inputComponents.length }, () => {
                    console.log('current word is handled now')
                    this.setState({ currentMatchData: this.componentMatcher(this.state.operationalData, this.state.inputComponents[this.state.inputComponents.length - 1]) });
                })
            }
        });
    }

    componentMatcher(inputDataset, matchingWord) {
        matchingWord = matchingWord.split(' ').join('');
        if (matchingWord === '') {
            return [];
        }
        let outputDataset = inputDataset.filter((item) => {
            let temporaryComponentsArray = item.components.filter((component) => {
                return (component.toLowerCase().includes(matchingWord.toLowerCase()))
            })
            return (temporaryComponentsArray.length === 0) ? false : true;
        })
        return outputDataset;
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