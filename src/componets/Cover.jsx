import { Parallax } from 'react-parallax';

const Cover = ({image,titel,subTitle}) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={image}
            bgImageAlt="the dog"
            strength={-200}
        >

            <div style={{ height: '500px' }} className='flex justify-center items-center text-center mx-auto  w-2/3 text-white'>

                <div className=' space-y-2 bg-gradient-to-r from-gray-800 to-[rgba(21,21,21,0)]'>
                    <div className='bg-gradient-to-l from-gray-800 to-[rgba(21,21,21,0)] py-20 px-40 '>
                        <h1 className='text-4xl font-bold uppercase'>{titel}</h1>
                        <h1 className=' '>{subTitle}</h1>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;