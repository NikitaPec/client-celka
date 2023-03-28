import React from "react";
import styles from "./Search.module.scss";
import searchPng from "./png/search.png";

type Props = {};

const Search = (props: Props) => {
  return (
    <form className={styles.search}>
      <input maxLength={20}></input>
      <img alt={""} src={searchPng} onClick={() => {}}></img>
    </form>
  );
};

export default Search;
