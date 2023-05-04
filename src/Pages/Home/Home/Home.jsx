import React, { useEffect } from 'react';
import { useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import HomeBanner from '../../Shared/HomeBanner/HomeBanner';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('https://chef-recipe-server-rita5cmt1b108514-gmailcom.vercel.app/recipe')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.error(error))
    }, []);
    return (
        <>
            <HomeBanner></HomeBanner>
            <div className='my-container my-6'>
                <h2 className='text-center text-red-600 text-3xl font-semibold'>Meet Our Chef</h2>
                <div className=' my-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1'>
                    {
                        recipes.map(chef => <ChefCard
                            key={chef.id}
                            chef={chef}
                        ></ChefCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;