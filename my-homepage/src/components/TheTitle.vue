<template>
  <header>
    <h1>{{commonTitle.toUpperCase()}}</h1>
    <div class="heading-decoration">
      <div></div>
      <div></div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    commonTitle: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
   header{
     margin: 0 auto 30px;
     text-align: center;
   }
  h1{
    font-size: 2em;
  }
  .heading-decoration{
    div{
      border-top: 1px;
      height:0px;
      margin: 0 auto;
      &:first-of-type{
        width:5em;
        margin-bottom: -2px;
        border-top: 4px solid #1f1f1f;
      }
      &:last-of-type{
        width:15em;
        border-top: 1px solid #1f1f1f;
      }
    }
  }
</style>
