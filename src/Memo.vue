<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <!-- logo 는 자주 변하지 않는 건데 이걸 굳이 데이터 바인딩 할 필요가 있을까?
    없다. 따라서 {{ logo }} 라는 mustache는 안 쓰는 게 좋다. -->
    {{ logo }}
    <h4> XX 원룸 </h4>
    <!-- Vue 문법 중에 mustache 콧수염 넣는 걸 
    데이터 바인딩이라고 하고 데이터 꽂아넣어주는 구조임
      {{ 변수명 }}
      이 문법의 용도가 무엇일까? 
      (1) html에 하드코딩하기 싫어서 - 변경하기 어려우니깐
      (2) 실시간 자동 렌더링 기능이 Vue가 갖고 있는 가장 큰 장점. 
      -> 이건 mustache가 있어야함. 
      (3) (충격!) HTML속성과 상상하는 모든 것들이 다 데이터바인딩 가능.  
      심지어 class명 혹은 styleClass명도 데이터 바인딩이 가능함. 

      {{ price1 }} price1이라는 것이 data(){ return {}}
    -->
    <p> {{price1}}만원</p>
  </div>
  <div>
    <h4> XX 원룸 </h4>
    <p> {{price2}}만원</p>
  </div>

  <!-- v-for 문법-->
  <!--
    (1)
    v-for는 여러군데에 쓸 수 있다. 태그 어디든지 넣을 수 있다. 
    <태그 v-for="작명 in 몇 회" :key="작명">
    꼭 Key라는 것을 적어줘야하는데 작명한 거 그냥 그대로 쓰면 된다. 
    안 쓰면 에러를 배출함.  key의 특징은 반복문을 돌리는 기준점을 정해주는 것임. 
    (2)
    in 몇 회 라는 곳 안에 자료형...이 것이 Arra여도 좋다. -> 그럼 Array의 길이만큼 나온다.
    (3)
    근데 주의해야할 점은 in 안에는 {{  }} mustache 작성법대로 쓰지 말고 그냥 그대로 menu라는 변수 그대로 적어주라
    (4)
    결과는 마치 <c:forEach c="obj"> 같은 jstl 문법이랑 비슷. 
  -->
  <div class="name">
    <a v-for="obj in menu" :key="obj">{{ obj }}</a>
  </div>
  <div>
    <a v-for="(a, i) in menu" :key="i">{{ a }}</a>
  </div>
  <div>
    <a v-for="(a, i) in menu" :key="a">{{ i }}</a>
  </div>
  <!-- 이런 것도 가능하다. -->
  <div v-for="(a,i) in products " :key="i">
    <h4>{{ a }}</h4>
    <p>50만원</p>
  </div>

  <!-- 이벤트 핸들러
    v-on 의 약자가 @임.
    v-on:click= @click=
  -->
  <div>
    <h4>{{ products[0] }}</h4>
    <p>50만원</p>
    <button v-on:click=" count ++ ">허위매물신고</button> 
    <span>신고수 : {{ count }}</span>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>50만원</p>
    <button @click=" count ++">허위매물신고</button> 
    <span>신고수 : {{ count }}</span>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>50만원</p>
    <button @mouseover=" count ++">허위매물신고</button> 
    <span>신고수 : {{ count }}</span>
  </div>
  <!-- 
    함수를 정의하는 방법

  -->
  <div>
    <h4>{{ products[1] }}</h4>
    <p>50만원</p>
    <button @click="increaseCnt">허위매물신고</button> 
    <span>신고수 : {{ count }}</span>
  </div>

</template>

<script>


export default {
  name: 'App',
  /// function(){return {}} 이런식으로 함수가 생겼다. 
  // data 보관함 -> 중요한 변수를 다 여기다 넣음. 
  data(){
    return {
      price1 : 60,
      price2 : 70,
      logo : '원룸샵',
      count : 0,
      menu : ['Home', 'Shops', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  /////함수 만드는 공간
  methods : {
    increaseCnt(){
      //이렇게 cnt라고만 하면 알 수가 없다. count가 define되지 않았다고 에러가 날 듯. 
      //count ++;
      //반드시 this.cnt
      this.count ++;
    },

  },
  components: {

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
