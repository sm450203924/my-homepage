<template>
  <section class="text-skills">
    <el-collapse>
      <el-collapse-item
        class="skills-item"
        v-for="skillsItem of skillsItems"
        :key="skillsItem.index"
        :title="skillsItem.index + '. '+ skillsItem.title"
      >
        <div
          v-for="(skillsItemDetail, index) of skillsItem.details"
          :key="index"
        >-
          {{skillsItemDetail}}
        </div>
      </el-collapse-item>
    </el-collapse>
  </section>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      skillsItems: null
    }
  },
  methods: {
    getSkillsText () {
      axios.get('data/skillsText.json').then(res => {
        this.skillsItems = res.data.skillsItems
      })
    }
  },
  mounted () {
    this.getSkillsText()
  }
}
</script>
<style lang="scss">
  .el-collapse-item__header{
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
</style>
