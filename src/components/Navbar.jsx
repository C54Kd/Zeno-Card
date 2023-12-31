import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { BsQuestionSquareFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { onModal } from "../features/modal/modalSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <header className="flex items-center justify-center h-16 bg-aColor border-b-2 border-b-black">
      <Link to="/">
        <AiTwotoneHome className="text-2xl text-eColor ml-4" />
      </Link>
      <h1 className="text-3xl font-bold text-eColor grow text-center font-serif">
        ZENO_CARD
      </h1>

      <BsQuestionSquareFill className="text-2xl text-eColor mr-4" onClick={()=>{
        dispatch(onModal())
      }} />
    </header>
  );
}
