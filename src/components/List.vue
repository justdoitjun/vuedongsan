<!-- <template>
  <div>
    <h5>블로그 글 제목</h5>
    <p>블로그 글 날짜</p>
  </div>
  <div>
    <h5>블로그 글 제목</h5>
    <p>블로그 글 날짜</p>
  </div>
  <div>
    <h5>블로그 글 제목</h5>
    <p>블로그 글 날짜</p>
  </div>
</template>
<script>
export default {
}
</script>
<style>

</style> -->

<template>
  <div>
    <h5>{{ 블로그글[0].title }}</h5>
    <p>{{ 블로그글[0].date }}</p>
  </div>
</template>
<script>

//시작점이 대괄호로 시작한다 [ ]  -> 무조건 Array 배열임. (자바스크립트든 자바든. )  -> [index]
//시작점이 중괄호로 시작한다 { }  -> 무조건 Map Object임. -> .Key




export default {
  name : 'list',
  //부모한테 받은 내용
  props : {
    블로그글 : Array,
  }
}
</script>
<style>

</style>