import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../actions/cartActions'

export function Cart() {

    const items = useSelector(state => state.items.addedItems);
    const totalCost = useSelector(state => state.items.total);
    const dispatch = useDispatch();

    const  handleRemove = (id)=>{
       dispatch(removeItem(id));
    }

    let addedItems = items.length ?
    (  
        items.map(item=>{
            return(
               
                <li className="collection-item avatar" key={item.id}>
                            <div className="item-img"> 
                                <img src={item.img} alt={item.img} className=""/>
                            </div>
                        
                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p> 
                                <p>
                                    <b>Quantity: {item.quantity}</b> 
                                </p>
                               
                                <button className="waves-effect waves-light btn pink remove" onClick={()=>{handleRemove(item.id)}}>Remove</button>
                            </div>
                            
                        </li>
                 
            )
        })
    ):

     (
        <p>Nothing.</p>
     )
    return(
        <>
            <h2>Cart</h2>
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                    <h3>Total : {totalCost}$</h3>
                </div>       
            </div>
        </>
    )
}