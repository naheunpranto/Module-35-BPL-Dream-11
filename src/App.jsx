import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";

const fetchPlayer = async() => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {

  const playersPromise = fetchPlayer();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense fallback = {<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise = {playersPromise}></Players>
      </Suspense>
    </>
  );
}

export default App;
