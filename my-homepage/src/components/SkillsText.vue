<template>
  <section class="text-skills">
    <el-collapse>
      <el-collapse-item v-for="skillsItem of skillsItems"
                        :key="skillsItem.index"
                        :title="skillsItem.index + '. '+ skillsItem.title"
                        class="skills-item">
        <p v-for="(skillsItemDetail, index) of skillsItem.details" :key="index">- {{skillsItemDetail}}</p>
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
<style lang="scss" scoped>
  .skills-item{
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
