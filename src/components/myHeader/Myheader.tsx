import React from "react";
import classes from "./MyHeader.module.css"
import imgLc from "./ico/icons8-пользователь-без-половых-признаков-96-tomato.png"

interface ModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyHeader = ({ visible, setVisible }: ModalProps) => {
    return (
        <div className={classes.myHeader}>
            <img className={classes.myLc} alt={''} src={imgLc} onClick={() => setVisible(true)}></img>
        </div>
    )
}

export default MyHeader;