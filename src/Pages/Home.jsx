import HomeBanner from '../componets/HomeBanner';
import CategorySlider from '../componets/CategorySlider';
import BistoBoss from '../componets/BistoBoss';
import Menu from '../componets/Menu';
import OurMenuSection from '../componets/OurMenuSection';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CategorySlider></CategorySlider>
            <BistoBoss></BistoBoss>
            <Menu></Menu>
            <OurMenuSection></OurMenuSection>
        </div>
    );
};

export default Home;