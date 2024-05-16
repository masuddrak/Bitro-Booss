import { Parallax } from 'react-parallax';
import ourMenuImage from "../assets/menu/banner3.jpg"
const Cover = () => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={ourMenuImage}
            bgImageAlt="the dog"
            strength={-200}
        >

            <div style={{ height: '700px' }} className='flex justify-center items-center text-center mx-auto  w-2/3 text-white'>

                <div className=' space-y-2 bg-gradient-to-r from-gray-800 to-[rgba(21,21,21,0)]'>
                    <div className='bg-gradient-to-l from-gray-800 to-[rgba(21,21,21,0)] py-20 px-40 '>
                        <h1 className='text-4xl font-bold uppercase'>our Menu</h1>
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;