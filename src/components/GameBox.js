import classes from './GameBox.module.scss'
import BoxButton from './BoxButton';
import { useDispatch, useSelector } from 'react-redux';
import { matActions } from '../store/mat';
import { useEffect, useRef, useState } from 'react';

import { logicActions } from '../store/logic';
import ResultModal from './UI/ResultModal';

const GameBox = ()=>{
    
    const flag = useSelector(state=>state.mat.flag)
    const mat = useSelector(state=>state.mat.mat)
    const p1List = useSelector(state=>state.logic.playerOne)
    const p2List = useSelector(state=>state.logic.playerTwo)
    const result = useSelector(state=>state.logic.result)
    const winner = useSelector(state =>state.logic.winner)
    // const [modalClose,setModalClose] = useState(true)
    const dialog = useRef();
    const dispatch = useDispatch();

    useEffect(()=>{
        if (p1List.length>=3){
            let resFlag=true;
            for (let row of result){
                resFlag=true;
                for (let i of row){
                    console.log(p1List.includes('00'),p1List.length,p1List.length>=3);
                    // player1
                    if (p1List.includes(i)===false){
                        resFlag=false;
                        break;
                    }   
                }
                if (resFlag===true){
                    dispatch(logicActions.insertWinner('Player 1'))
                }
            }
            
        }
        if (p2List.length>=3){
            let resFlag=true;
            for (let row of result){
                resFlag=true;
                for (let i of row){
                   // player1
                    if (p2List.includes(i)===false){
                        resFlag=false;
                        break;
                    }   
                }
                if (resFlag===true){
                    dispatch(logicActions.insertWinner('Player 2'))
                }
            }
        }

    },[flag])
    const onClickHandler = (index)=>{
        console.log(index);
        console.log(flag);
        if (flag===false){
            // player 1
            if (mat[index[0]][index[1]]===0){
                dispatch(matActions.changeByPlayerOne(index))
                dispatch(matActions.changeFlag())
                dispatch(logicActions.insertIntoOne(''+index[0].toString()+index[1].toString()))
            }
            

        }else{
            // player2
            if (mat[index[0]][index[1]]===0){
                dispatch(matActions.changeByPlayerTwo(index))
                dispatch(matActions.changeFlag())
                dispatch(logicActions.insertIntoTwo(''+index[0].toString()+index[1].toString()))
            }

        }
    }

    return (
        <div>
        {/* <ResultModal></ResultModal> */}

        
        {winner  && <ResultModal  winner={winner}></ResultModal>}
        <div className={classes['gameBox']}>
            <div className={classes['gameBox__row1']}>
                <BoxButton onClick={()=>onClickHandler([0,0])}>{mat[0][0]===1?'x':mat[0][0]===2?'o':''}</BoxButton>
                <BoxButton onClick={()=>onClickHandler([0,1])}>{mat[0][1]===1?'x':mat[0][1]===2?'o':''}</BoxButton>
                <BoxButton onClick={()=>onClickHandler([0,2])}>{mat[0][2]===1?'x':mat[0][2]===2?'o':''}</BoxButton>
            </div>
            <div className={classes['gameBox__row1']}>
                <BoxButton onClick={()=>onClickHandler([1,0])}>{mat[1][0]===1?'x':mat[1][0]===2?'o':''}</BoxButton>
                <BoxButton onClick={()=>onClickHandler([1,1])}>{mat[1][1]===1?'x':mat[1][1]===2?'o':''}</BoxButton>
                <BoxButton onClick={()=>onClickHandler([1,2])}>{mat[1][2]===1?'x':mat[1][2]===2?'o':''}</BoxButton>
            </div>
            <div className={classes['gameBox__row1']}>
                <BoxButton onClick={()=>onClickHandler([2,0])}>{mat[2][0]===1?'x':mat[2][0]===2?'o':''}</BoxButton>
                <BoxButton onClick={()=>onClickHandler([2,1])}>{mat[2][1]===1?'x':mat[2][1]===2?'o':''}</BoxButton>
                <BoxButton onClick={()=>onClickHandler([2,2])}>{mat[2][2]===1?'x':mat[2][2]===2?'o':''}</BoxButton>
            </div>
            <div>
                <h1>Winner: {winner}</h1>
            </div>
        </div>
        </div>
    )
}
export default GameBox;