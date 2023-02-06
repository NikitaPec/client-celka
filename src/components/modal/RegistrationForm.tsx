import React, { FunctionComponent, useContext, useState } from "react";
import { Context } from "../..";
import classes from "./MyModal.module.css"
import ErrorList from "./errorList"
import imgShowPass from "./ico/icons8-показать-48.png"
import imgHigePass from "./ico/icons8-скрыто-48.png"


const RegistrationForm: FunctionComponent = () => {
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirm, setConfirm] = useState<string>("")
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
    const [confirmVisible, setConfirmVisible] = useState<boolean>(false)
    const [arrayErrorPassword, setArrayErrorPassword] = useState<Array<string>>([]);
    const [arrayErrorLogin, setArrayErrorLogin] = useState<Array<string>>([]);
    const [arrayErrorConfirm, setArrayErrorConfirm] = useState<Array<string>>([]);
    const { store } = useContext(Context);
    async function registration() {
        await store.registration(login, password, confirm)
        setArrayErrorLogin(store.errors.login);
        setArrayErrorPassword(store.errors.password);
        setArrayErrorConfirm(store.errors.confirm);
    }
    return (
        <div className={classes.myForm}>
            <input className={classes.myInputLogin} onChange={e => setLogin(e.target.value)} value={login} type="text" placeholder="Логин" />
            {arrayErrorLogin?.map((error, index) => (
                <ErrorList title={error} key={index + 1} />
            ))}
            <div className={classes.myPass}>
                <input className={classes.myInputPass} onChange={e => setPassword(e.target.value)} value={password} type={passwordVisible ? "text" : "password"} placeholder="Пароль" />
                <img className={classes.myImg} alt={''} src={passwordVisible ? imgShowPass : imgHigePass} onClick={() => setPasswordVisible(!passwordVisible)}></img>
            </div>
            {arrayErrorPassword?.map((error, index) => (
                <ErrorList title={error} key={index + 1} />
            ))}
            <div className={classes.myPass}>
                <input className={classes.myInputPass} onChange={e => setConfirm(e.target.value)} value={confirm} type={confirmVisible ? "text" : "password"} placeholder="Подтверждение пароля" />
                <img className={classes.myImg} alt={''} src={confirmVisible ? imgShowPass : imgHigePass} onClick={() => setConfirmVisible(!confirmVisible)}></img>
            </div>
            {arrayErrorConfirm?.map((error, index) => (
                <ErrorList title={error} key={index + 1} />
            ))}
            <button className={classes.myButton} onClick={registration}>Регистрация</button>
        </div>
    )

}

export default RegistrationForm;