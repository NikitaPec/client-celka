import React, { useContext, useState } from "react";
import styles from "./Catalog.module.scss";
import { Context } from "../../../..";
import { observer } from "mobx-react-lite";

import arrayTPng from "./png/arrayT.png";
import arrayBPng from "./png/arrayB.png";

type Props = { visible: boolean; setVisible: React.Dispatch<React.SetStateAction<boolean>> };

const Catalog = (props: Props) => {
  const { stor } = useContext(Context);
  return (
    <div className={`${styles.catalog} ${props.visible ? styles.active : styles.inactive}`}>
      <ul>
        <Category name={"Категория"} />
        <Category name={"Категория"} />
        <Category name={"Категория"} />
        <Category name={"Категория"} />
      </ul>
    </div>
  );
};

type CategoryProps = {
  name: string;
};

const Category = (props: CategoryProps) => {
  const [openCategory, setOpenCategory] = useState(false);
  return (
    <div
      className={styles.category}
      onClick={() => {
        setOpenCategory(!openCategory);
      }}
    >
      <text>{props.name}</text>
      <img src={openCategory ? arrayTPng : arrayBPng} alt={""}></img>
    </div>
  );
};

type ItemProps = {};

const Item = (props: ItemProps) => {};

export default observer(Catalog);
