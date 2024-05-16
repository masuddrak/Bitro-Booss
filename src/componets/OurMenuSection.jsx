import SectionTitel from "./SectionTitel";
import featcherImage from "../assets/home/featured.jpg"
const OurMenuSection = () => {
    return (
        <section style={{backgroundImage:`linear-gradient(90deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)),url(${featcherImage})`}} className="p-8 bg-fixed text-white bg-cover  my-10">
            <SectionTitel heading={"---Check it out---"} subHeading={"FROM OUR MENU"}></SectionTitel>
            <div className="grid grid-cols-2 gap-5 p-20 items-center">
                <img src={featcherImage} alt="" />
                <div className="space-y-2" >
                    <p>March 20, 2023</p>
                    <h3 className="text-xl">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline btn-accent border-0 border-b-2 uppercase text-white">rad More</button>
                </div>
            </div>
        </section>
    );
};

export default OurMenuSection;