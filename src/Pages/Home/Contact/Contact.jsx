import React from 'react';

const Contact = () => {
    return (
        <div className='' style={{ backgroundImage: "url('https://i.ibb.co/pJKCMqq/contact.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className='my-container'>
                <p className='text-center my-3 text-4xl font-bold'>Contact</p>
                <div className='grid gap-4 mt-5 py-4 px-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                    <div>
                        <p className='text-3xl font-semibold'>Adress</p>
                        <p className='text-green-800 font-bold mt-3'>732/21 Second Street, Manchester</p>
                        <p className='text-green-800 font-bold mt-1'>South Korea</p>
                        <p className='text-green-800 font-bold mt-3'>T: +65 (0) 76-890-214</p>
                        <p className='text-green-800 font-bold mt-1'>E: bookings@voodvally.co.su</p>
                    </div>
                    <div>
                        <p className='text-3xl font-semibold'>Follow Us</p>
                        <p className='text-green-800 font-bold mt-3'>Facebook</p>
                        <p className='text-green-800 font-bold mt-1'>Instagram</p>
                        <p className='text-green-800 font-bold mt-1'>TripAdvisor</p>
                    </div>
                    <div>
                        <p className='text-3xl font-semibold'>Opening Hours</p>
                        <div className='grid gap-5 mb-6 grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                            <div>
                                <p className='text-white text-2xl font-bold mt-3'>Lunch Time</p>
                                <p className='text-green-800 font-bold mt-3'>Monday to Sunday</p>
                                <p className='text-green-800 font-bold mt-1'>10.30am - 3:00pm</p>
                            </div>
                            <div>
                                <p className='text-white text-2xl font-bold mt-3'>Dinner Time</p>
                                <p className='text-green-800 font-bold mt-3'>Monday to Sunday</p>
                                <p className='text-green-800 font-bold mt-1'>5.30pm - 11:00pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;