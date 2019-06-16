<template>
  <el-main>
    <the-title :commonTitle="title"></the-title>
    <div class="tab-button">
      <el-button-group>
        <el-button v-for="tab in tabs"
                   :key="tab.componentName"
                   @click="selected = tab.componentName"
                   :class="selected === tab.componentName ? 'active':''">
          {{ tab.name }}
        </el-button>
      </el-button-group>
    </div>
    <div class="skill-content">
      <component :is="selected" class="component-content"></component>
    </div>
  </el-main>
</template>

<script>
import TheTitle from '@/components/TheTitle.vue'
import SkillsGraph from '@/components/SkillsGraph.vue'
import SkillsText from '@/components/SkillsText.vue'
export default {
  data () {
    return {
      tabs: [
        { name: '图表显示', componentName: 'skills-graph' },
        { name: '文字描述', componentName: 'skills-text' }
      ],
      selected: 'skills-graph',
      title: 'skills'
    }
  },
  components: {
    'the-title': TheTitle,
    'skills-graph': SkillsGraph,
    'skills-text': SkillsText
  }
}
</script>

<style lang="scss" scoped>
.active{
  background-color: #1f1f1f;
  color: #fff;
}
.tab-button{
  border-bottom: 1px solid #808080;
}
  .el-button-group{
    width:50%;
    .el-button{
      margin:0 auto;
      width:50%;
    }
  }
.component-content{
  padding-left: 10px;
}
  .skill-content{
    padding:20px;
  }
  @media only screen and (max-width: 579px){
    .el-button-group{
      width:100%;
    }
  }
</style>
