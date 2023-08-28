import React from "react";
import PropTypes from "prop-types";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = ({ message, type, position, duration, ...others }) => {
  const loginSuccess = () => {
    toast.dismiss();
    toast.success("Login successful", {
      position,
      autoClose: duration,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
      transition: Slide,
      ...others,
    });
  };

  const loginFailed = () => {
    toast.dismiss();
    toast.error("Incorrect email or password", {
      position: "top-right",
      position,
      autoClose: duration,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
      transition: Slide,
      ...others,
    });
  };

  return (
    <div>
      {/* <button onClick={loginSuccess}>Notify!</button> */}
      <ToastContainer />
      {/* <button onClick={loginFailed}>Notify!</button> */}
    </div>
  );
};

Toastify.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error", "info", "warn"]).isRequired,
  position: PropTypes.oneOf([
    "top-right",
    "top-left",
    "top-center",
    "bottom-right",
    "bottom-left",
    "bottom-center",
  ]),
  duration: PropTypes.number,
};

Toastify.defaultProps = {
  position: "top-right",
  duration: 2000,
};

export default Toastify;
