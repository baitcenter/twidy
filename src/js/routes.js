
import HomePage from '../pages/home.vue';
import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';

import UserAuthorizationLoginPage from '../pages/authorization/login/'
import UserAuthorizationPage from '../components/widgets/login-widget/'


import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';

var routes = [
  {path: '/', component: HomePage},
  {path: '/authorization', component: UserAuthorizationPage},
  {path: '/login', component: UserAuthorizationLoginPage},
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },


  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
