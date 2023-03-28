
import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import MyNavBar from "./myNavBar/MyNavBar";
const Header: FC = () => {
  return (
    <div>
      <MyNavBar></MyNavBar>
    </div>
  );
};

export default observer(Header);
