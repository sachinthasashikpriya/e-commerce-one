import "./Item.css";

interface ItemProps {
    id: number;
    image: string; // URL or path to the image
    name: string; // Name of the item
    new_price: number; // New price of the item
    old_price: number; // Old price of the item
}

export const Item = (props: ItemProps) => {
    return (
        <div className="item">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">${props.new_price}</div>
                <div className="item-price-old">${props.old_price}</div>
            </div>
        </div>
    );
};
export default Item;
