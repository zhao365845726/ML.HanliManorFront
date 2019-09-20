import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Description from '@/components/description'
import BrandStory from '@/components/brandStory'
import Verification from '@/components/verification'
import Product from '@/components/product'
import Store from '@/components/store'
import Rule from '@/components/rule'
import Technology from '@/components/technology'
import Notice from '@/components/notice'
import Media from '@/components/media'
import MediaDetail from '@/components/mediaDetail'
import Video from '@/components/video'
import Supplier from '@/components/supplier'
import Contact from '@/components/contact'
import Sreach from '@/components/sreach'
import Product_chanpin from '@/components/product_chanpin'
import lunbo from '@/components/lunbo'


Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true //不缓存
      }
    },
    {
      path: '/description',
      name: 'description',
      component: Description,
      meta: {
        keepAlive: false //不缓存
      }
    },
    {
      path: '/brandStory',
      name: 'brandStory',
      component: BrandStory,
      meta: {
        keepAlive: true //缓存
      }
    },
    {
      path: '/verification',
      name: 'verification',
      component: Verification
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      meta: {
        keepAlive: false //缓存
      }
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/rule',
      name: 'rule',
      component: Rule
    },
    {
      path: '/technology',
      name: 'technology',
      component: Technology
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice,
      children: [
        {
          path: ':Id',
          component: MediaDetail
        }
      ]
    },
    {
      path: '/media',
      name: 'media',
      component: Media,
      children: [
        {
          path: ':Id',
          component: MediaDetail
        }
      ]
    },
    {
      path: '/mediaDetail',
      name: 'mediaDetail',
      component: MediaDetail
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/supplier',
      name: 'supplier',
      component: Supplier
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/sreach',
      name: 'sreach',
      component: Sreach
    },
    {
      path: '/product_chanpin',
      name: '/product_chanpin',
      component: Product_chanpin,
      meta: {
        isUseCache: false,
        keepAlive: false ,
      },
      //activated() {
      //  // isUseCache为false时才重新刷新获取数据
      //  // 因为对list使用keep-alive来缓存组件，所以默认是会使用缓存数据的         
      //  if (!this.$route.meta.isUseCache) {
      //    this.product_chanpin = []; // 清空原有数据
      //    this.fnSwiper();
      //    this.ajax(); // 这是我们获取数据的函数
      //  } else {
      //    this.$route.meta.isUseCache = false;
      //  }
      //},
    },
    {
      path: '/lunbo',
      name: '/lunbo',
      component: lunbo,
      meta: {
        keepAlive: true //缓存
      }
    },
  ],
  //scrollBehavior(to, from, savedPosition) {
  //  return { x: 0, y: 0 }
  //}
})
