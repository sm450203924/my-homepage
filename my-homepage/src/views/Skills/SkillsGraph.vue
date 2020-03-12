<template>
  <section class="graph-skills">
    <div class="skills-item">
      <el-row>
        <el-col :md="24" :lg="8">
          <v-chart :options="frontendOption"
                   :style="{width:'100%'}"/>
        </el-col>
        <el-col :md="24" :lg="8">
          <v-chart :options="backendOption"
                   :style="{width:'100%'}"/>
        </el-col>
        <el-col :md="24" :lg="8">
          <v-chart :options="otherOption"
                   :style="{width:'100%'}"/>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
import { frontendOption } from '@/assets/echarts/frontendSkillsBarChart'
import { backendOption } from '@/assets/echarts/backendSkillsBarChart'
import { otherOption } from '@/assets/echarts/otherSkillsBarChart'

export default {
  data () {
    return {
      frontendOption: frontendOption,
      backendOption: backendOption,
      otherOption: otherOption
    }
  }
}
</script>
