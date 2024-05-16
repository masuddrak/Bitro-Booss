import HomeBanner from '../componets/HomeBanner';
import CategorySlider from '../componets/CategorySlider';
import BistoBoss from '../componets/BistoBoss';
import Menu from '../componets/Menu';
import OurMenuSection from '../componets/OurMenuSection';
import Testimonials from '../componets/Testimonials';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CategorySlider></CategorySlider>
            <BistoBoss></BistoBoss>
            <Menu></Menu>
            <OurMenuSection></OurMenuSection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;