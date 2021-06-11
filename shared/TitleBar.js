import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { navigationRef } from '../routes/rootNavigation';
import { DrawerActions } from '@react-navigation/native';

export default class TitleBar extends Component {

    constructor(props) {
        props.navigation.addListener(
            'focus',
            () => {
                this.forceUpdate();
            }
        )

        super(props);

        this.theme = {
            color: {
                primary: '#bdbdbd',
                primaryLight: '#efefef',
                primaryDark: '#8d8d8d',
                primaryText: '#000000'
            }
        }
        
        this.isHome = false;

        if (props.theme) {
            this.theme.color.primary = props.theme.color.primary;
            this.theme.color.primaryLight = props.theme.color.primaryLight;
            this.theme.color.primaryDark = props.theme.color.primaryDark;
            this.theme.color.primaryText = props.theme.color.primaryText;
        }

        if (props.home) {
            this.isHome = true;
        }

        this.createStyles(this.theme);
    }

    render() {
        this.updateStatusBarColor(this.theme.color.primaryDark);
        return (
            <React.Fragment>
                {/* <ImageBackground source={require('../assets/happy_pride.png')} style={this.styles.container}> */}
                    <View style={this.styles.container}>
                        <TouchableOpacity onPress={
                            () => (this.isHome) ?
                                navigationRef.current?.dispatch(DrawerActions.toggleDrawer()) :
                                navigationRef.current?.goBack(null)
                        }>
                            <MaterialIcons
                                name={(this.isHome) ? 'menu' : 'arrow-back'}
                                color={this.theme.color.primaryText}
                                size={40}>
                            </MaterialIcons>
                        </TouchableOpacity>
                        <Text style={this.styles.title}>{this.props.name}</Text>
                    </View>
                {/* </ImageBackground> */}
                <StatusBar></StatusBar>
            </React.Fragment >
        );
    };

    updateStatusBarColor = (color) => {
        StatusBar.setBackgroundColor(color);
    }


    createStyles = (theme) => {
        this.styles = StyleSheet.create({
            container: {
                //structure
                height: 70,
                //look
                elevation: 10,
                //content
                backgroundColor: this.theme.color.primaryLight,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingLeft: 14
            },
            title: {
                color: this.theme.color.primaryText,
                fontSize: 26,
                fontFamily: 'OpenSans-Regular',
                paddingLeft: 20
            },
            image: {
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center"
            }
        });
    }
}

{/* <LinearGradient style={this.styles.container} start={{ x: 1, y: 0 }} end={{ y: 0, x: 0 }}
// Button Linear Gradient
colors={['#FE0000', '#FD8C00', '#FFE500', '#119F0B', '#0644B3', '#C22EDC']}>
<View style={this.styles.container}>


    <Text style={this.styles.title}>{this.props.name}</Text>
</View>
</LinearGradient> */}