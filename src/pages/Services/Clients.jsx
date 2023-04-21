import React from 'react'

function Clients() {
    return (
        <div className='my-8 sm:my-16'>

            <div className="flex items-center justify-between h-full w-full absolute -z-20">
                <div className="w-1/3 bg-white h-full" />
                <div className="w-4/6 ml-16 bg-zinc-100 h-full" />
            </div>

            <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container z-40">

                <div>
                    <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
                        What our customers are
                        <br />
                        saying
                    </h1>

                    <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">What our customers are saying</h1>

                    <div className="flex">

                        <div className="mt-16 sm:mt-32 md:flex">

                            <div className="lg:w-1/2 sm:w-96 xl:h-96 h-80">

                                <img src="https://i.ibb.co/4g1D9cv/imgslider1.png" alt="of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />

                            </div>

                            <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                <div>
                                    <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">Some of the best work that was done!</h1>
                                    <p className="text-base font-medium leading-6 mt-4 text-gray-600">Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                                </div>
                                <div className="md:mt-0 mt-8">
                                    <p className="text-base font-medium leading-4 text-gray-800">Anna Smith</p>
                                    <p className="text-base leading-4 mt-2 mb-4 text-gray-600">Senior Web Designer</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Clients