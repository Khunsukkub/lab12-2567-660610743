import { ThemeContext } from "@contexts/ThemeContext";
import { LangContext } from "@contexts/LangContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  const themeActivatedText = theme.name === "light" ? lang.detail.lightActivated : lang.detail.darkActivated;

  return (
    <div>
      <p className="text-center" style={{ color: theme.fgColor }}>
        {themeActivatedText}
      </p>
    </div>
  );
};
