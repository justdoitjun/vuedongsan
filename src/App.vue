<!-- <template> -->
  <!-- <div class="container mt-4">
    <h5>React 개발자의 블로그입니다.</h5>
    <p>- Vue로 만들었음 -</p>
  </div> -->


  <!-- //props 전송법 3가지 (부모 -> 자식) 스텝 1. 보내고 2. 등록하고 3. 쓰셈 -->
  <!-- <List : 작명= "블로그글"/> -->
  <!-- <List :블로그글="블로그글"/> -->

<!-- </template> -->

<!-- <script>
//component(1)
import List from './components/List.vue';
//data(1) 기억해야할 원칙 : import를 했다면, 반드시 export도 있어야한다. 
import blog from './assets/blog.js';

export default {
  name: 'App',
  //component 쓰는 방법 3가지 스텝 1.import하고 2. 등록하고 3. <쓰셈/>
  components: {
    //component(2)
    List : List,
  },
  //List.vue에 실제 데이터를 넣고 싶다. 
  data(){
    return {
      
    }
  }
  //props 전송법 3가지 (부모 -> 자식) 스텝 1. 보내고 2. 등록하고 3. 쓰셈
  props(){

  }
}
</script> -->
<!-- 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->







<template>
  <div class="container mt-4">
    <h5>React 개발자의 블로그입니다.</h5>
    <p>- Vue로 만들었음 -</p>
  </div>

  <router-view :블로그글="블로그글"></router-view>
  <!-- 아래 링크는 누르면 a태그라서 리스트 다른 페이지로 이동한다. -->
  <router-link to="/list">리스트 페이지</router-link>
  <!-- <List :블로그글="블로그글"/> -->

</template>

<script>
import List from './components/List.vue';
import blog from './assets/blog.js';

export default {
  name: 'App',
  components: {
    List : List,
  },
  data(){
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
