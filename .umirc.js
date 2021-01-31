// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // mock: false,
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7002/',
      changeOrigin: true
    }
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: '../pages/home/index',
          title: '首页'
        },
        {
          path: '/order',
          component: '../pages/order/index',
          title: '订单',
          auth: true
        },
        {
          path: '/user',
          component: '../pages/user/index',
          title: '我的',
          auth: true
        },
        {
          path: '/user/edit',
          component: '../pages/user/edit/index',
          title: '设置用户'
        },
        {
          path: '/search',
          component: '../pages/search/index',
          title: '搜索'
        },
        {
          path: '/observer',
          component: '../pages/observer',
          title: 'observer'
        },
        {
          path: '/house',
          component: '../pages/house',
          title: '房屋详情'
        },
        {
          path: '/login',
          component: '../pages/login',
          title: '登录'
        },
        {
          path: '/register',
          component: '../pages/register',
          title: '注册'
        }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: true,
        title: 'client',
        dll: false,

        routes: {
          exclude: [/components\//]
        }
      }
    ]
  ]
}
// import { defineConfig } from 'umi'
// export default defineConfig({
//   nodeModulesTransform: {
//     type: 'none',
//   },
//   routes: [
//     {
//       path: '/',
//       component: '@/layouts/index',
//       routes: [
//         {
//           path: '/',
//           component: './home/index',
//           title: '首页',
//         },
//         {
//           path: '/order',
//           component: './order/index',
//           title: '订单',
//         },
//         {
//           path: '/user',
//           component: './user/index',
//           title: '我的',
//         },
//       ],
//     },
//   ],
// })
// export default {
//   treeShaking: true,
//   routes: [
//     {
//       path: '/',
//       component: '@/layouts/index',
//       routes: [
//         {
//           path: '/',
//           component: './home/index',
//           title: '首页',
//         },
//         {
//           path: '/order',
//           component: './order/index',
//           title: '订单',
//         },
//         {
//           path: '/user',
//           component: './user/index',
//           title: '我的',
//         },
//       ],
//     },
//   ],
//   plugins: [
//     // ref: https://umijs.org/plugin/umi-plugin-react.html
//     [
//       'umi-plugin-react',
//       {
//         antd: true,
//         dva: true,
//         dynamicImport: true, // 这个开启按需加载，默认是只支持按页面来按需的，粒度较粗
//         title: 'umi2',
//         dll: false,
//         routes: {
//           exclude: [/components\//],
//         },
//       },
//     ],
//   ],
// }
