import { useState } from "react";
import S from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { LanguageContext } from "./config/context";

function App() {
  const [language, setLanguage] = useState("de");

  const contextValue = {
    language,
    setLanguage,
  };
  return (
    <LanguageContext.Provider value={contextValue}>
      <div className={S.container}>
        <Header />
        <Main className={S.main} />
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
