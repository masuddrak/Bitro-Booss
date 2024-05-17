import FoodCard from './FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-4 gap-10">
            {
                items.map(categoryItem => <FoodCard key={categoryItem._id} item={categoryItem}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;