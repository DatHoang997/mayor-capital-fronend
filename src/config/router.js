
import NotFound from '@/module/page/error/notfound'
import home from '@/module/page/home/index'

export default [
  // {
  //   path: '/category',
  //   page: Category,
  //   auth: true
  // },
  {
    path: '/404',
    page: NotFound
  },
  {
    path: '/',
    page: home,
  },
  {
    page: NotFound
  }
]
