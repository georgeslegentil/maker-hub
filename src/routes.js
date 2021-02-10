import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
//import DashboardPage from "./components/Dashboard.js"
import UserProfile from "./components/UserProfile.js"

const sidebarRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: Dashboard,
        //component: DashboardPage,
        layout: "/admin"
    },
    {
        path: "/user",
        name: "User Profile",
        icon: Person,
        component: UserProfile,
        layout: "/admin"
    }
]

export default sidebarRoutes;