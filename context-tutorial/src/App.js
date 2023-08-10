import { useState } from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import Message from "./components/Message";
import LangContext from "./contexts/LangContext";
import ColorContext, { ColorProvider } from "./contexts/ColorContext";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import Page from "./components/Page";
import "./App.css";
import { ThemeContext } from "./contexts/ThemeContext";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [lang, setLang] = useState("en");
  const [isDark, setIsDark] = useState(false);

  const onToggleLang = () => {
    const changeLang = lang === "en" ? "kr" : "en";
    setLang(changeLang);
  };

  return (
    <div>
      <LangContext.Provider value={lang}>
        <Button onToggleLang={onToggleLang} />
        <Title />
        <Message />
      </LangContext.Provider>
      <hr />
      {/* <ColorContext.Provider value={{ color: "green" }}>
        <div>
          <ColorBox />
        </div>
      </ColorContext.Provider> */}
      <ColorProvider>
        <SelectColors />
        <ColorBox />
      </ColorProvider>
      <UserContext.Provider value={"한재"}>
        <ThemeContext.Provider value={{ isDark: isDark, setIsDark: setIsDark }}>
          <Page />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
