import { Fragment } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = ({ text }) => {
  toast.success(text, {
    position: toast.POSITION.TOP_CENTER_RIGHT,
  });

  toast.error(text, {
    position: toast.POSITION.TOP_RIGHT_CENTER
  });

  toast.warn(text, {
    position: toast.POSITION.TOP_RIGHT_CENTER
  });

  toast.info(text, {
    position: toast.POSITION.TOP_RIGHT_CENTER
  });

  return (
    <Fragment>
      <ToastContainer />
    </Fragment>
  );
};

export default Alert;
