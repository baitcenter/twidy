// HOME PAGE
import HomePage from '../pages/home.vue';

// SLIDES AND Authorization PAGE
import UserAuthorizationPage from '../pages/authorization/'
import UserAuthorizationLoginPage from '../pages/authorization/login/'

// MAIN TAB PAGES
import DiscoverPage from '../pages/discover/'

// SEARCH PAGE
import SearchPage from '../pages/search/'

// USER PAGE
import UserPage from '../pages/user/'

// CHAT PAGE
import ChatsPage from '../pages/chats/'

// SETTINGS PAGE
import SettingsPage from '../pages/settings/'

// NOT FOUND PAGE
import NotFoundPage from '../pages/404.vue';

var routes = [
  {path: '/', component: HomePage, master: true},
  {path: '/authorization', component: UserAuthorizationPage},
  {path: '/login', popup: { component: UserAuthorizationLoginPage}},
  {path: '/discover', component: DiscoverPage, keepAlive: true},
  {path: '/search', component: SearchPage},
  {path: '/user:domain', component: UserPage},
  {path: '/chats', component: ChatsPage, keepAlive: true},
  {path: '/settings', component: SettingsPage},
  {path: '(.*)', component: NotFoundPage},
];

export default routes;
