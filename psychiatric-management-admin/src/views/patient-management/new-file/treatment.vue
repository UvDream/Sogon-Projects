<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 11:52:40
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-25 11:08:45
 * @Description: 治疗
 * @Email: UvDream@163.com
 -->
 <template>
  <div>
    <!-- 病患危险等级 -->
    <PatientLevel />
    <!-- 病患治疗记录 -->
    <TreatmentRecord />
    <!-- 病患住院 -->
    <PatientHospitalization />
    <Btn />
  </div>
</template>
 
 <script>
import PatientLevel from "./components/treatment/patient-level.vue";
import TreatmentRecord from "./components/treatment/treatment-record";
import PatientHospitalization from "./components/treatment/patient-hospitalization";
import Btn from "./components/button";
export default {
  components: {
    PatientLevel,
    TreatmentRecord,
    PatientHospitalization,
    Btn
  }
};
</script>
 
 <style>
</style>
