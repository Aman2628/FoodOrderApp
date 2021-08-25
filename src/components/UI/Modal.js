import "./Modal.css";
import { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onHide}></div>;
};

const ModalOverlays = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalEl = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onHide={props.onHide} />, portalEl)}
      {ReactDom.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        portalEl
      )}
    </Fragment>
  );
};

export default Modal;
