import Guide from '../components/giude';
import bugfill from '../pages/bugfillPage';
import bugshow from '../pages/bugshowPage';
// Vue.use(Router);

export  default [
  {
    path:'/Giude',
    name:'Giude',
    component:Guide,
    children: [
      {
        path:'/bugfill',
        name:'bugfill',
        component:bugfill,
      },
      {
        path:'/bugshow',
        name:'bugshow',
        component:bugshow,
      },
    ]
  }
];
