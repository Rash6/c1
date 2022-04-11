import "./App.css"

import { useState } from "react"

function App() {

  
  const [tracker,settracker]=useState({
    Score:76,
    Wicket:2,
    Ball:50,

  })

  

  
function ChangeScore(value){
  return settracker({
    Score:tracker.Score+value,
    Wicket:tracker.Wicket,
    Ball:tracker.Ball,

  });
}

function ChangeWicket(value){
  return settracker({
    Score:tracker.Score,
    Wicket:tracker.Wicket+value,
    Ball:tracker.Ball,

  });
}

function ChangeBall(value){
  return settracker({
    Score:tracker.Score,
    Wicket:tracker.Wicket,
    Ball:tracker.Ball+value,

  });
}


  
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:
          <h1 className="scoreCount">
            {
              // show "score" here
              
                
                tracker.Score
            }
            
          </h1>
        </div>
        <div>
          Wicket:
          <h1 className="wicketCount">
            {
              // show wicket here

              tracker.Wicket
            }
          </h1>
        </div>

        <div>
          Over:
          <h1 className="overCount">
            {
             tracker.Ball
            
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{
          ChangeScore(1)
        }}>Add 1</button>
        <button className="addScore4" onClick={()=>{
          ChangeScore(4)}} >Add 4</button>
        <button className="addScore6"  onClick={()=>{
          ChangeScore(6)}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{
          ChangeWicket(1)}}  >Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{
          ChangeBall(1)}} >Add 1</button>
      </div>
    <div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1 className="status" >
      
      {tracker.Score>100? "India Won":"--"}
     
      </h1>
      </div>
    </div>
  );
}

export default App;