import React, { FC, useContext, useState } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
const Body: FC = () => {
  const { stor } = useContext(Context);
  return <div></div>;
};

export default observer(Body);
