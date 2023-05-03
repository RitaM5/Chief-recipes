import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';



const Chef = () => {
    const recipeDetails = useLoaderData();
    // console.log(recipeDetails);
    const { id, banner_img, name, years_of_experience, num_recipes, likes, description, recipes } = recipeDetails;
    return (
        <div>
            <div className='my-container'>
                <h1 className='text-3xl text-red-600 font-semibold text-center'>Specail Dishes</h1>
                <div className='grid grid-cols-1 gap-6 my-8'>
                    {
                        recipes.map(detail => <RecipeDetails
                            key={detail.id}
                            detail={detail}
                        ></RecipeDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Chef;