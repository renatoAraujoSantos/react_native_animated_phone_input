import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Animated, { interpolate } from "react-native-reanimated";
import {Ionicons as Icon} from '@expo/vector-icons';
import { LOGIN_VIEW_HEIGHT } from "../Constants";
const ForwardArrow = ({ keyboardHeight }) => {
    const opacity = interpolate(keyboardHeight, {
        inputRange: [0, keyboardHeight],
        outputRange: [0, 1],
    });

    return ( 
        <Animated.View style={{
        ...styles.forwardArrow, 
        opacity, 
        transform:[{ translateY: keyboardHeight }],
        }}
    >
        <Icon name="md-arrow-forward" color="white" />
    </Animated.View>
    );
};

export default ForwardArrow;

const styles = StyleSheet.create({

    forwardArrow:{
        position: "absolute",
        height: 60,
        width: 60,
        right: 10,
        bottom: LOGIN_VIEW_HEIGHT / 2,
        
        zIndex: 10000,
        backgroundColor: "#54575e",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
    }

});