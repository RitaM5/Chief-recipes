import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, picture, name, years_of_experience, num_recipes, likes } = chef;
    return (
        <div className="card w-full bg-blue-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="" className="rounded-full" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p>{years_of_experience} years experience</p>
                <p>{num_recipes} recipes</p>
                <p>{likes} likes***</p>
                <div className="card-actions mt-3">
                    <Link to={`/chef/${id}`}><button className="btn btn-primary lowercase ">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;