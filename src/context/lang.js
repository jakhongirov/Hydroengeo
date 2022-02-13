// import React from "react";

// const ContextLang = React.createContext();

// function LangProvider({ children }) {
//   const [lang, setLang] = React.useState("ru");

//   // React.useEffect(() => {
//   //   setLang(JSON.parse(window.localStorage.getItem("lang")));
//   // }, []);

//   // React.useEffect(() => {
//   //   window.localStorage.setItem("lang", JSON.stringify(lang));
//   // }, [lang]);
//   return (
//     <ContextLang.Provider value={{ lang, setLang }}>{children}</ContextLang.Provider>
//   );
// }

// export { ContextLang, LangProvider };

import { createContext, useState, useEffect } from "react";

const LangContext = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("ru");

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
  );
};

export { LangProvider, LangContext };
