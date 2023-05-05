import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
const RecipeDetails = ({ detail }) => {
    //console.log(detail);
    const [select, setSelected] = useState(false);
    const { id, name, image, ingredients, cooking_method, rating } = detail;
    const addTOFavorite = () => {
        toast("Your favourite recipe succesfully added your favorite list 🥧🥂");
        setSelected(true);
    }
    return (
        <div className="card card-side bg-base-100 w-full shadow-xl grid lg:grid-cols-12 sm:grid-cols-1">
            <div className='lg:col-span-3 flex justify-center items-center   lg:origin-center lg:rotate-45  mx-auto'>
                <figure><img src={image} alt="" className='rounded-lg w-full' /></figure>
            </div>
            <div className="card-body lg:col-span-9">
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-8'>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <Rating className=' text-orange-300'
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar ></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        ></Rating>
                        <p><span className='font-semibold' style={{ fontSize: "14px" }}>Cooking methods:  </span><small className='text-justify'>{cooking_method}</small></p>
                    </div>
                    <ul className='w-full lg:ms-16 md:ms-12'>
                        <li className='font-semibold'>Ingredients:</li>
                        {
                            ingredients.map((data, index) => <li key={index} style={{ fontSize: "13px" }} className=''>{data}</li>
                            )
                        }
                    </ul>
                </div>
                <div className="card-actions justify-end">
                    {
                        select ? <button disabled className="btn btn-primary lowercase" onClick={addTOFavorite}>Add to Favorite</button> :
                            <button className="btn btn-primary lowercase" onClick={addTOFavorite}>Add to Favorite</button>
                    }
                    <Toaster />
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
