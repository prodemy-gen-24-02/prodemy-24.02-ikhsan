import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import { mutate } from "swr";

const AddProduct = () => {
    const schema = yup.object().shape({
        brand: yup.string().required("*brand name is required"),
        name: yup.string().required("*product name is required"),
        price: yup.number().typeError("*price is required and must be a number"),
    });

    const {register, handleSubmit, control, reset, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const { fields:fields1 , append:append1, remove:remove1 } = useFieldArray({
        control,
        name: "size"
    });
    
    const { fields:fields2 , append:append2, remove:remove2 } = useFieldArray({
        control,
        name: "image"
    });



    const onSubmitForm = (data) =>{
        const formData = new FormData();
        formData.append("file", data.image[0]);
        formData.append("upload_preset", "cobacoba");

        axios.post("https://api.cloudinary.com/v1_1/dkx4nocjh/image/upload", formData).then(resp => {
            const payload = {
                brand:data.brand,
                name:data.name,
                price:data.price,
                size:data.size,
                image:resp.data.secure_url
            };

            // const payload = {
            //     brand:data.brand,
            //     name:data.name,
            //     price:data.price,
            //     size:data.size,
            // }

            axios.post("http://localhost:3000/products", payload).then(() => {
                reset();
                mutate();
            }) .catch (err => {
                console.log(err)
            })
        })
        console.log(data.image[0]);
    };

    return (
        <div className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50">
            <div className="flex justify-center">
                <form 
                    onSubmit={
                        // () => {
                            handleSubmit(onSubmitForm)
                            // .then(() => {reset()})}
                        } 
                    className="flex flex-col items-center justify-center gap-2 w-96 h-auto py-10 rounded-xl border bg-neutral-50 ">
                    <div className="flex">
                        <h2 className="font-bold text-xl pb-5">Add Product</h2>
                        <Link to="/admin" className="">
                            <svg className="" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="40px" height="40px" viewBox="0 0 256 256" id="Flat">
                                <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="brand" className="input input-bordered flex items-center ">
                        <input 
                            placeholder="Brand Name"
                            className="grow"
                            {...register("brand")}
                            id="brand" />
                        </label>
                        <p className="self-start error text-sm text-rose-500 py-0.5">{errors.brand?.message}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="brand" className="input input-bordered flex items-center ">
                        <input 
                            placeholder="Product Name"
                            className="grow"
                            {...register("name")}
                            id="brand" />
                        </label>
                        <p className="self-start error text-sm text-rose-500 py-0.5">{errors.name?.message}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="brand" className="input input-bordered flex items-center ">
                        <input 
                            placeholder="Price"
                            className="grow"
                            {...register("price", {
                                valueAsNumber: true,
                            })}
                            id="brand" />
                        </label>
                        <p className="self-start error text-sm text-rose-500 py-0.5">{errors.price?.message}</p>
                    </div>
                    {/* size */}
                    <div className="flex flex-col justify-center">
                        {fields1.map((field, index) => (
                        <div key={field.id} className="flex justify-center">
                            <input
                            {...register(`size.${index}`,
                            {valueAsNumber: true})}
                            className="w-1/3 p-2 border mr-2"
                            placeholder="etc:41"
                            />
                            <button
                            type="button"
                            onClick={() => remove1(index)}
                            className="btn rounded-md hover:bg-rose-500 hover:text-rose-50 transition-colors duration-200 active:translate-y-1"
                            >
                            X
                            </button>
                            {errors.size?.[index] && (
                            <span className="text-rose-500">
                                {errors.size[index]?.message}
                            </span>
                            )}
                        </div>
                        ))}
                        <div className="mt-2">
                        <button
                            type="button"
                            onClick={() => append1(" ")}
                            className="btn rounded-md bg-sky-950 text-sky-50 hover:bg-sky-600 transition-colors duration-200 active:translate-y-1"
                        >
                            Add Size
                        </button>
                        </div>
                    </div>

                    {/* image */}
                    <div>
                        {fields2.map((field, index) => (
                        <div key={field.id} className="flex justify-center w-auto">
                            <input
                            {...register(`image.${index}`)}
                            className="w-1/3 p-2 border mr-2"
                            placeholder="etc:41"
                            type="file"
                            />
                            <button
                            type="button"
                            onClick={() => remove2(index)}
                            className="btn rounded-md hover:bg-rose-500 hover:text-rose-50 transition-colors duration-200 active:translate-y-1"
                            >
                            X
                            </button>
                            {errors.image?.[index] && (
                            <span className="text-rose-500">
                                {errors.image[index]?.message}
                            </span>
                            )}
                        </div>
                        ))}
                        <div className="mt-2">
                        <button
                            type="button"
                            onClick={() => append2(" ")}
                            className="btn rounded-md bg-sky-950 text-sky-50 hover:bg-sky-600 transition-colors duration-200 active:translate-y-1"
                        >
                            Add Image
                        </button>
                        </div>
                    </div>
                    <div>
                        <button className="text-lg text-sky-50 btn btn-active btn-primary" type="submit"> Submit </button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
export default AddProduct;