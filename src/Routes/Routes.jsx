import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/Home/Errorpage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import ViewRecipe from "../Layouts/ViewRecipe";
import Chef from "../Pages/Home/Chef/Chef";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
    {
        path: 'chef',
        element: <ViewRecipe></ViewRecipe>,
        children: [
            {
                path: ':id',
                element: <Chef></Chef>,
                loader: ({params}) => fetch(`https://chef-recipe-server-rita5cmt1b108514-gmailcom.vercel.app/recipe/${params?.id}`)
            },
        ]
    },
])
export default router;