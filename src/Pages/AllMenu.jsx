import { Helmet } from "react-helmet";
import Cover from "../componets/Cover";
import ourMenuImage from "../assets/menu/banner3.jpg"
import dessertImg from "../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../assets/menu/pizza-bg.jpg"
import saladImg from "../assets/menu/salad-bg.jpg"
import soupdImg from "../assets/menu/soup-bg.jpg"
import MenuCategory from "../componets/MenuCategory";
import useMenu from "../hooks/useMenu";
import SectionTitel from "../componets/SectionTitel";
const AllMenu = () => {
    const [menus, loading] = useMenu()
    console.log(menus)
    const soup = menus.filter(item => item.category === "soup")
    const pizza = menus.filter(item => item.category === "pizza")
    const salad = menus.filter(item => item.category === "salad")
    const dessert = menus.filter(item => item.category === "dessert")
    const offered = menus.filter(item => item.category === "offered")

    if (loading) {
        return <h1 className="text-4xl">Loading ..........</h1>
    }
    return (
        <div>
            <Helmet>
                <title>All Menu</title>
            </Helmet>
            <Cover image={ourMenuImage} titel={"Our menu"} subTitle={"Would you like to try a dish?"}></Cover>
            {/* offered */}
            <SectionTitel heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></SectionTitel>
            <MenuCategory items={offered}  ></MenuCategory>
            {/* dessert */}
            <MenuCategory items={dessert} image={dessertImg} titel={"Dessert"} subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
            {/*  */}
            {/* pizza */}
            <MenuCategory items={pizza} image={pizzaImg} titel={"Pizza"} subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
            {/*  */}
            {/* salads */}
            <MenuCategory items={salad} image={saladImg} titel={"salads"} subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
            {/*  */}
            {/* soup */}
            <MenuCategory items={soup} image={soupdImg} titel={"soup"} subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
            {/*  */}
        </div>
    );
};

export default AllMenu;