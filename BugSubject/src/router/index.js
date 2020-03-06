import HelloWorld from '@/components/HelloWorld';
// import demoRouter from '../module/cgb_demo/router';
// import demoRouter2 from '../module/cgb_demo2/router';
import demoRouter4 from '../module/bugProject/router';
import demoRouter5 from '../module/bugProject1/router';

export default {
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		// ...demoRouter,
    // ...demoRouter2,
    ...demoRouter4,
    ...demoRouter5,
    {
      path: '*',
      redirect: '/'
    }
  ]
}
