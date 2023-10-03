import axios from "axios";

const WEATHER_API_URL =`https://api.openweathermap.org/data/2.5/weather?&appid=93feb2dad475251e89ddcd62d59a02e9`

export const getWeather = async(city) => {
    try {
        const response = await axios.get(`${WEATHER_API_URL}&q=${city}`)
        
        console.log("jay",response)
        return response;
    } catch (error) {
        console.log(error)
    }
}
