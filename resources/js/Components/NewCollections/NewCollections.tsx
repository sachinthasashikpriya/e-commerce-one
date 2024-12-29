import new_collection from "../Frontend_Assets/new_collections";
import { Item } from "../Item/Item";
import "./NewCollections.css";

export const NewCollections = () => {
    return (
        <div className="new-collections">
            <h1>
                NEW COLLECTIONS
                <hr />
            </h1>

            <div className="collections">
                {new_collection.map((item, i) => {
                    return (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    );
                })}
            </div>
        </div>
    );
};
