import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../..";
import DropMenu from "./dropMenu/DropMenu";
import styles from "./Header.module.scss";
import menuPng from "./png/menu.png";
import catalogPng from "./png/catalog.png";
import arrayPng from "./png/array.png";
import Catalog from "./catalog/Catalog";
import { observer } from "mobx-react-lite";

type Props = {};

const Header = (props: Props) => {
  const [openDropMenu, setOpenDropMenu] = useState(false);
  const [openCatalog, setOpenCatalog] = useState(false);
  const { stor } = useContext(Context);

  return (
    <header className={styles.header}>
      <div
        className={styles.catalog}
        onClick={() => {
          setOpenCatalog(!openCatalog);
        }}
      >
        <img alt={""} src={openCatalog ? arrayPng : catalogPng}></img>
        <text>Каталог</text>
      </div>
      <Link to="/">
        <strong>Store Name</strong>{" "}
      </Link>
      <img
        alt={""}
        src={menuPng}
        onClick={() => {
          setOpenDropMenu(!openDropMenu);
        }}
      ></img>
      <DropMenu visible={openDropMenu} setVisible={setOpenDropMenu} />
      <Catalog visible={openCatalog} setVisible={setOpenCatalog} />
    </header>
  );
};

export default observer(Header);
