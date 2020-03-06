export default [
  {
    path: '/demo',
    name: 'demo',
    redirect: {
      name: 'demo_page1'
    },
    component: resolve => require(['../app'], resolve),
    children: [
      {
        path: 'demoPage1',
        name: 'demo_page1',
        component: resolve => require(['../pages/demoPage1'], resolve)
      },
      {
        path: 'demoPage2',
        name: 'demo_page2',
        component: resolve => require(['../pages/demoPage2'], resolve)
      }
    ]
  }
];
