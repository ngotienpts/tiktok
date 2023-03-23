import { HeaderOnly } from '~/layouts';
import { routes as routeConfig } from '~/config/routes';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// publicRoute
const publicRoute = [
    {
        path: routeConfig.home,
        component: Home,
    },
    {
        path: routeConfig.following,
        component: Following,
    },
    {
        path: routeConfig.profile,
        component: Profile,
    },
    {
        path: routeConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routeConfig.search,
        component: Search,
        layout: null,
    },
];

const privateRoute = [];

export { publicRoute, privateRoute };
