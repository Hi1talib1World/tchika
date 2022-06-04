import home from '@/components/Home'
import dashboard from '@/components/Dashboard'
import blogs from '@/components/News'
import showblog from '@/components/Media'
import aboutus from '@/components/AboutUs'
import contact from '@/components/Contact'

export default [
  {
    path: '/',
    component: home
  },
  {
    path: '/dashboard/:menu',
    component: dashboard
  },
  {
    path: '/blogs',
    component: blogs
  },
  {
    path: '/blog/:id/:users',
    component: showblog
  },
  {
    path: '/aboutus',
    component: aboutus
  },
  {
    path: '/team',
    component: team
  },
  {
    path: '/contact',
    component: contact
  }
];