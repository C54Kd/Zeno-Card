import React from "react";
import "./FourStat.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { useSelector } from "react-redux";

export default function FourStat() {

    const curStat = useSelector((state)=>{
        return state.stat.value;
    })

  return (
    <div className="statContainer">
      <div className="stat">
        <ProgressBar completed={curStat[0]} bgColor="#d62828" />
        기력
      </div>

      <div className="stat">
        <ProgressBar completed={curStat[1]} bgColor="#457076" />
        장비
      </div>
      <div className="stat">
        <ProgressBar completed={curStat[2]} bgColor="#57cc99"/>
        식량
      </div>
      <div className="stat">
        <ProgressBar completed={curStat[3]} bgColor="#0077b6" />
        탄약
      </div>
    </div>
  );
}
