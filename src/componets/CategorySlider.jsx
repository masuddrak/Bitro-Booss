import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import category1 from "../assets/home/slide1.jpg"
import category2 from "../assets/home/slide2.jpg"
import category3 from "../assets/home/slide3.jpg"
import category4 from "../assets/home/slide4.jpg"
import category5 from "../assets/home/slide5.jpg"
import SectionTitel from './SectionTitel';
const CategorySlider = () => {
    return (
        <>
        <SectionTitel subHeading="---From 11:00am to 10:00pm---" heading="ORDER ONLINE"></SectionTitel>
        <Swiper
          slidesPerView={4}
          
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper my-10"
        >
          <SwiperSlide>
            <img  src={category1} alt="" />
            <h2 className='text-3xl uppercase text-white text-center -mt-16'>Salads</h2>
          </SwiperSlide>
          <SwiperSlide>
          <img src={category2} alt="" />
          <h2 className='text-3xl uppercase text-white text-center -mt-16'>Salads</h2>

          </SwiperSlide>
          <SwiperSlide>
          <img src={category3} alt="" />
          <h2 className='text-3xl uppercase text-white text-center -mt-16'>Salads</h2>

          </SwiperSlide>
          <SwiperSlide>
          <img src={category4} alt="" />
          <h2 className='text-3xl uppercase text-white text-center -mt-16'>Salads</h2>

          </SwiperSlide>
          <SwiperSlide>
          <img src={category5} alt="" />
          <h2 className='text-3xl uppercase text-white text-center -mt-16'>Salads</h2>

          </SwiperSlide>
         
        </Swiper>
      </>
    );
};

export default CategorySlider;