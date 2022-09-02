<template>
  <div style="padding:20px;">
    <div>

      <el-button type="primary" style="margin-right:20px;">自动模式</el-button>
      <el-select v-model="automaticMode" placeholder="Select"  @change="changeAutomaticMode">
        <el-option
            v-for="item in automaticModes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
        />
      </el-select>
    </div>
    <div style="margin-top:20px;">

      <el-button type="primary" style="margin-right:20px;">刷图功能</el-button>
      <el-select v-model="brushFunc" placeholder="Select"  @change="changeBrushFunc">
        <el-option
            v-for="item in brushFuncs"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
        />
      </el-select>
    </div>
    <div style="margin-top:20px;">

      <el-button type="primary" style="margin-right:20px;">过图方式</el-button>
      <el-select v-model="overMap" placeholder="Select"  @change="changeOverMap">
        <el-option
            v-for="item in overMaps"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
        />
      </el-select>
    </div>
    <div>
      <el-button type="primary" style="margin-right:20px;">副本编号</el-button>
      <el-input style="margin-top:20px;width:140px;" v-model="mapNum" placeholder="" @change="changeMapNum"/>
    </div>
    <div>
      <el-button type="primary" style="margin-right:20px;">技能代码</el-button>
      <el-input style="margin-top:20px;width:140px;" v-model="skillNum" placeholder="" @change="changeSkillNum"/>
    </div>
    <div>
      <el-button type="primary" style="margin-right:20px;">角色数量</el-button>
      <el-input style="margin-top:20px;width:140px;" v-model="peopleNum" placeholder="" @change="changePeopleNum"/>
    </div>
  </div>
</template>

<script>
import {
  ChangeAutomaticMode,
  ChangeBrushFunc, ChangeMapNum,
  ChangeOverMap, ChangePeopleNum, ChangeSkillNum
} from "../../../../wailsjs/go/main/App";

export default {
  name: "Index.vue",
  data() {
    return {
      skillNum:"",
      peopleNum:"",
      mapNum:"12345",
      automaticMode:"搬砖",
      automaticModes:[
        {
          value: '搬砖',
          label: '搬砖',
        },
        {
          value: '升级',//后端参数
          label: '升级',
        },
      ],
      brushFunc:"金身Buff",
      brushFuncs:[
        {
          value: '金身Buff',
          label: '金身Buff',
        },
        {
          value: '金身Buff2',//后端参数
          label: '金身Buff2',
        },
      ],
      overMap:"组包强顺",
      overMaps:[
        {
          value: '组包强顺',
          label: '组包强顺',
        },
        {
          value: '组包强顺1',//后端参数
          label: '组包强顺1',
        },
      ]
    }
  },
  methods:{
    changeAutomaticMode(e){
      console.log(e)
      ChangeAutomaticMode(e)
    },
    changeBrushFunc(e){
      console.log(e)
      ChangeBrushFunc(e)
    },
    changeOverMap(e){
      console.log(e)
      ChangeOverMap(e)
    },
    changeMapNum(e){
      ChangeMapNum(e)
    },
    changePeopleNum(e){
      ChangePeopleNum(e)
    },
    changeSkillNum(e){
      ChangeSkillNum(e)
    },
  }
}
</script>

<style scoped>
</style>