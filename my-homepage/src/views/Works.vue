<template>
  <el-main>
    <the-title :commonTitle="title"></the-title>
    <div class="works-content">
      <el-row>
        <el-col :xs="24" :sm="12" :md="8" :lg="6"
                v-for="worksItem of worksItems"
                :key="worksItem.index">
          <div class="works-item">
            <el-card shadow="hover">
              <a :style="{ backgroundImage: 'url('+ worksItem.img + ')'}"
                 class="works-item-image"
                 :href="worksItem.link"
                 target="_blank"
              >
              </a>
              <div class="works-item-text">
                <a :href="worksItem.link" target="_blank">
                  <h4>{{worksItem.title}}</h4>
                </a>
                <el-divider><i class="el-icon-link"></i></el-divider>
                <p>{{ worksItem.introduction }}</p>
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
      title: 'works',
      worksItems: null
    }
  },
  methods: {
    getWorksItems () {
      axios.get('data/worksItems.json').then(res => {
        this.worksItems = res.data.worksItems
      })
    }
  },
  mounted () {
    this.getWorksItems()
  },
  components: {
    'the-title': TheTitle
  }
}
</script>

<style lang="scss" scoped>
  .works-content {
    margin-top: 3em;
  }

  .works-item {
    padding: 15px;
    text-align: center;
  }

  .works-item-text {
    position: relative;
    a {
      text-decoration: none;
      color: inherit;
    }
    p{
      text-align: left;
      min-height: 2.8em;
      line-height: 1.4em;
      font-size: 0.9em;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }
  }

  .works-item-image {
    width: 10em;
    height: 15em;
    display: block;
    border-radius: 5px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    box-shadow: 1px 1px 5px #e1e1e1;
  }
</style>
