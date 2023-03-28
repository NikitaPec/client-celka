import React, { FC, useContext, useState } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import MyNavBar from "./myNavBar/MyNavBar";
const Header: FC = () => {
  const { stor } = useContext(Context);
  return (
    <div>
      <MyNavBar></MyNavBar>
    </div>
  );
};

export default observer(Header);
