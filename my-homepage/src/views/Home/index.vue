<template>
  <el-main>
    <the-title :commonTitle="title"/>
      <div class="photo-card-wrap">
        <el-card shadow="always" class="photo-card">
          <span class="name">
            <img src="../../../public/images/name.png" alt="">
          </span>
          <h2>{{ profile }}</h2>
          <el-divider>
            <i class="el-icon-link"/>
          </el-divider>
          <div class="photo-wrap">
            <el-image :src="imageSrc" class="info-photo">
              <div slot="placeholder" class="image-slot">
                加载中
                <span class="dot">...</span>
              </div>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"/>
              </div>
            </el-image>
          </div>
          <div class="text-wrap">
            <h3>
              <span class="el-icon-map-location"/>
              {{ city }}
            </h3>
            <time class="time">
              {{ currentDate }}
            </time>
          </div>
        </el-card>
      </div>
  </el-main>
</template>

<script>
import MyPhoto from '../../../public/images/hp-photo.jpg'
import TheTitle from '@/components/TheTitle.vue'

export default {
  data () {
    return {
      title: 'home',
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
    background-color: #fff;
/*    background-image: url('../assets/images/photocard-bg.jpg');
    background-size: cover;*/
    text-align: center;
  }
  .photo-card{
    .name{
      border: 1px solid #a6a6a6;
      width:auto;
      padding:0 20px 10px;
      img{
        max-width: calc(100% - 40px);
        width: 300px;
      }
    }
    h2{
      padding: 10px;
      font-weight: 600;
      font-size: 1.2em;
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
