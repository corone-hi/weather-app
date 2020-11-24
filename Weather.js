import React from "react";
import { View, Text, StyleSheet, StatusBar }from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName:"weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Haze",
        subtitle:"=("
    },
    Thunderstorm:{
        iconName:"ios-thunderstorm",
        gradient: ["#0F2027","#203A43"],
        title:"Thunderstorm",
        subtitle:"Be careful..‼"
    },
    Drizzle:{
        iconName:"cloud-drizzle",
        gradient: ["#0B486B","#F56217"],
        title:"Drizzle",
        subtitle:"sentimental day"
    },
    Rain:{
        iconName:"weather-lightning-rainy",
        gradient:["#373B44","#4286f4"],
        title:"Rain",
        subtitle:"Don't forget to take your umbrella"
    },
    Snow:{
        iconName:"weather-snowy-heavy",
        gradient:["#2980B9","#6DD5FA","#FFFFFF"],
        title:"Snow",
        subtitle:"Everythig looks white"
    },
    Atmosphere:{
        iconName:"weather-hail",
        gradient:["#B2FEFA","#0ED2F7"],
        title:"Atmosphere",
        subtitle:"I don't know"
    },
    Clear:{
        iconName:"white-balance-sunny",
        gradient:["#B2FEFA","#0ED2F7"],
        title:"Clear",
        subtitle:"Great Day =)"
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#928DAB","#00d2ff"],
        title:"Clouds",
        subtitle: "Dark clouds is coming"
    },
    Mist:{
        iconName:"weather-hail",
        gradient:["#c2e59c", "#64b3f4"],
        title:"Mist",
        subtitle:"Dark outside"
    },
    Dust:{
        iconName:"weather-hail",
        gradient:["#616161", "#9bc5c3"],
        title:"Dust",
        subtitle:"Stay home if you can"
    },
    
};

export default function Weather({temp, condition}){
    return(
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>

        </LinearGradient>
    );

}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist",
        "Dust",
        "Haze"
    ]),


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",


    },
    temp:{
        fontSize: 36,
        color: "white",
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle:{
        fontWeight:"600",
        color:"white",
        fontSize:24
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems: "flex-start"

    }
});