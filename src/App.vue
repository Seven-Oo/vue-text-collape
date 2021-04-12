<template>
  <div id="app">
    <h2>vue-text-collape</h2>
    <p></p>
    <ul>
      <li><a href="https://github.com/Seven-Oo/vue-text-collape.git" target="_blank">github</a></li>
    </ul>
    <collape
      :lineH="24"
      :rowNum="4"
      :bgColor="'antiquewhite'"
      :content="content"
      :showTxt="'展开'"
      :hideTxt="'折叠'"
      :showColor="'#354880'"
      :hideColor="'#42b983'"></collape>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content: `
        本课程是在修完高等数学、大学物理等课程的基础上开设的。工程力学课程包括理论力学和材料力学两部分。
        理论力学研究质点系和刚体系统机械运动（包括平衡）的基本规律，主要讲述物体的受力分析、力系简化和
        物体及物体系统的平衡，点和刚体的运动学分析，质点与质点系的动力学分析的研究方法。材料力学的主要
        任务是在满足强度、刚度、稳定性的要求下，为构件工程设计提供必要的理论基础和计算方法。使学生掌握
        质点、质点系和刚体机械运动的基本规律及其研究方法，对杆件的强度、刚度和稳定性问题有明确的基本概
        念，必要的基础知识和熟练的计算能力。为学生后继学习机械原理、机械设计等课程及有关的科学技术打好
        必要的力学基础，学会应用工程力学的基本理论和方法分析与解决一些简单的工程实际问题。为今后从事职
        业学校机械类专业相关课程的教学，或从事企业一线工作，奠定必要的专业基础。该课程在整个专业教学与
        建设过程中，起到不可或缺的基础作用。本课程是在修完高等数学、大学物理等课程的基础上开设的。工程
        力学课程包括理论力学和材料力学两部分。理论力学研究质点系和刚体系统机械运动（包括平衡）的基本规
        律，主要讲述物体的受力分析、力系简化和物体及物体系统的平衡，点和刚体的运动学分析，质点与质点系
        的动力学分析的研究方法。材料力学的主要任务是在满足强度、刚度、稳定性的要求下，为构件工程设计提
        供必要的理论基础和计算方法。使学生掌握质点、质点系和刚体机械运动的基本规律及其研究方法，对杆件
        的强度、刚度和稳定性问题有明确的基本概念，必要的基础知识和熟练的计算能力。为学生后继学习机械原
        理、机械设计等课程及有关的科学技术打好必要的力学基础，学会应用工程力学的基本理论和方法分析与解
        决一些简单的工程实际问题。为今后从事职业学校机械类专业相关课程的教学，或从事企业一线工作，奠定
        必要的专业基础。该课程在整个专业教学与建设过程中，起到不可或缺的基础作用。本课程是在修完高等数
        学、大学物理等课程的基础上开设的。工程力学课程包括理论力学和材料力学两部分。理论力学研究质点系
        和刚体系统机械运动（包括平衡）的基本规律，主要讲述物体的受力分析、力系简化和物体及物体系统的平
        衡，点和刚体的运动学分析，质点与质点系的动力学分析的研究方法。材料力学的主要任务是在满足强度、
        刚度、稳定性的要求下。
      `
    }
  }
}
</script>

<style>
body {
  background: antiquewhite;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
