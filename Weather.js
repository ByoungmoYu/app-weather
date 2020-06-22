import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#304352", "#d7d2cc"],
        title: "Haze",
        subTitle: "Don't go outside."
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00F260", "#0575E6"]
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#00F260", "#0575E6"]
    },
    Drizzle: {
        iconName: "weather-lightning",
        gradient: ["#00F260", "#0575E6"]
    },
    Snow: {
        iconName: "weather-lightning",
        gradient: ["#00F260", "#0575E6"]
    },
    Atmosphere: {
        iconName: "weather-lightning",
        gradient: ["#00F260", "#0575E6"]
    },
    Clear: {
        iconName: "weather-lightning",
        gradient: ["#00F260", "#0575E6"]
    },
    Clouds: {
        iconName: "weather-lightning",
        gradient: ["#00F260", "#0575E6"]
    },
    Mist: {
        iconName: "weather-lightning",
        gradient: ["#00F260", "#0575E6"]
    },
    Smoke: {
        iconName: "weather-lightning",
        gradient: ["#00F260", "#0575E6"]
    },
    Dust: {
        iconName: "weather-lightning",
        gradient: ["#00F260", "#0575E6"]
    },
    Fog: {
        iconName: "weather-lightning",
        gradient: ["#00F260", "#0575E6"]
    },
    Sand: {
        iconName: "weather-lightning",
        gradient: ["#00F260", "#0575E6"]
    },
    Ash: {
        iconName: "weather-lightning",
        gradient: []
    },
    Squall: {
        iconName: "",
        gradient: []
    },
    Tornado: {
        iconName: "",
        gradient: []
    }
}

export default function Weather({ temp, condition }) {
    condition = "Haze";

    return (

        <LinearGradient
            colors={weatherOptions[condition ? condition : "Haze"].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={weatherOptions[condition ? condition : "Haze"].iconName}
                    size={96}
                    color="white"
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
        </LinearGradient>

    )
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
        "Haze",
        "Mist",
        "Smoke",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },

    halfContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600"
    },
    textContainer: {
        alignItems: "flex-start"
    }
})
