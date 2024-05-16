import serviceImage from "../assets/home/chef-service.jpg"

const BistoBoss = () => {
    return (
        <div className="relative min-h-[30vh] my-9 flex justify-center items-center">
            <img src={serviceImage} className="object-cover" alt="" />
            <div className="absolute bg-white p-10 space-y-3 text-center w-3/4">
                <h3 className="text-3xl ">Bistro Boss</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default BistoBoss;