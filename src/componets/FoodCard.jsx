
const FoodCard = ({item}) => {
    const {image,price,name,recipe}=item
    return (
 
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} className="object-cover" alt="Shoes" /></figure>
                <p className="absolute right-0 bg-black px-2 text-white m-2">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add Card</button>
                    </div>
                </div>
            </div>
  
    );
};

export default FoodCard;