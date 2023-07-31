import { useNavigate } from "react-router-dom";
import "./ChooseWeather.css";
import { useDispatch } from "react-redux";
import { changeWeather } from "../features/curWeather/curWeatherSlice";
import { changeStat } from "../features/stat/statSlice";
import { useState } from "react";

export default function ChooseWeather() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToCurrentWeather = (e) => {
    navigate("/current");
  };

  const goToGamePage = (weather) => {
    dispatch(changeWeather(weather));
    dispatch(changeStat([70, 70, 70, 70]));
    navigate("/game");
  };

  const [isThree, setThree] = useState(false);
  const onThree = () => {
    setThree(!isThree);
  };

  return (
    <>
    <div className="choose_back">
      <div className="chooseMainContainer">
        <div className="choose_script">
          당신은 멸망한 세상에서 살아남아야 합니다.<br></br>날씨에 따라 다른 상황의 카드가 나옵니다.
          <br></br>실시간 날씨를 불러 오거나,<br></br> 직접 날씨를 선택할 수
          있습니다.
        </div>
      </div>
      {!isThree && (
        <div className="weather_button">
          <button
            className="choose_button"
            onClick={() => goToCurrentWeather()}
          >
            실제 날씨<br></br> 가져오기
          </button>
          <button
            className="choose_button"
            onClick={() => {
              onThree();
            }}
          >
            직접 날씨<br></br> 선택하기
          </button>
        </div>
      )}
      {isThree && (
        <div>
          <div className="weather_button">
            <button className="choose_button" onClick={()=>goToGamePage('구름')}>구름</button>
            <button className="choose_button" onClick={()=>goToGamePage('비')}>비</button>
            <button className="choose_button" onClick={()=>goToGamePage('눈')}>눈</button>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
