import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Errorpage from "../Components/Erropage/Errorpage";
import Home from "../Components/Home/Home";
import ServiceDescription from "../Components/Home/ServiceDescription";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Addservice from "../Components/Services/Addservice";
import AllServices from "../Components/Services/AllServices";
import EditReview from "../Components/Services/EditReview";
import Myreview from "../Components/Services/Myreview";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader:()=> fetch(`https://b6a11-service-review-server-side-malitharuna.vercel.app/services?limit=${3}`),
                element:<Home/>,
               
            },
            {
                path:'/addservice',
                element: <PrivateRoute><Addservice></Addservice></PrivateRoute>
            },
            {
                path:'/showallservice',
                element:<AllServices></AllServices>
            },
            {
                path:'/service/description/:id',
                element:<ServiceDescription></ServiceDescription>,
                loader: ({params})=> fetch(`https://b6a11-service-review-server-side-malitharuna.vercel.app/services/${params.id}`)
            },
            {
                path:'/myreview',
                element: <Myreview></Myreview>
            },
            {
                path:'/edit/review/:id',
                loader:({params})=> fetch(`https://b6a11-service-review-server-side-malitharuna.vercel.app/edit/feedback/${params.id}`),
                element:<EditReview></EditReview>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
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