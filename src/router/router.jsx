import { createBrowserRouter } from "react-router-dom";
import CreateEdit from "../page/CreateEditForm";
import Home from "../page/Home";
import Layout from "../page/Layout";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/addJob",
                element:<CreateEdit/>
            },
            {
                path:"/edit/:id",
                element:<CreateEdit/>
            },
        ]

    }
])

export default router;