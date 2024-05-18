import Cover from "../componets/Cover";
import orderBanner from "../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../hooks/useMenu";
import OrderTab from "../componets/OrderTab";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Orders = () => {
    const x = ["soup", "pizza", 'salad', "dessert", "drinks", "offered"]
    const [menus, loading] = useMenu()
    const soup = menus.filter(item => item.category === "soup")
    const pizza = menus.filter(item => item.category === "pizza")
    const salad = menus.filter(item => item.category === "salad")
    const dessert = menus.filter(item => item.category === "dessert")
    const drinks = menus.filter(item => item.category === "drinks")
    const offered = menus.filter(item => item.category === "offered")
    const { category } = useParams()
    const [tabIndex, setTabIndex] = useState(x.indexOf(category.toLocaleLowerCase()));

    if (loading) {
        return <h1>Loading ..........</h1>
    }
    console.log("my category", category)
    return (
        <section>
            <Cover image={orderBanner} titel={"OUR SHOP"} subTitle={"Would you like to try a dish?"}></Cover>
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Soup</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Salad</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                        <Tab>Offered</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={offered}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default Orders;