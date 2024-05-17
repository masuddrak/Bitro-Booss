import Cover from "./Cover";
import MenuItem from "./MenuItem";


const MenuCategory = ({ items, image, titel,subTitle }) => {
    return (
        <div className="my-10">
            {titel && <Cover image={image} titel={titel} subTitle={subTitle}></Cover>}
            <div className="md:grid grid-cols-2 gap-10 mt-10">
                {
                    items.map(menuitem => <MenuItem key={menuitem._id} menuitem={menuitem}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;