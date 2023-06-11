import { FC, Suspense } from "react";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./providers/router";

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <hr />
      <Link to="/" style={{ marginRight: 15 }}>
        Main
      </Link>
      <Link to="/about">About</Link>
      <AppRouter />
    </div>
  );
};
