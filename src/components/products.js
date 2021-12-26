import { useSelector } from "react-redux";
import { ProductCard } from './productCard';

export function Products() {
    const items = useSelector(state => state.items.items);
    console.log(items);

    return(
        <>
            <h2>Products</h2>
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                {items.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
                </div>
            </div>

        </>
    )
}