import React from "react";
import Marquee from "react-fast-marquee";
const HomeBanner = () => {
    return (
        <div>
            <div className="carousel w-full h-96 ">
                <div id="slide1" className="py-6 carousel-item w-full relative" style={{ backgroundImage: "url('https://i.ibb.co/LvRKnT6/Spaghetti-Carbonara.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className=' mx-auto'>
                        <div className='text-center mt-28  space-y-3'>
                            <Marquee speed={300}>
                                <p className='text-[#1A1919] font-semibold text-2xl space-y-4'>
                                    <span className=' text-red-600 text-5xl font-semibold'>Welcome </span>
                                    <span className='text-white font-semibold text-3xl'>To Our Korean Food Vally</span>
                                </p>
                            </Marquee>
                            <p className='text-green-400 font-semibold' style={{ fontSize: "20px" }}>
                                Your favorite Korean foods are available for pick up and delivery!
                            </p>
                            <button className='bg-green-500 rounded-md text-white text-sm py-2 px-3 font-semibold'>Get Started</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full" style={{ backgroundImage: "url('https://i.ibb.co/vHfk6Yk/bg-2.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className=' mx-auto'>
                        <div className='text-center mt-28 space-y-3'>
                            <Marquee speed={300}>
                                <p className='text-[#1A1919] font-semibold text-2xl space-y-4'>
                                    <span className=' text-red-600 text-5xl font-semibold'>Welcome </span>
                                    <span className='text-white font-semibold text-3xl'>To Our Korean Food Vally</span>
                                </p>
                            </Marquee>
                            <p className='text-green-600' style={{ fontSize: "17px" }}>
                                Your favorite Korean foods are available for pick up and delivery!
                            </p>
                            <button className='bg-green-500 rounded-md text-white text-sm py-2 px-3 font-semibold'>Get Started</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full" style={{ backgroundImage: "url('https://i.ibb.co/4tDZydC/bg-1.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className=' mx-auto'>
                        <div className='text-center mt-28 space-y-3'>
                            <Marquee speed={300}>
                                <p className='text-[#1A1919] font-semibold text-2xl space-y-4'>
                                    <span className=' text-red-600 text-5xl font-semibold'>Welcome </span>
                                    <span className='text-white font-semibold text-3xl'>To Our Korean Food Vally</span>
                                </p>
                            </Marquee>
                            <p className='text-green-300' style={{ fontSize: "17px" }}>
                                Your favorite Korean foods are available for pick up and delivery!
                            </p>
                            <button className='bg-green-600 rounded-md text-white text-sm py-2 px-3 font-semibold'>Get Started</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
