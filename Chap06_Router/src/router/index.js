/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router';

import A01Binding from './../views/A01Binding.vue';
import A02Attribute from './../views/A02Attribute.vue';
import A03Params from './../views/A03Params.vue';
import A04Props from './../views/A04Props.vue';
import A05Contact from './../views/A05Contact.vue';
import A05ContactChild from './../views/A05ContactChild.vue';
// import A06Query from './../views/A06Query.vue';
// import A07Push from './../views/A07Push.vue';

// import A08ChildRouter from './../views/A08ChildRouter.vue';
import CompanyInfo from './../components/CompanyInfo.vue';
import CompanyWay from './../components/CompanyWay.vue';

import A09NotFound from './../views/A09NotFound.vue';

const routes = [
  { path: '/', name: 'index', component: A01Binding },
  { path: '/A01Bind', name: 'bind', component: A01Binding },
  { path: '/A02Attr', name: 'attrs', component: A02Attribute },
  // :변수명 => :이 붙은 이름은 패스역할과 변수 역할을 동시에 한다
  // '/A03Params/:no/:name' => /A03Params/20/놀부 => no='20', name='놀부'
  { path: '/A03Params/:no/:name', name: 'params', component: A03Params },

  // param으로 넘어오는 데이터를 모두 props에서 참조할 수 있게 해 준다 => props: true
  { path: '/A04Props/:no/:name', name: 'props', component: A04Props, props: true },

  { path: '/A05Contact', name: 'contact', component: A05Contact },
  { path: '/A05Child/:no', name: 'contactChild', component: A05ContactChild, props: true },

  // 주소줄의 파라미터를 이용한 데이터 전달. 데이터는 RouterLink에서 지정한다
  { path: '/A06Query', name: 'query', component: () => import('./../views/A06Query.vue') },

  // 버튼을 이용한 링크 구현 예제
  {
    path: '/A07Push',
    name: 'push',
    component: () => import(/* webpackChunkName: 'push' */ './../views/A07Push.vue'),
    beforeEnter: (to, from) => {
      // 각 라우터에서 설정
      console.log('----------- beforeEnter -----------');
      if (session.getItem('address')) return true;
      else return false;
    },
  },

  // 자식 라우터 구현
  {
    path: '/A08Child',
    name: 'child',
    component: () => import('./../views/A08ChildRouter.vue'),
    children: [
      { path: '', name: 'info', component: CompanyInfo },
      { path: 'way', name: 'way', component: CompanyWay },
      { path: '/A08Child/view/:no', name: 'view', component: A05ContactChild, props: true },
    ],
  },
  // 위의 모든 패스가 매칭되지 않는 경우 기본으로 표시할 컴퍼넌트 ['/ABC']
  { path: '/:path(.*)', name: 'not', component: A09NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

const session = window.sessionStorage;
session.setItem('name', 'ABC');
session.setItem('age', 1);
session.setItem('address', 'seoul');
session.setItem('tel', 'seoul');
session.setItem('job', 'seoul');

// 전역 Guard
router.beforeEach((to, from) => {
  console.log('----------- beforeEach -----------');
  // console.log(to, from);
  if (session.getItem('name') === 'ABC') {
    return true;
  } else {
    return false;
  }
});

router.beforeResolve((to, from) => {
  // beforeEach가 실행되고 한 후 afterEach가 실행되기 전 체크
  console.log('----------- beforeResolve -----------');
  // console.log(to, from);
  if (session.getItem('age') === '1') return true;
  else return false;
});

router.afterEach((to, from) => {
  console.log('----------- afterEach -----------');
  // 이벤트 리스너 제거...
  // return이 없음
});
