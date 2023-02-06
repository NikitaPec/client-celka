import React, { FunctionComponent, useContext, useState } from "react";
import { Context } from "../..";
import classes from "./MyModal.module.css"
import ErrorList from "./errorList"
import imgShowPass from "./ico/icons8-показать-48.png"
import imgHigePass from "./ico/icons8-скрыто-48.png"



const LoginForm: FunctionComponent = () => {
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
    const [arrayErrorPassword, setArrayErrorPassword] = useState<Array<string>>([]);
    const [arrayErrorLogin, setArrayErrorLogin] = useState<Array<string>>([]);
    const { store } = useContext(Context);
    async function loogin() {
        await store.login(login, password)
        setArrayErrorLogin(store.errors.login);
        setArrayErrorPassword(store.errors.password);
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
            <button className={classes.myButton} onClick={loogin}>Логин</button>
        </div>
    )

}

export default LoginForm;