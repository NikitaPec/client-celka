import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import "./ModalLR.css";

export interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalLogin = ({ visible, setVisible }: Props) => {
  const [type, setType] = useState(true);

  return (
    <div className={`modal-LR ${visible ? "active" : ""}`} onClick={() => setVisible(false)}>
      <div className={"myModalContent"} onClick={(event) => event.stopPropagation()}>
        <div className={"myModalBody"}>
          <h3
            className={`myModalBody-h3 ${type ? "active" : "inactive"}`}
            onClick={() => setType(true)}
          >
            войти
          </h3>
          <h3
            className={`myModalBody-h3 ${type ? "inactive" : "active"}`}
            onClick={() => setType(false)}
          >
            регистрация
          </h3>
        </div>
        <hr></hr>
        {type ? (
          <LoginForm visible={visible} setVisible={setVisible} />
        ) : (
          <RegistrationForm visible={visible} setVisible={setVisible} />
        )}
      </div>
    </div>
  );
};

export default ModalLogin;
