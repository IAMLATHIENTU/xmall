import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'

import RightTopDecore from '../assets/right-top-decoration.png'
import DecoreLineScreen from '../assets/decore-line-background.png'
import FristPage from './Register/FristPage'
import Button from '../components/Button'

const { width, height } = Dimensions.get("window")

const slider = [
    FristPage
]

const Register = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <View style={styles.backgroundContainer}>
                    <Image source={RightTopDecore} style={styles.backgroundDecoreRight} />
                    <Image source={DecoreLineScreen} style={styles.backgroundDecoreLineScreen} />
                </View>
            </View>
            <View style={styles.wrapper}>

            </View>
            <View style={styles.buttonWrapper}>
                <Button title="Hello" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        position: "relative",
    },
    background: {
        position: "absolute",
        top: 0,
    },
    backgroundContainer: {
        height,
        position:"relative"
    },
    backgroundDecoreRight: {
        resizeMode: "contain",
        width: width,
        height:200,
        position:"absolute",
        top:0,
        zIndex:2
    },
    backgroundDecoreLineScreen: {
        height,
        width,
        position:"absolute",
        bottom:0
    },
    wrapper: {
        width,
        height,
        position:"absolute",
        top:0,
        left:0,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    buttonWrapper: {
        width,
        position:"absolute",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        bottom:20
    }
})

export default Register