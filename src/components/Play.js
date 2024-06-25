import React, { useState } from "react";
import dice1 from "../img/dice_1.png";
import dice2 from "../img/dice_2.png";
import dice3 from "../img/dice_3.png";
import dice4 from "../img/dice_4.png";
import dice5 from "../img/dice_5.png";
import dice6 from "../img/dice_6.png";
import { toast } from "react-toastify";

const Play = () => {
  const [score, setScore] = useState(0);
  const [num, setNum] = useState(1);
  const [rules, setRules] = useState(false);
  const [currentNum, setCurrentNum] = useState(-1);

  function randomHandler() {
    if (currentNum == -1) {
      toast.error("Please Select a Number First");
    } else {
      const rndInt = Math.floor(Math.random() * 6) + 1;
      setNum(rndInt);
      if (currentNum === rndInt) {
        setScore((prevScore) => prevScore + rndInt);
      } else {
        setScore((prevScore) => prevScore - 2);
      }
    }
  }

  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  function resetHandler() {
    setScore(0);
  }

  function rulesHandler() {
    setRules(!rules);
  }

  function checkHandler(passed,event) {
   
    setCurrentNum(passed);
  }


  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-between pl-16 pr-12 mt-5  w-full h-[20vh] items-center">
          <div className="flex flex-col">
            <div className="text-8xl font-semibold flex justify-center">
              {" "}
              {score}
            </div>
            <div className="text-4xl font-semibold">Total Score</div>
          </div>
          <div className="flex flex-col justify-between h-full w-[45%]">
            <div className="flex  justify-between items-center h-full ">
              <button
                className={` border-[1.6px] border-black h-[60%] w-[11%] rounded-lg  ${currentNum==1 ? "bg-black text-white" : "text-black"}`}
                onClick={() => checkHandler(1)}
                value={1}
              >
                <div>
                  <div className="text-3xl font-semiold">1</div>
                </div>
              </button>
              <button
                className={` border-[1.6px] border-black h-[60%] w-[11%] rounded-lg  ${currentNum==2 ? "bg-black text-white" : "text-black"}`}
                onClick={() => checkHandler(2)}
                value={2}
              >
                <div>
                  <div className="text-3xl font-semiold">2</div>
                </div>
              </button>
              <button
                className={` border-[1.6px] border-black h-[60%] w-[11%] rounded-lg  ${currentNum==3 ? "bg-black text-white" : "text-black"}`}
                onClick={() => checkHandler(3)}
                value={3}
              >
                <div>
                  <div className="text-3xl font-semiold">3</div>
                </div>
              </button>
              <button
              className={` border-[1.6px] border-black h-[60%] w-[11%] rounded-lg  ${currentNum==4 ? "bg-black text-white" : "text-black"}`}
                onClick={() => checkHandler(4)}
                value={4}
              >
                <div>
                  <div className="text-3xl font-semiold">4</div>
                </div>
              </button>
              <button
                className={` border-[1.6px] border-black h-[60%] w-[11%] rounded-lg  ${currentNum==5 ? "bg-black text-white" : "text-black"}`}
                onClick={() => checkHandler(5)}
                value={5}
              >
                <div>
                  <div className="text-3xl font-semiold">5</div>
                </div>
              </button>
              <button
               className={` border-[1.6px] border-black h-[60%] w-[11%] rounded-lg  ${currentNum==6 ? "bg-black text-white" : "text-black"}`}
                onClick={() => checkHandler(6)}
                value={6}
              >
                <div>
                  <div className="text-3xl font-semiold">6</div>
                </div>
              </button>
            </div>
            <div className="text-3xl font-bold flex justify-end ">
              Select Number
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center   h-[75vh] mt-12">
          <img
            src={diceImages[num - 1]}
            alt={`Dice ${num}`}
            onClick={randomHandler}
            className="h-[50%] w-[20%] "
          />
          <div className="text-3xl font-semibold mt-5">
            Click on Dice to roll
          </div>
          <button className="mt-8">
            <div className="border-[1.6px] border-black py-2 px-16 rounded-lg">
              <div className="text-lg font-semibold" onClick={resetHandler}>
                Reset Score
              </div>
            </div>
          </button>
          <button className="mt-8" onClick={rulesHandler}>
            <div className="border-[1.6px] border-black py-2 px-16 rounded-lg">
              <div className="text-lg font-semibold">
                {rules ? "Hide Rules" : "Show Rules"}
              </div>
            </div>
          </button>
        </div>
        {rules && (
          <div className="flex justify-center mb-40  ">
            <div className={`flex flex-col  bg-red-200 px-6 h-full w-[85vh] `}>
              <h2 className="text-3xl font-bold pt-3">How to play dice game</h2>
              <br></br>
              <p className="text-[16px] font-medium">Select any number</p>
              <p className="text-[16px] font-medium">Click on dice image</p>
              <p className="pb-7 text-[16px] font-medium">
                After click on dice if selected number is equal to dice number
                you will get same point as dice if you get wrong guess then 2
                points will be deducted.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Play;
