import Logic from "./logic/Logic";
import classes from './App.module.scss'
import GameBox from "./components/GameBox";
const App = ()=>{
  return (
    <div className={classes.app}>
      <h1>Tic-Tac-Toe</h1>
      <Logic></Logic>
      <GameBox></GameBox>
    </div>
  )
}

export default App;