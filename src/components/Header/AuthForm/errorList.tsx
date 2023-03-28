import React from "react";
import "./MyForm.css";

interface Iprops {
  title: string;
}

const ErrorList = (props: Iprops) => {
  return (
    <div>
      <h5 className={"myTextError"}>{props.title}</h5>
    </div>
  );
};

export default ErrorList;
