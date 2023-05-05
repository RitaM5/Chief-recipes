import React from 'react';
import Marquee from "react-fast-marquee";
const About = () => {
    return (
        <div className='my-container'>
            <h1 className='text-red-600 text-3xl font-semibold text-center'>Our Chef Recommend</h1>
            <Marquee>
                <p className='text-center font-semibold text-lg my-4'>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation.</p>
            </Marquee>
            <div className="my-12 grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2 gap-5 py-4 px-6 bg-lime-200 rounded-box" data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">
                <div className="carousel-item card w-full" data-aos="fade-up"
                    data-aos-duration="3000">
                    <figure>
                        <img src="https://i.ibb.co/qBdgghD/Tacos-al-Pastor.jpg" className=" rounded-box" /><br />
                    </figure>
                    <p className='text-center text-green-800 font-bold text-lg my-2'>Tacos al Pastor</p>
                    <p className='text-center font-semibold text-sm'>Taste the Best that Surprise you</p>
                </div>
                <div className="carousel-item card w-full" data-aos="fade-up"
                    data-aos-duration="3000">
                    <figure>
                        <img src="https://i.ibb.co/2ktBhKw/Chiles-Rellenos.jpg" className="rounded-box" />
                    </figure>
                    <p className='text-center text-green-800 font-bold text-lg my-2'>Chiles Rellenos</p>
                    <p className='text-center font-semibold text-sm'>Food with a New Passion</p>
                </div>
                <div className="carousel-item card w-full" data-aos="fade-up"
                    data-aos-duration="3000">
                    <figure>
                        <img src="https://i.ibb.co/wpzKtNF/mojarella.jpg" className="rounded-box" />
                    </figure>
                    <p className='text-center text-green-800 font-bold text-lg my-2'>Guacamole</p>
                    <p className='text-center font-semibold text-sm'>Baked fruit & spiced vanilla</p>
                </div>
                <div className="carousel-item card w-full" data-aos="fade-up"
                    data-aos-duration="3000">
                    <figure>
                        <img src="https://i.ibb.co/LvRKnT6/Spaghetti-Carbonara.jpg" className="rounded-box" />
                    </figure>
                    <p className='text-center text-green-800 font-bold text-lg my-2'>Spaghetti Carbonara</p>
                    <p className='text-center font-semibold text-sm'> easiest & testy pasta dish</p>
                </div>
                <div className="carousel-item card w-full" data-aos="fade-up"
                    data-aos-duration="3000">
                    <figure>
                        <img src="https://i.ibb.co/NybgS7X/pizza.jpg" className="rounded-box" />
                    </figure>
                    <p className='text-center text-green-800 font-bold text-lg my-2'>Margherita Pizza</p>
                    <p className='text-center font-semibold text-sm'>Excellence taste in Every Bite</p>
                </div>
                <div className="carousel-item card w-full" data-aos="fade-up"
                    data-aos-duration="3000">
                    <figure>
                        <img src="https://i.ibb.co/KNw4CS7/Sushi-Rolls.jpg" className="rounded-box" />
                    </figure>
                    <p className='text-center text-green-800 font-bold text-lg my-2'>Sushi Rolls</p>
                    <p className='text-center font-semibold text-sm'>staple rice dish of Korean cuisine</p>
                </div>
            </div>
        </div>
    );
};

export default About;