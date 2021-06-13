import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { navigate } from '../routes/rootNavigation';
import Tile from '../shared/Tile';

//main component for home screen
export default class HomeTileContainer extends Component {

    //component lifecycle
    render() {
        return (
            <ScrollView>
                <View style={this.styles.container}>
                    <TouchableOpacity onPress={() => navigate("Find")}>
                        <Tile backgroundColor='#ff6434' iconName="search">
                            <Text>Find</Text>
                        </Tile>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('View All')}>
                        <Tile backgroundColor='#60ad5e' iconName="list-alt">
                            <Text>List</Text>
                        </Tile>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('Info')}>
                        <Tile backgroundColor='#fa5788' iconName="info-outline">
                            <Text>Info</Text>
                        </Tile>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('Favourites')}>
                        <Tile backgroundColor='#fff263' iconName="star">
                            <Text>Favourites</Text>
                        </Tile>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('Settings')}>
                        <Tile backgroundColor='#718792' iconName="settings">
                            <Text>Settings</Text>
                        </Tile>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    };

    //styles
    styles = StyleSheet.create({
        container: {
            paddingTop: 5,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
        }
    });
};