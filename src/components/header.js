import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.viewbox}>
            <Text style={styles.textStyles} >{ this.props.name }</Text>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    viewbox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        // paddingTop: 15,
        // paddingBottom: 15,
        backgroundColor: '#F8F8F8',
        // Shadow Works for ios only
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        // Android 5.0+ support elevation
        elevation: 5,
    }
});

