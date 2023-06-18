import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { useSelector } from "react-redux";
import Modal from "./features/modal/Modal";
import { selectModal } from "./features/modal/modalSlice";

function App() {
  const isModal = useSelector(selectModal);

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Outlet />
        {isModal && <Modal />}
      </Provider>
    </>
  );
}

export default App;
