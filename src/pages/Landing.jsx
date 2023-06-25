import React from "react";
import "./Landing.css";
import { useDispatch } from "react-redux";
import { onModal } from "../features/modal/modalSlice";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToChooseWeather = (e) => {
    navigate("/choose");
  };

  return (
    <>
      <div className="landing">
        <button
          className="title_button"
          onClick={() => {
            goToChooseWeather();
          }}
        >
          Game start
        </button>
        <button
          className="title_button"
          onClick={() => {
            dispatch(onModal());
          }}
        >
          How to play
        </button>
      </div>
      <div className="footer">Frontend developer kim ho jin</div>
    </>
  );
}
