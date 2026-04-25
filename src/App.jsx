import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayer();

  const [coin, setCoin] = useState(50000);

  return (
    <>
      <Navbar coin = {coin}></Navbar>
      <Banner></Banner>

      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Players playersPromise={playersPromise} setCoin = {setCoin} coin = {coin}></Players>
      </Suspense>
    </>
  );
}

export default App;
