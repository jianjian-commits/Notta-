import { lazy } from "react";
import { Redirect } from "react-router-dom";

const routerArr = [
    {
        path: "/",
        exact: true,
        render: (() => <Redirect to="/test"></Redirect>)
    },
    {
        path: "/test",
        component: lazy(() => import("../pages/list"))
    }
]
export default routerArr;