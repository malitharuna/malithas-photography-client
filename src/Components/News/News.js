import React from 'react';
import toast from 'react-hot-toast';

const News = () => {

    const subscribe = (e) => {
        e.preventDefault();
        toast.success('Thank you for subscribing ..')
    }

    return (

        <div className="bg-white dark:bg-gray-800">
            <div className="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
                <h2 className="text-2xl font-semibold font-display text-black dark:text-white sm:text-3xl">
                    Photograpgy Special Service and Tips Coming ....
                </h2>
                <p className="mt-2 max-w-xl text-base text-gray-400">
                    Sign up for our Newsletter and I will email you every time we release a new photography Service.
                </p>

                <div className="sm:flex jusitfy-start mt-6">
                    <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                        <div className=" relative ">
                            <input required type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" />
                        </div>
                        <button onClick={subscribe} className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                            Subscribe
                        </button>
                    </form>
                </div>

                <div className="hidden lg:block absolute inset-y-0 lg:left-2/3 xl:left-1/2 right-0 mb-10">
                    <picture>
                        <source srcSet="https://st2.depositphotos.com/1001941/6213/v/950/depositphotos_62135937-stock-illustration-concept-of-photography-with-cartoon.jpg" type="image/webp" />
                        <source srcSet="https://st2.depositphotos.com/1001941/6213/v/950/depositphotos_62135937-stock-illustration-concept-of-photography-with-cartoon.jpg" />
                        <img className="w-1/2 rounded-full object-cover maw-w-44 mx-auto" src="https://st2.depositphotos.com/1001941/6213/v/950/depositphotos_62135937-stock-illustration-concept-of-photography-with-cartoon.jpg" alt="shopping item" />
                    </picture>
                </div>
            </div>
        </div>

    );
};

export default News;