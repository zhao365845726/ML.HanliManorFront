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
      component: Home
    },
    {
      path: '/description',
      name: 'description',
      component: Description
    },
    {
      path: '/brandStory',
      name: 'brandStory',
      component: BrandStory
    },
    {
      path: '/verification',
      name: 'verification',
      component: Verification
    },
    {
      path: '/product',
      name: 'product',
      component: Product
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
      component: Product_chanpin
    }
  ]
})
