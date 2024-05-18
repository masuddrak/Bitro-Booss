import { Link } from "react-router-dom";
import Cover from "./Cover";
import MenuItem from "./MenuItem";


const MenuCategory = ({ items, image, titel, subTitle }) => {
    return (
        <div className="my-10">
            {titel && <Cover image={image} titel={titel} subTitle={subTitle}></Cover>}
            <div className="md:grid grid-cols-2 gap-10 mt-10">
                {
                    items.map(menuitem => <MenuItem key={menuitem._id} menuitem={menuitem}></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <Link className="btn btn-outline btn-accent border-0 border-b-2  uppercase text-white" to={`/orders/${titel}`}>ORDER YOUR FAVOURITE FOOD</Link>

            </div>
        </div>
    );
};

export default MenuCategory;