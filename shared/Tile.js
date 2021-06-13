import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

//tile shared component
export default class Tile extends Component {

    //component lifecycle

    //props: backgroundColor:required, iconName:required

    render() {
        return (
            <View style={this.styles.cardContainer}>
                <View style={this.styles.cardContent}>
                    <Text><MaterialIcons name={this.props.iconName} size={80} color="#fff" /></Text>
                    <Text style={this.styles.textHeader}>{this.props.children}</Text>
                </View>
            </View>
        );
    };

    //styles
    styles = StyleSheet.create({
        cardContainer: {
            //structure
            width: (Dimensions.get('window').width - 30) / 2,
            height: (Dimensions.get('window').width - 30) / 2,
            marginVertical: 6,
            //look
            borderRadius: 6,
            elevation: 3,
            shadowOffset: {
                width: 1,
                height: 1
            },
            shadowOpacity: 0.3,
            shadowColor: '#333',
            backgroundColor: this.props.backgroundColor,
            //content
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        cardContent: {
            padding: 15,
        },
        textHeader: {
            color: '#fff',
            textAlign: 'center'
            // color: '#fff',
            // fontSize: 30,
            // fontFamily: 'OpenSans-Regular'
        }

    });
};



