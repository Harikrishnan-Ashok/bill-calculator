import "./App.css";
import { useState } from "react";

import Bill from "./components/Bill";
import Tip from "./components/Tip";
import Disp from "./components/Disp";
import Reset from "./components/Reset";

export default function App() {
  const [bill, setbill] = useState("");
  const [p1, setp1] = useState(0);
  const [p2, setp2] = useState(0);
  return (
    <div className="container">
      <Bill bill={bill} onsetbill={setbill}></Bill>
      <Tip per={p1} onset={setp1} text="how was the service for you :"></Tip>
      <Tip
        per={p2}
        onset={setp2}
        text="how was the service for your friend :"
      ></Tip>
      <Disp bill={bill} percent={(((p1 + p2) / 2) * bill) / 100}></Disp>
      <Reset onsetbill={setbill} onsetp1={setp1} onsetp2={setp2}></Reset>
    </div>
  );
}
