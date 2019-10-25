<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 11:54:59
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-25 10:51:17
 * @Description: 四帮一
 * @Email: UvDream@163.com
 -->
 <template>
  <div>
    <!-- 村居干部帮扶 -->
    <VillageCadre />
    <!-- 监护民警帮扶 -->
    <Police />
    <!-- 防治医生帮扶 -->
    <Doctor />
    <!-- 监护人监护 -->
    <Guardian />
    <Btn />
  </div>
</template>
 
 <script>
import Btn from "./components/button";
import VillageCadre from "./components/help/village-cadre";
import Police from "./components/help/police";
import Doctor from "./components/help/doctor";
import Guardian from "./components/help/guardian";
export default {
  components: {
    Btn,
    VillageCadre,
    Police,
    Doctor,
    Guardian
  }
};
</script>
 
 <style>
</style>
