import React, { useState } from "react";
import LoginForm from "./LoginForm";
import classes from "./MyModal.module.css";
import RegistrationForm from "./RegistrationForm";

export interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalLogin = ({ visible, setVisible }: Props) => {
  const [type, setType] = useState("login");
  const rootClasses = [classes.myModal];
  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={classes.myModalContent} onClick={(event) => event.stopPropagation()}>
        <div className={classes.myModalBody}>
          <h3
            style={{ cursor: "pointer", color: type === "login" ? "tomato" : "teal" }}
            onClick={() => setType("login")}
          >
            войти
          </h3>
          <h3
            style={{ cursor: "pointer", color: type === "reg" ? "tomato" : "teal" }}
            onClick={() => setType("reg")}
          >
            регистрация
          </h3>
        </div>
        <hr></hr>
        {type === "login" ? (
          <LoginForm visible={visible} setVisible={setVisible} />
        ) : (
          <RegistrationForm visible={visible} setVisible={setVisible} />
        )}
      </div>
    </div>
  );
};

export default ModalLogin;
