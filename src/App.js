import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Me from "./components/Me";
import Header from "./components/Header";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [me, setMe] = useState([
    {
      name: "Kirk McDowell",
      city: "Kingston",
      land: "Jamaica",
      job1: "Musician",
      job2: "Web-Developer",
    },
  ]);
  const [infos, setInfos] = useState([{ name: "", email: "", message: "" }]);

  const [image, setImage] = useState([
    {
      drums:
        "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/510739/16246166_800.jpg",
      bass: "https://ww2.musicworldbrilon.de/media/catalog/product/cache/8293dc8a7e06d7bf3d8f84582bf82c02/2/9/296971_3.jpg",
      keys: "https://www.kirstein.de/out/pictures/generated/product/1/575_380_75/e6eb18c08aee0178a14d1a220e9db3f1_1.jpg",
      guitar:
        "https://www.klangfarbe.com/pictures/Shop/Artikel/G/109479/Fender-Strat-car-relic-1.webp",
      javascript:
        "https://www.agentur-kreativdenker.de/wp-content/uploads/2020/12/javascript-js.jpg",
      html: "https://d3eeke16mv0lt7.cloudfront.net/sites/default/files/styles/article_hero_image/public/html5-mobile-app-native-hybrid-pros-cons.jpg?itok=f2OysLvu",
      css: "https://blog.logrocket.com/wp-content/uploads/2022/03/deep-dive-css-where-function-nocdn.png",
      react: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    },
  ]);

  const addMessage = (info) => {
    setInfos([info, ...infos]);
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Me person={me} addData={addMessage} />}
        ></Route>
        <Route path="/hobby" element={<Hobbies image={image} />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
