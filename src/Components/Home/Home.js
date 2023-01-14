import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import News from '../News/News';
import Banner from './Banner';
import Services from './Services';



const Home = () => {
    const services = useLoaderData();
    // console.log(foodServices)
    
    return (
        <div>
            <div className='px-5 md:px-20'>
                <Helmet>
                    <title>Malithas Photography - Home </title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                 </Helmet>
                <Banner/>
                <Services Services={services} />
                {/* <Contact/> */}
                <News></News> 

            </div>
        </div>
    );
};

export default Home;