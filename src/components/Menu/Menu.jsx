import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentUserState, isAuthModalOpenState } from "../../state";

import styles from "./Menu.module.scss";

export const Menu = () => {
  const currentUser = useRecoilValue(currentUserState);
  const setIsAuthModalOpen = useSetRecoilState(isAuthModalOpenState);

  return (
    <nav className={styles.menu}>
      <Link to="/">Home</Link>

      <Link to="/matches">Matches</Link>

      <Link to="/board">Board</Link>

      <a href="#" onClick={() => { setIsAuthModalOpen(true) }}>{currentUser ? "Logout" : "Login"}</a>
    </nav>
  )
}