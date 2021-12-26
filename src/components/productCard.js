import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../actions/cartActions';

export function ProductCard({item}) {

    const dispatch = useDispatch();

    const handleClick = (id)=>{
        dispatch(addToCart(id)); 
    }

    return(
        <>
            <div className="card">
                <div className="card-image">
                    <img src={item.img} alt={item.title}/>
                    <span className="card-title">{item.title}</span>
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{handleClick(item.id)}}><i className="material-icons">add</i></span>
                </div>
                <div className="card-content">
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}$</b></p>
                </div>
            </div>
        </>
    )
}