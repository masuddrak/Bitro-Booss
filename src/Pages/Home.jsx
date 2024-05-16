import HomeBanner from '../componets/HomeBanner';
import CategorySlider from '../componets/CategorySlider';
import BistoBoss from '../componets/BistoBoss';
import Menu from '../componets/Menu';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CategorySlider></CategorySlider>
            <BistoBoss></BistoBoss>
            <Menu></Menu>
        </div>
    );
};

export default Home;