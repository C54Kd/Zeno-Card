import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { BsQuestionSquareFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { onModal } from "../features/modal/modalSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <header className="bg-hColor flex items-center">
      <Link to="/">
        <AiTwotoneHome className="text-1xl text-dColor ml-2" />
      </Link>
      <h1 className="text-3xl font-bold text-dColor grow text-center">
        Zeno-Card
      </h1>

      <BsQuestionSquareFill className="text-1xl text-dColor mr-2" onClick={()=>{
        dispatch(onModal())
      }} />
    </header>
  );
}
