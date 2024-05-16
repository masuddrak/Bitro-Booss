import SectionTitel from "./SectionTitel";
import MenuItem from "./MenuItem";
import useMenu from "../hooks/useMenu";


const PopulerMenu = () => {
    const [menus,loading]=useMenu()
    const myPopulerItem = menus.filter(item => item.category === "popular")
if(loading){
    return <h1 className="text-4xl">Loading ..........</h1>
}
    return (
        <section >
            <SectionTitel subHeading="---Check it out---" heading="FROM OUR MENU" ></SectionTitel>
            <div className="md:grid grid-cols-2 gap-10 mt-10">
                {
                    myPopulerItem.map(menuitem => <MenuItem key={menuitem._id} menuitem={menuitem}></MenuItem>)
                }
            </div>
        </section >
    );
};

export default PopulerMenu;