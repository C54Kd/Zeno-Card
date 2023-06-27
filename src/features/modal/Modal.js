import React from "react";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { onModal } from "./modalSlice";

export default function Modal() {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="back"
        onClick={() => {
          dispatch(onModal());
        }}
      ></div>
      <div className="modalBody">
        <div className="title">🎲Game Rule👻</div>
        <div className="script">
          <ol>1. 게임 상황은 날씨에 따라 달라집니다.</ol>
          <ol>2. 매 턴마다 두 가지 선택지 중 하나를 선택해야 합니다.</ol>
          <ol>3. 네 가지 상태창이 있고 선택에 따라 변화합니다.</ol>
          <ol>5. 상태창 중 하나라도 0이 되면 게임 오버입니다.</ol>
          <ol>6. 게임방법은 상단우측 ? 버튼으로 다시 볼 수 있습니다.</ol>
        </div>

        <button
          className="close"
          onClick={(e) => {
            dispatch(onModal());
          }}
        >
          Close
        </button>
      </div>
    </>
  );
}
