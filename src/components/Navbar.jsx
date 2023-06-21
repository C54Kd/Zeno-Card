import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { BsQuestionSquareFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { onModal } from "../features/modal/modalSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <header className="bg-hColor flex items-center h-16">
      <Link to="/">
        <AiTwotoneHome className="text-2xl text-dColor ml-4" />
      </Link>
      <h1 className="text-4xl font-bold text-dColor grow text-center font-serif">
        ZENO_CARD
      </h1>

      <BsQuestionSquareFill className="text-2xl text-dColor mr-4" onClick={()=>{
        dispatch(onModal())
      }} />
    </header>
  );
}
