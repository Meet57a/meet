import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/main-layout';
import Home from '../pages/home';
import Services from '../pages/services';
import Projects from '../pages/projects';

const routes = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/services',
                element: <Services />,
            },
            {
                path: '/projects',
                element: <Projects />,
            }
        ]
    }
]);

export default routes;