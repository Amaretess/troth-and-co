import Home from "../pages/Home"
import Medicare from "../pages/Medicare"
import Group from "../pages/Group"
import FAQ from "../pages/FAQ"
import Testimonials from "../pages/Testimonials"
import Blog from "../pages/Blog"
import ContactUs from "../pages/ContactUs"


export const routesConfig = [
    {
        id: 1,
        path: "/",
        element: <Home />
    },
    {
        id: 2,
        path: "/medicare",
        element: <Medicare />
    },
    {
        id: 3,
        path: "/group",
        element: <Group />
    },
    {
        id: 4,
        path: "/faq",
        element: <FAQ />
    },
    {
        id: 5,
        path: "/testimonials",
        element: <Testimonials />
    },
    {
        id: 6,
        path: "/blog",
        element: <Blog />
    },
    {
        id: 7,
        path: "/contact-us",
        element: <ContactUs />
    }
]