import React from "react";
import classes from "./MyModal.module.css"

interface Iprops {
  title: string
}

const ErrorList = (props: Iprops) => {
  return (
    <div>
      <h5 className={classes.myTextError}>{props.title}</h5>
    </div>
  );
};

export default ErrorList;
