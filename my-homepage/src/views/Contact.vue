<template>
  <el-main>
    <the-title :commonTitle="title"></the-title>
    <div class="contact-content">
      <el-row>
        <el-col :span="24">
          <div class="contact-item">
            <el-card shadow="hover">
              <div class="contact-item-email">
                <label>Email: </label>
                <span>{{email}}</span>
                <span class="icon el-icon-connection"></span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="12" :md="6"
                v-for="contactItem of contactItems"
                :key="contactItem.index">
          <div class="contact-item">
            <el-card shadow="hover">
              <a class="contact-item-image"
                 :href="contactItem.link" target="_blank"
              >
                <el-image :src="contactItem.img" class="contact-item-image-slot">
                  <div slot="placeholder" class="image-slot">
                    {{contactItem.title}} 图片加载中...
                  </div>
                </el-image>
              </a>
              <div class="contact-item-text">
                <a :href="contactItem.link" target="_blank">
                  <h4>{{contactItem.title}}</h4>
                </a>
                <el-divider><i class="el-icon-paperclip"></i></el-divider>
                <p>{{ contactItem.introduction }}</p>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-main>
</template>

<script>
import TheTitle from '@/components/TheTitle.vue'
import axios from 'axios'
export default {
  data () {
    return {
      title: 'contact',
      email: 'sammyfeng0530@163.com',
      contactItems: null
    }
  },
  methods: {
    getContactItems () {
      axios.get('data/contactItems.json').then(res => {
        this.contactItems = res.data.contactItems
      })
    }
  },
  mounted () {
    this.getContactItems()
  },
  components: {
    'the-title': TheTitle
  }
}
</script>

<style lang="scss" scoped>

.contact-item{
  padding:15px;
  text-align: center;
}
  .contact-item-text{
    a{
      text-decoration: none;
      color: inherit;
    }
    p{
      height: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .contact-item-image{
    width:10em;
    height:10em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 1px 1px 5px #e1e1e1;
  }
  .contact-item-email{
    label{
      font-size:1.3em;
      font-weight: 600;
    }
    span{
      margin: 0 5px 0 10px;
    }
    .icon{
      transform: rotate(-30deg);
    }
  }
  .contact-item-image-slot{
    color: #696969;
  }
  .el-image__error{
    background: none;
  }
</style>
