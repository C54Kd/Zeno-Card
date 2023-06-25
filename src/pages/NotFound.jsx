import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";


export default function NotFound() {
  return (
    <div>

      <Link to="/">
        <button className="home_button">시작 화면으로</button>
      </Link>
    </div>
  );
}
