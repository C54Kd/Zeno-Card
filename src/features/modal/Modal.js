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
        <p className="title">👻 Game Rule 🤔</p>
        <div className="script">
          <ol>1. 게임 상황은 실제 날씨에 따라 달라집니다.</ol>
          <ol>2. 매 턴마다 상황카드가 주어집니다. </ol>
          <ol>3. 플레이어는 두 가지 선택지 중 하나를 선택해야 합니다.</ol>
          <ol>4. 상단에는 네 가지 상태창이 있습니다.</ol>
          <ol>5. 플레이어의 선택에 따라 상태창이 변화합니다.</ol>
          <ol>6. 네 가지 상태창 중 하나라도 0이 되면 게임 오버.</ol>
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
