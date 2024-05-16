import HomeBanner from '../componets/HomeBanner';
import CategorySlider from '../componets/CategorySlider';
import BistoBoss from '../componets/BistoBoss';
import OurMenuSection from '../componets/OurMenuSection';
import Testimonials from '../componets/Testimonials';
import PopulerMenu from '../componets/PopulerMenu';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CategorySlider></CategorySlider>
            <BistoBoss></BistoBoss>
            <PopulerMenu></PopulerMenu>
            <OurMenuSection></OurMenuSection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;