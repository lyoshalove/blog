import { FC, Suspense } from "react";
import "./styles/index.scss";
import { Link, Routes, Route } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { MainPage } from "pages/main";
import { AboutPage } from "pages/about";
import { classNames } from "shared/lib/classNames";

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
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
