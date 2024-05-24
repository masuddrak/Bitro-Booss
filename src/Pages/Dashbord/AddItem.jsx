import { useForm } from "react-hook-form";
import SectionTitel from "../../componets/SectionTitel";
import { LiaUtensilsSolid } from "react-icons/lia";
import { uploadImage } from "../../utils/Api";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AddItem = () => {
    const { register, handleSubmit ,reset} = useForm();
    const AxiosSecure = useAxiosSecure()
    const onSubmit = async data => {
        try {
            const image = await uploadImage(data?.recipe_image[0])
            const upaloadItem = {
                name: data.name,
                category: data?.category,
                price: data?.price,
                image,
                recipe: data?.recipe_details
            }
            const  res = await AxiosSecure.post("/add_menu", upaloadItem)
            if(res.data.acknowledged){
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  
            }
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <section >
            <SectionTitel heading={"ADD AN ITEM"} subHeading={"---What's new?---"}></SectionTitel>
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 bg-[#f3f3f3] p-10">
                <div>
                    <label htmlFor="">Recipe name*</label>
                    <input type="text" {...register("name", { require: true })} placeholder="Name" className="p-2 rounded outline-0 w-full " />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="">Slect Category*</label>
                        <select {...register("category", { required: true })} placeholder="Select Category" className="p-2 rounded outline-0 w-full">
                            <option value="salad">salad</option>
                            <option value="drinks">drinks</option>
                            <option value="popular">popular</option>
                            <option value="dessert">dessert</option>
                            <option value="pizza">pizza</option>
                            <option value="offered">offered</option>
                            <option value="Soup">Soup</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Recipe name*</label>
                        <input type="number" {...register("price", { require: true })} placeholder="Price" className="p-2 rounded outline-0 w-full" />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Recipe Details*</label>
                    <textarea type="text" {...register("recipe_details", { require: true })} rows={5} placeholder="Recipe Details" className="p-2 rounded outline-0 w-full " />
                </div>
                <div>
                    <input type="file" {...register("recipe_image", { require: true })} />
                </div>
                <div>
                    <button className="btn bg-gradient-to-r from-yellow-900 to-yellow-500 text-white mt-3 text-xl">Add Item <LiaUtensilsSolid></LiaUtensilsSolid></button>
                </div>
            </form>
        </section>
    );
};

export default AddItem;