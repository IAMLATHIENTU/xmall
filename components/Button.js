import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'expo-linear-gradient'
import { Colors } from '../constants/Colors'

const Button = ({ callback, title }) => {
    return (
        <LinearGradient style={{ flex: 1 }} colors={[Colors.gradientLeft, Colors.gradientRight]}>
            <Text>{title}</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    buttonBackground: {
        width: 300,
        height: 50,
        backgroundColor: 'red'
    }
})

export default Button