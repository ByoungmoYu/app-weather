import React from 'react';
import { Alert, ColorPropType } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

// export default function App() {
//   return <Loading />
// }
const API_KEY = "e2d3bf9092d91db3f35ea920316ad68b";

export default class App extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const { data: {
      main: { temp },
      weather
    } } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    
    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main
    })
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longitude);

      // Send to API and get DATA
      console.log(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
  }
}