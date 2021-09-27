// Components
import Users from "pages/Users";
import Resources from "pages/Resources";
import Courses from "pages/Courses";

// Icons
import Document from "examples/Icons/Document";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Cube from "examples/Icons/Cube";

const routes = [
  {
    type: "collapse",
    name: "Users",
    key: "users",
    route: "/users",
    icon: <CustomerSupport size="12px" />,
    component: Users,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Resources",
    key: "resources",
    route: "/resources",
    icon: <Cube size="12px" />,
    component: Resources,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Courses",
    key: "courses",
    route: "/courses",
    icon: <Document size="12px" />,
    component: Courses,
    noCollapse: true,
  },
];

export default routes;
