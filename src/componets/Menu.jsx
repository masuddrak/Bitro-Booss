import { useState } from "react";
import SectionTitel from "./SectionTitel";
import { useEffect } from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
    const [menus,setMenus]=useState([])
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
           const myPopulerItem=data.filter(item=>item.category==="popular")
           setMenus(myPopulerItem)
        })
    },[])
    return (
        <section >
            <SectionTitel subHeading="---Check it out---" heading="FROM OUR MENU" ></SectionTitel>
            <div className="md:grid grid-cols-2 gap-10 mt-10">
                {
                   menus.map(menuitem=><MenuItem key={menuitem._id} menuitem={menuitem}></MenuItem>) 
                }
            </div>
        </section >
    );
};

export default Menu;