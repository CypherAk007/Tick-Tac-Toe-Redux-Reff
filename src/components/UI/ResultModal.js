
import classes from './ResultModal.module.scss'
const ResultModal = (props)=>{
    const onClickHandler =(event)=>{

        // event.preventDefault()
        console.log('onclick');
        props.setModalClose(false)
    }
    return(
        <dialog className={classes['result-modal']} open>
            <h2>Game Over</h2>
            <h2>Winner : {props.winner}</h2>
            <form method="dialog">
                <button >Close</button>
            </form>
        </dialog>
    )
}

export default ResultModal;