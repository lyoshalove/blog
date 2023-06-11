import { FC, Suspense } from "react";
import "./styles/index.scss";
import { Link, Routes, Route } from "react-router-dom";
import { AboutPageAsync, MainPageAsync } from "./pages";
import { useTheme } from "./theme";
import { classNames } from "./helpers";
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
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
