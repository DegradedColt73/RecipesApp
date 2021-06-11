import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

//card shared component
export default class Card extends Component {

    //component lifecycle

    //props: title:required, content:required
    render() {
        return (
            <View style={this.styles.cardContainer}>
                <View style={this.styles.cardContent}>
                    <Text style={this.styles.title}>{this.props.title}</Text>
                    <View>
                        <Text style={{fontFamily: 'OpenSans-Bold', marginLeft: 20, fontSize: 26, marginBottom: 10}}>Składniki:</Text>
                        {this.props.content.map((prop) => {
                            return (
                                <Text style={this.styles.components}>{prop}</Text>
                            );
                        })}
                    </View>
                    <Text style={{fontFamily: 'OpenSans-Bold', marginLeft: 20, fontSize: 26, marginBottom: 10, marginTop: 10}}>Sposób przygotowania:</Text>
                    <Text style={this.styles.components}>{this.props.children}</Text>
                </View>
            </View>
        );
    };

    //styles
    styles = StyleSheet.create({
        cardContainer: {
            //structure
            marginHorizontal: 20,
            marginBottom: 10,
            //look
            borderRadius: 6,
            elevation: 3,
            backgroundColor: '#fff',
            shadowOffset: {
                width: 1,
                height: 1
            },
            shadowColor: '#333',
            shadowOpacity: 0.3
        },
        title: {
            fontFamily: 'OpenSans-Regular',
            fontSize: 40,
            marginBottom: 20
        },
        components:{
            fontFamily: 'OpenSans-Light',
            fontSize: 20,
            marginLeft: 30
        },
        cardContent: {
            padding: 15,
            fontFamily: 'OpenSans-Light'
        }
    });
};



