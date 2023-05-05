import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const ChefCard = ({ chef }) => {
    const { id, picture, name, years_of_experience, num_recipes, likes, rating, recipes } = chef;
    return (
       
            <div className="card w-full bg-blue-100 shadow-xl" data-aos="fade-up"
            data-aos-duration="1000">
                <div className="px-10 pt-10 mx-auto">
                    <LazyLoadImage
                        className="rounded-full"
                        alt={picture}
                        effect="blur"
                        src={picture}
                    />
                </div>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p>{years_of_experience} years experience</p>
                    <p>{num_recipes} recipes</p>
                    <p>{likes} likes***</p>
                    <Rating className='text-orange-300'
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar ></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <div className="card-actions mt-3">
                        <Link to={`/chef/${id}`}><button className="btn btn-primary lowercase ">View Recipes</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default ChefCard;