// HOME PAGE
import HomePage from '../pages/home.vue';

// SLIDES AND Authorization PAGE
import UserAuthorizationPage from '../pages/authorization/'
import UserAuthorizationLoginPage from '../pages/authorization/login/'

// MAIN TAB PAGES
import DiscoverPage from '../pages/discover/'

// USER PAGE
import UserPage from '../pages/user/'

// NOT FOUND PAGE
import NotFoundPage from '../pages/404.vue';

var routes = [
  {path: '/', component: HomePage, master: true},
  {path: '/authorization', component: UserAuthorizationPage},
  {path: '/login', popup: { component: UserAuthorizationLoginPage}},
  {path: '/discover', component: DiscoverPage, keepAlive: true},
  {path: '/:uid', component: UserPage},
  {path: '(.*)',mcomponent: NotFoundPage},
];

export default routes;
