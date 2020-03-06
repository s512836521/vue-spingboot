export default [
  {
    path: '/demo2',
    name: 'demo2',
    redirect: {
      name: 'demo_page2_1'
    },
    component: resolve => require(['../app'], resolve),
    children: [
      {
        path: 'demoPage2_1',
        name: 'demo_page2_1',
        component: resolve => require(['../pages/demoPage2_1'], resolve)
      },
      {
        path: 'demoPage2_2',
        name: 'demo_page2_2',
        component: resolve => require(['../pages/demoPage2_2'], resolve)
      }
    ]
  }
];
