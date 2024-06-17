import React, { useEffect, useState } from "react";

function Tictic() {
  const [click, setClick] = useState(false);
  const [winner, setWinner] = useState("");
  const [tic, setTic] = useState({
    box1: "",
    box2: "",
    box3: "",
    box4: "",
    box5: "",
    box6: "",
    box7: "",
    box8: "",
    box9: "",
  });
  const [boxNumber, setBoxNumber] = useState("");
  const handleClick = (id) => {
    setBoxNumber(id);
    setClick(!click);
  };

  useEffect(() => {
    if (tic.box1 === tic.box2 && tic.box1 === tic.box3) {
      console.log("hiii");
      setWinner(tic.box1);
    } else if (tic.box1 === tic.box4 && tic.box1 === tic.box7) {
      setWinner(tic.box1);
    } else if (tic.box1 === tic.box5 && tic.box1 === tic.box9) {
      setWinner(tic.box1);
    } else if (tic.box2 === tic.box5 && tic.box2 === tic.box8) {
      setWinner(tic.box2);
    } else if (tic.box3 === tic.box6 && tic.box3 === tic.box9) {
      setWinner(tic.box6);
    } else if (tic.box4 === tic.box5 && tic.box4 === tic.box6) {
      setWinner(tic.box4);
    } else if (tic.box7 === tic.box8 && tic.box7 === tic.box9) {
      setWinner(tic.box9);
    } else if (tic.box3 === tic.box5 && tic.box3 === tic.box7) {
      setWinner(tic.box3);
    }
  }, [tic]);

  console.log(winner, "winner");

  return (
    <div className="wrapper">
      <div className="strg">
        <h1>Start The Game</h1>
      </div>
      <div className="winner">
        <h1>the winner is:{winner}</h1>
      </div>
      <div className="boxDiv">
        <div
          style={{
            backgroundColor: click && boxNumber === "1" ? "blue" : "magenta",
          }}
          className="box"
          onClick={() => {
            const id = "1";
            handleClick(id);
            if (click && id === "1") {
              setTic({ ...tic, box1: "X" });
            } else {
              setTic({ ...tic, box1: "O" });
            }
          }}
        >
          <div className="tic">{tic.box1}</div>
        </div>
        <div
          className="box"
          style={{
            backgroundColor: click && boxNumber === "2" ? "blue" : "magenta",
          }}
          onClick={() => {
            const id = "2";
            handleClick(id);
            if (click && id === "2") {
              setTic({ ...tic, box2: "X" });
            } else {
              setTic({ ...tic, box2: "O" });
            }
          }}
        >
          <h2 className="tic"> {tic.box2}</h2>
        </div>
        <div
          style={{
            backgroundColor: click && boxNumber === "3" ? "blue" : "magenta",
          }}
          className="box"
          onClick={() => {
            const id = "3";

            handleClick(id);
            if (click && id === "3") {
              setTic({ ...tic, box3: "X" });
            } else {
              setTic({ ...tic, box3: "O" });
            }
          }}
        >
          <div className="tic">{tic.box3}</div>
        </div>
        <div
          style={{
            backgroundColor: click && boxNumber === "4" ? "blue" : "magenta",
          }}
          className="box"
          onClick={() => {
            const id = "4";
            handleClick(id);
            if (click && id === "4") {
              setTic({ ...tic, box4: "X" });
            } else {
              setTic({ ...tic, box4: "O" });
            }
          }}
        >
          <div className="tic">{tic.box4}</div>
        </div>
        <div
          style={{
            backgroundColor: click && boxNumber === "5" ? "blue" : "magenta",
          }}
          className="box"
          onClick={() => {
            const id = "5";
            handleClick(id);
            if (click && id === "5") {
              setTic({ ...tic, box5: "X" });
            } else {
              setTic({ ...tic, box5: "O" });
            }
          }}
        >
          <div className="tic">{tic.box5}</div>
        </div>
        <div
          style={{
            backgroundColor: click && boxNumber === "6" ? "blue" : "magenta",
          }}
          className="box"
          onClick={() => {
            const id = "6";
            handleClick(id);
            if (click && id === "6") {
              setTic({ ...tic, box6: "X" });
            } else {
              setTic({ ...tic, box6: "O" });
            }
          }}
        >
          <div className="tic"> {tic.box6}</div>
        </div>
        <div
          style={{
            backgroundColor: click && boxNumber === "7" ? "blue" : "magenta",
          }}
          className="box"
          onClick={() => {
            const id = "7";
            handleClick(id);
            if (click && id === "7") {
              setTic({ ...tic, box7: "X" });
            } else {
              setTic({ ...tic, box7: "O" });
            }
          }}
        >
          <div className="tic"> {tic.box7}</div>
        </div>
        <div
          style={{
            backgroundColor: click && boxNumber === "8" ? "blue" : "magenta",
          }}
          className="box"
          onClick={() => {
            const id = "8";
            handleClick(id);
            if (click && id === "8") {
              setTic({ ...tic, box8: "X" });
            } else {
              setTic({ ...tic, box8: "O" });
            }
          }}
        >
          <div className="tic">{tic.box8}</div>
        </div>
        <div
          style={{
            backgroundColor: click && boxNumber === "9" ? "blue" : "magenta",
          }}
          className="box"
          onClick={() => {
            const id = "9";
            handleClick(id);
            if (click && id === "9") {
              setTic({ ...tic, box9: "X" });
            } else {
              setTic({ ...tic, box9: "O" });
            }
          }}
        >
          <div className="tic"> {tic.box9}</div>
        </div>
      </div>
    </div>
  );
}

export default Tictic;
