
const MenuItem = ({ menuitem }) => {
    const { image, price, recipe, name } = menuitem
    return (
        <div className="flex gap-4">
            <img style={{borderRadius:"0 50% 50% 50%"}}  className="w-[100px]" src={image} alt="" />
            <div className="space-y-1">
                <h2 className=" uppercase">{name}--------------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">{price}</p>
        </div>
    );
};

export default MenuItem;