import "./Card.css"

function Card(props)
{
    const x = "card "+props.className
    return <div className = {x} >{props.children}</div>
    
}

export default Card;