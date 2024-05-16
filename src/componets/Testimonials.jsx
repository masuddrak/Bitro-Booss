import { useEffect, useState } from "react";
import SectionTitel from "./SectionTitel";
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { FaQuoteLeft } from "react-icons/fa";


// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState(0)
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <section>
            <SectionTitel heading={"---What Our Clients Say---"} subHeading={"TESTIMONIALS"}></SectionTitel>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>

                        <div className="mx-40 flex flex-col items-center text-center space-y-2">
                        <Rating  style={{ maxWidth: 200 }}  value={review.rating} onChange={setRating} />
                        <FaQuoteLeft className="text-4xl text-base-content"></FaQuoteLeft>
                            <p>{review.details}</p>
                            <p className="text-xl ">{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </section>
    );
};

export default Testimonials;