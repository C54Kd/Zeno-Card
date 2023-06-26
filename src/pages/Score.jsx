import React from "react";
import { useSelector } from "react-redux";
import "./Score.css";
import { Link } from "react-router-dom";

export default function Score() {
  const curStat = useSelector((state) => {
    return state.stat.value;
  });

  const finalScore = curStat.reduce((cur, acc) => {
    return cur + acc;
  });

  return (
    <div className="scoreContainer">
      <div className="complete">당신은 생존했습니다!</div>
      <div className="final">
        <div className="titleScore">최종 스코어는</div>
        <div className="score">{finalScore}</div>
      </div>
      <Link to="/">
        <button className="home_button">시작 화면으로</button>
      </Link>
    </div>
  );
}
