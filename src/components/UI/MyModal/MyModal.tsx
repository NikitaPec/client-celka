import React, { FC, ReactElement } from "react";
import "./MyModal.css";

interface Props {
  visibleModal: boolean;
  setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactElement;
}
const MyModal: FC<Props> = (props) => {
  return (
    <div
      className={props.visibleModal ? "modal active" : "modal inactive"}
      onClick={(event) => props.setVisibleModal(false)}
    >
      <div className={"myModalContent"} onClick={(event) => event.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
};

export default MyModal;
