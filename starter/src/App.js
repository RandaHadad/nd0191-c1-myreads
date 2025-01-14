import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import SearchPage from "./Screens/SearchPage";
import NoMatch from "./Screens/NoMatch";

function App() {
  React.useEffect(() => {
    //Create Local Storage For Arrays
    if (localStorage.getItem("currentlyReading") == null)
      localStorage.setItem("currentlyReading", JSON.stringify([]));

    if (localStorage.getItem("wantToRead") == null)
      localStorage.setItem("wantToRead", JSON.stringify([]));

    if (localStorage.getItem("read") == null)
      localStorage.setItem("read", JSON.stringify([]));
  });

  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path="*" element={<NoMatch/>} />
    </Routes>
  );
}

export default App;
