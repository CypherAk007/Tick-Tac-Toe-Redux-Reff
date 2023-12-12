import classes from './BoxButton.module.scss'

const BoxButton = (props)=>{
    return (
        <button onClick={props.onClick} className={classes.btn}>{props.children}</button>
    )
}

export default BoxButton;