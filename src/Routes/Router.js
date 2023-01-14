import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Errorpage from "../Components/Erropage/Errorpage";
import Home from "../Components/Home/Home";
import ServiceDescription from "../Components/Home/ServiceDescription";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Addservice from "../Components/Services/Addservice";
import AllServices from "../Components/Services/AllServices";

import Main from "../Layout/Main";




const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
   
        children:[
            {
                path:'/',
                loader:()=> fetch(`http://localhost:5000/services?limit=${3}`),
                element:<Home/>,
               
            },

            {
                path:'/showallservice',
                element:<AllServices></AllServices>
            },
            {
                path:'/service/description/:id',
                element:<ServiceDescription></ServiceDescription>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            //  {   path:'/addservice',
            //     element:<Addservice></Addservice>
            // },
            {
                path:'/register',
                element:<Register/>
            } 
            ,
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'*',
                element:<Errorpage></Errorpage>
            }
        ]
    }
]);

export default router;