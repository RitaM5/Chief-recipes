import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const ChefBanner = ({ recipeDetails }) => {
    const { banner_img, name, years_of_experience, num_recipes, likes, description, rating } = recipeDetails;
    return (
        <div className='bg-gray-800'>
            <div className=' my-container h-full'>
                <div className='lg:flex lg:justify-around lg:items-center lg:gap-28 md:col-auto sm:col-auto ms-14'>
                    <div className='w-full'>
                        <LazyLoadImage
                            className="object-cover banner-img mt-6 w-80 "
                            alt={banner_img}
                            effect="blur"
                            src={banner_img}
                        />
                    </div>
                    <div className='space-y-3 lg:mt-20 mt-8 lg:mr-28'>
                        <p className='text-[#1A1919] font-semibold text-2xl space-y-4'>
                            <span className='text-3xl text-white'>This is</span>
                            <span className='text-rose-600 font-semibold text-4xl'> {name}</span>
                        </p>
                        <p className='text-semibold text-white'>{description}</p>
                        <ul className='text-white'>
                            <li><span className='font-semibold'>Number of Recipes:</span> {num_recipes}*</li>
                            <li className='font-semibold'>{likes}<small>Likes</small></li>
                            <li><span className='font-semibold'>Experience:</span>   {years_of_experience}<small>years</small></li>
                        </ul>
                        <Rating className=' text-orange-300'
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar ></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        ></Rating>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChefBanner;