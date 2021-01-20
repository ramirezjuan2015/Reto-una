import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Spinner = () => {
    return (
        <View>
            <ActivityIndicator style={style.spinnerStyle} size="large" color="#00BFFF" />
        </View>
    )
};

const style = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Spinner;