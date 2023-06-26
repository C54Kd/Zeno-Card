import { useState } from "react";
import "./CardDetail.css";
import cloud from "../decks/cloud.json";
import rain from "../decks/rain.json";
import snow from "../decks/snow.json";
import { useDispatch, useSelector } from "react-redux";
import { changeStat } from "../features/stat/statSlice";
import { useNavigate } from "react-router-dom";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function CardDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let data;
  const val = useSelector((state) => {
    return state.curWeather.value;
  });
  if (val === "구름") data = cloud;
  if (val === "비") data = rain;
  if (val === "눈") data = snow;

  const curStat = useSelector((state) => {
    return state.stat.value;
  });

  const [count, setCount] = useState(0);
  const nextCount = () => {
    if (count < data.items.length - 1) setCount(count + 1);
  };

  const [isModal, setModal] = useState(false);
  const onModal = () => {
    setModal(!isModal);
  };

  const [gameOverMsg, setGameOverMsg] = useState("");
  const getMinIdx = (arr) => arr.indexOf(Math.min(...arr));
  const [isGameOver, setGameOver] = useState(false);
  const onGameOver = (Idx) => {
    setGameOver(!isGameOver);
    if (Idx === 0) setGameOverMsg("더 이상 힘이 없습니다. 눈 앞이 흐려집니다.");
    else if (Idx === 1)
      setGameOverMsg(
        "장비를 모두 잃었습니다. 손전등도 켤 수 없게 되자 어둠이 닥칩니다."
      );
    else if (Idx === 2)
      setGameOverMsg("먹을 것이 없습니다. 배고픔에 쓰러집니다.");
    else if (Idx === 3)
      setGameOverMsg("탄약이 모두 떨어진 그때, 늑대와 눈을 마주칩니다.");
  };

  let oneCard = data.items[count];
  const [modalText, setModalText] = useState("t");
  const leftClick = () => {
    //스탯 변환
    let prevStat = [...curStat];
    let howChange = oneCard.left[1];
    if (howChange.length !== 0) {
      for (let i = 0; i < howChange.length; i++) {
        let num = howChange[i][0];
        let val = howChange[i][1];
        let newVal = prevStat[num] + val;

        if (newVal > 100) newVal = 100;
        else if (newVal < 0) newVal = 0;
        prevStat[num] = newVal;
      }
    }
    dispatch(changeStat(prevStat));

    if (Math.min(...prevStat) === 0) {
      let Idx = getMinIdx(prevStat);

      onGameOver(Idx);
    }

    setModalText(oneCard.left[2]);
    onModal();
  };
  const rightClick = () => {
    //스탯 변환
    let prevStat = [...curStat];
    let howChange = oneCard.right[1];
    if (howChange.length !== 0) {
      for (let i = 0; i < howChange.length; i++) {
        let num = howChange[i][0];
        let val = howChange[i][1];
        let newVal = prevStat[num] + val;
        if (newVal > 100) newVal = 100;
        else if (newVal < 0) newVal = 0;

        prevStat[num] = newVal;
      }
    }

    dispatch(changeStat(prevStat));

    if (Math.min(...prevStat) === 0) {
      let Idx = getMinIdx(prevStat);

      onGameOver(Idx);
    }
    setModalText(oneCard.right[2]);
    onModal();
  };

  const offModal = () => {
    if (isGameOver) {
      navigate("/");
    } else if (count === data.items.length - 1) {
      navigate("/score");
    } else {
      onModal();
      nextCount();
    }
  };

  return (
    <>
      <div className="cardContainer">
        <div
          className="left"
          onClick={() => {
            leftClick();
          }}
        >
          <BsFillArrowLeftCircleFill className="leftArrow" size={35} />
          <div className="leftText">{oneCard.left[0]}</div>
          
        </div>
        <div className="mainCard">
          <div className="mainCard_title">{oneCard.card}</div>

          <div className="mainCard_script">{oneCard.card_script}</div>
        </div>

        <div
          className="right"
          onClick={() => {
            rightClick();
          }}
        >
          <BsFillArrowRightCircleFill className="rightArrow" size={35}  />
          <div className="rightText">{oneCard.right[0]}</div>
        </div>
        {isModal && (
          <div className="back">
            <div
              className="cardModal"
              onClick={() => {
                offModal();
              }}
            >
              {isGameOver && <div>GAME OVER</div>}
              {isGameOver && <br></br>}
              {modalText}
              {isGameOver && <div>{gameOverMsg}</div>}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
