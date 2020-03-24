// HOME PAGE
import HomePage from '../pages/home.vue';

// SLIDES AND Authorization PAGE
import UserAuthorizationPage from '../pages/authorization/'
import UserAuthorizationLoginPage from '../pages/authorization/login/'

// MAIN TAB PAGES
import DiscoverPage from '../pages/discover/'

// SEARCH PAGE
import SearchPage from '../pages/search/'

// CATEGORY PAGE
import CategoryPage from '../pages/category/'

// USER PAGE
import UserPage from '../pages/user/'

// CHAT PAGE
import ChatsPage from '../pages/chats/'

// SETTINGS PAGE
import SettingsPage from '../pages/settings/'
import FinancePage from '../pages/settings/finance/'
import PricePage from '../pages/settings/price/'

// NOT FOUND PAGE
import NotFoundPage from '../pages/404.vue';

var routes = [
  {path: '/', component: HomePage, master: true},
  {path: '/authorization', component: UserAuthorizationPage},
  {path: '/login', popup: { component: UserAuthorizationLoginPage}},
  {path: '/discover', component: DiscoverPage, keepAlive: true},
  {path: '/search', component: SearchPage},
  {path: '/category:name', component: CategoryPage},
  {path: '/user:domain', component: UserPage},
  {path: '/chats', component: ChatsPage, keepAlive: true},
  {path: '/settings', component: SettingsPage},
  {path: "/finance", component: FinancePage},
  {path: "/price", component: PricePage},
  {path: '(.*)', component: NotFoundPage},
];

export default routes;
