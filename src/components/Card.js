import {useState} from "react";


function Card(props){

    const [readMore, setReadMore] = useState(false);

    const description = readMore==false? `${props.info.substring(0,200)}...` : props.info;
    
    const readMoreHandler = () => 
    {
        setReadMore(!readMore);
    }

    return (
        <div className="card">
            <img src={props.image} className="image"></img>
            <div className="tour-details">
                <h4 className="tour-price">{props.price}</h4>
                <h4 className="tour-name">{props.name}</h4>
            </div>
            <div className="description">
                {description}
                <span className="read-more" onClick={readMoreHandler}>
                    {readMore===false ? "read more": "show less"}
                </span>
            </div>

            <button onClick={()=> props.removeTour(props.id)}>
                Not Interested
            </button>

        </div>
    );
}
export default Card;