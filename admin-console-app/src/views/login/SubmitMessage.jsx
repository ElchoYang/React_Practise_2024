
const SubmitMessage = (props) => {

    return (
        <>
            <div className={props.value.color}> {props.value.message} </div>
        </>
    )
}

export default SubmitMessage