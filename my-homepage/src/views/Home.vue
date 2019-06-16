<template>
  <el-main>
    <the-title :commonTitle="title"></the-title>
      <div class="photo-card-wrap">
        <el-card shadow="always" class="photo-card">
          <span class="name">{{name}}</span>
          <h4>{{ profile }}</h4>
          <el-divider><i class="el-icon-link"></i></el-divider>
          <div class="photo-wrap">
            <el-image :src="imageSrc" class="info-photo">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
          <div class="text-wrap">
            <h3><span class="el-icon-map-location"></span>{{ city }}</h3>
            <time class="time">{{ currentDate }}</time>
          </div>
        </el-card>
      </div>
  </el-main>
</template>

<script>
import MyPhoto from '@/assets/images/photo.jpg'
import TheTitle from '@/components/TheTitle.vue'

export default {
  data () {
    return {
      title: 'home',
      name: 'Sammy Feng',
      currentDate: new Date(),
      city: '上海 Shanghai',
      imageSrc: MyPhoto,
      profile: '一目标是前端方向的学生崽儿'
    }
  },
  components: {
    'the-title': TheTitle
  }
}
</script>

<style lang="scss" scoped>
  .photo-wrap{
    width:100%;
    background-image: url('../assets/images/photocard-bg.jpg');
    background-size: cover;
    text-align: center;
  }
  .photo-card{
    .name{
      font-weight: 500;
      font-size: 2em;
      font-family: "Yu Mincho Light";
      border: 1px solid #a6a6a6;
      width:auto;
      padding:10px 20px;
    }
    h4{
      font-weight: 500;
    }
  }
  .info-photo{
    width: 45%;
    img{
      max-width: 100%;
      height: 50%;
    }
  }
  .text-wrap{
    margin-top: 30px;
    font-size: 14px;
    float: right;
    h3{
      span{
        margin-right:20px;
      }
      text-align: right;
    }
  }
  .el-card{
    padding: 10px 10px 60px 10px;
  }
  .photo-card-wrap{
    margin: 0 auto;
    width:50%;
  }
  @media only screen and (max-width: 1200px){
    .photo-card-wrap{
      width:50%;
    }
  }
  @media only screen and (max-width: 992px){
    .photo-card-wrap{
      width:66.6667%;
    }
  }
  @media only screen and (max-width: 768px){
    .photo-card-wrap{
      width:83.3333%;
    }
  }
  @media only screen and (max-width: 579px){
    .photo-card-wrap{
      width:100%;
    }
  }

</style>
