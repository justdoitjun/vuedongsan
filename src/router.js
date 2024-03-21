// import { createWebHistory, createRouter } from "vue-router";
// 라이브러리명 적으면 라이브러리 주입하는 거임. 

// const routes = [
    //내가 건드릴 것은 이 괄호밖에 없다. 
    //누군가의 저 경로로 들어오면 저 컴포넌트를 보여주게 되어있다. 
    //누가 이 경로로 들어오면 이 걸 보여주세요. 
//   {
//     path: "/경로",
//     component: import해온 컴포넌트,
//   }
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router; 

import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: '/',
    component: home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 