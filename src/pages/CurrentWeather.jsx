import React, { useState } from "react";
import "./CurrentWeather.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeWeather } from "../features/curWeather/curWeatherSlice";
import { changeStat } from "../features/stat/statSlice";

export default function CurrentWeather() {
    const dispatch = useDispatch();
    const [weatherNow, setWeatherNow] = useState("");
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=37.5&lon=127&appid=${apiKey}`
    )
    .then((res) => {
      let weatherCode = res.data.weather[0].id;
      let codeNum = (weatherCode+'')[0];
      let curWeather;
      if(codeNum === '2' || codeNum === '3' || codeNum === '5') curWeather = '비';
      else if(codeNum === '6') curWeather = '눈';
      else if(codeNum === '7' || codeNum === '8') curWeather = '구름';

      setWeatherNow(curWeather);
    }).catch(err=>console.log(err));




  const navigate = useNavigate();
  const goToGamePage = () => {
    dispatch(changeWeather(weatherNow));
    dispatch(changeStat([70,70,70,70]));
    navigate("/game");
  };

  const goToGameButton = () => {
    return (
      <div>
        <div className="cur">현재 날씨 : {weatherNow}</div>
        <button className="goToGame" onClick={() => goToGamePage()}>
          게임 시작하기
        </button>
      </div>
    );
  };

  return (
    <div className="currentContainer">
      {weatherNow === "" ? (
        <div>🌧️ 실시간 서울의 날씨를 가져오는 중입니다 🌞</div>
      ) : (
        goToGameButton()
      )}
    </div>
  );
}
