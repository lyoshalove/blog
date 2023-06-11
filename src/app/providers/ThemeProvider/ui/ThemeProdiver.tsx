import { FC, useMemo, useState } from "react";
import { Theme, ThemeContext } from "../lib/ThemeContext";

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
