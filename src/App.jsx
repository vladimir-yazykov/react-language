import { useState } from "react";
import S from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [language, setLanguage] = useState("de");
  return (
    <div className={S.container}>
      <Header language={language} />
      <Main className={S.main} />
      <Footer />
    </div>
  );
}

export default App;
