import React, { useState } from "react";
import LoginForm from "./LoginForm";
import classes from "./MyModal.module.css"
import RegistrationForm from "./RegistrationForm";

interface ModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalLogin = ({ visible, setVisible }: ModalProps) => {
    const [type, setType] = useState("login")
    const rootClasses = [classes.myModal]
    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(event) => event.stopPropagation()}>
                <div className={classes.myModalBody}>
                    <h3 style={{ cursor: "pointer", color: type === 'login' ? "tomato" : "teal" }} onClick={() => setType('login')}>войти</h3>
                    <h3 style={{ cursor: "pointer", color: type === 'reg' ? "tomato" : "teal" }} onClick={() => setType('reg')}>регистрация</h3>
                </div>
                <hr></hr>
                {type === 'login' ? <LoginForm /> : <RegistrationForm />}
            </div>
        </div>
    )

}

export default ModalLogin;