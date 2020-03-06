export default [
  {
    path: '/bug',
    name: 'bug',
    redirect: {
      name: 'bugfill'
    },
    component: resolve => require(['../app'], resolve),
    children: [
      {
        path: 'bugfillPage',
        name: 'bugfill',
        component: resolve => require(['../pages/bugfillPage'], resolve)
      },
      {
        path: 'budgetfinishPage',
        name: 'budgetfinish',
        component: resolve => require(['../pages/budgetfinish'], resolve)
      }
    ]
  }
];
