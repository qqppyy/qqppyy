const Home = () => import(/* webpackChunkName: "group-foo" */ 'views/home')
const User = () => import(/* webpackChunkName: "group-foo" */ 'views/user')
const Shop = () => import(/* webpackChunkName: "group-foo" */ 'views/shop')
const Food = () => import(/* webpackChunkName: "group-foo" */ 'views/food')
const ShopAdd = () => import(/* webpackChunkName: "group-foo" */ 'views/shop_add')
const FoodAdd = () => import(/* webpackChunkName: "group-foo" */ 'views/food_add')
const Set = () => import(/* webpackChunkName: "group-foo" */ 'views/set')
const Explain = () => import(/* webpackChunkName: "group-foo" */ 'views/explain')
const Login = () => import(/* webpackChunkName: "group-foo" */ 'views/login')
const Register = () => import(/* webpackChunkName: "group-foo" */ 'views/register')
const Chart = () => import(/* webpackChunkName: "group-foo" */ 'views/chart')
const Edit = () => import(/* webpackChunkName: "group-foo" */ 'views/edit')
const Error = () => import(/* webpackChunkName: "group-foo" */ 'views/error')
const Modify = () => import(/* webpackChunkName: "group-foo" */ 'views/shop_modify')

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      name: '数据统计',
      id:'首页'
    }
  },
  {
    path: '/user',
    component: User,
    meta: {
      name: '用户列表',
      id:'数据管理'
    } 
  },
  {
    path: '/shop',
    component: Shop,
    meta: {
      name: '商家列表',
      id:'数据管理'
    } 
  },
  {
    path: '/food',
    component: Food,
    meta: {
      name: '食品列表',
      id:'数据管理'
    } 
  },
  {
    path: '/shop_add',
    component: ShopAdd,
    meta: {
      name: '店铺添加',
      id:'添加数据'
    } 
  },
  {
    path: '/shop_modify',
    component: Modify,
    meta: {
      name: '店铺修改',
      id:'修改数据'
    } 
  },
  {
    path: '/food_add',
    component: FoodAdd,
    meta: {
      name: '食品添加',
      id:'添加数据'
    } 
  },
  {
    path: '/chart',
    component: Chart,
    meta: {
      name: '图表',
      id:''
    } 
  },
  {
    path: '/edit',
    component: Edit,
    meta: {
      name: '富文本编辑',
      id:''
    } 
  },
  {
    path: '/set',
    component: Set,
    meta: {
      name: '用户设置',
      id:''
    } 
  },
  {
    path: '/explain',
    component: Explain,
    meta: {
      name: '用户说明',
      id:''
    } 
  },
  {
    path: '/login',
    component: Login,
    meta: {
      name: 'Login'
    } 
  },
  {
    path: '/register',
    component: Register,
    meta: {
      name: 'Register'
    } 
  },
  {
    path: '*',
    component: Error,
    meta: {
      name: 'Error'
    }
  }
]