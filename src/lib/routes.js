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
                path: '/meet/',
                element: <Home />,
            },
            {
                path: '/meet/services',
                element: <Services />,
            },
            {
                path: '/meet/projects',
                element: <Projects />,
            }
        ]
    }
]);

export default routes;