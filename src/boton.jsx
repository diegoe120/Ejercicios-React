import "./boton.css";

function Button(props) {
    return (
        <>

            <button className="boton">{props.numero}</button>
        </>

    )
}

export default Button;