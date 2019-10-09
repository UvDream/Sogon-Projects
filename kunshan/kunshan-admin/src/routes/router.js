import Vue from "vue";
import Router from "vue-router";
import Index from "../views/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Index,
      redirect: "/dashboard",
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          label: "值班情况",
          component: () => import("@/views/dashboard/index.vue")
        },
        {
          path: "/policeQuality",
          name: "policeQuality",
          label: "警情质态",
          component: () =>
            import(
              /* webpackChunkName: "policeQuality" */ "@/views/police-quality/policeQuality.vue"
            )
        },
        {
          path: "/technicalDefense",
          name: "technicalDefense",
          label: "科技技防运行质态",
          component: () =>
            import(
              /* webpackChunkName: "technicalDefense" */ "@/views/technical-defense/technicalDefense.vue"
            )
        },
        {
          path: "/platformWarning",
          name: "platformWarning",
          label: "平台预警",
          component: () =>
            import(
              /* webpackChunkName: "platformWarning" */ "../views/platform-warning/platformWarning.vue"
            )
        },
        {
          path: "/patrolCheck",
          name: "patrolCheck",
          label: "巡逻盘查",
          component: () =>
            import(
              /* webpackChunkName: "patrolCheck" */ "../views/patrol-check/patrolCheck.vue"
            )
        },
        {
          path: "/siteSurvey",
          name: "siteSurvey",
          label: "现场勘查",
          component: () =>
            import(
              /* webpackChunkName: "siteSurvey" */ "../views/site-survey/siteSurvey.vue"
            )
        },
        {
          path: "/blackSweep",
          name: "blackSweep",
          label: "扫黑专项斗争情况",
          component: () =>
            import(
              /* webpackChunkName: "blackSweep" */ "../views/black-sweep/blackSweep.vue"
            )
        },
        {
          path: "/caseStudy",
          name: "caseStudy",
          label: "一案一档一研判",
          component: () =>
            import(
              /* webpackChunkName: "caseStudy" */ "../views/case-study/caseStudy.vue"
            )
        },
        {
          path: "/transcriptProduction",
          name: "transcriptProduction",
          label: "笔录制作质态",
          component: () =>
            import(
              /* webpackChunkName: "transcriptProduction" */ "../views/transcript-production/transcriptProduction.vue"
            )
        },
        {
          path: "/personnelManagement",
          name: "personnelManagement",
          label: "入所人员管理质态",
          component: () =>
            import(
              /* webpackChunkName: "personnelManagement" */ "../views/personnel-management/personnelManagement.vue"
            )
        },
        {
          path: "/analysis",
          name: "analysis",
          label: "研判分析",
          component: () =>
            import(
              /* webpackChunkName: "analysis" */ "../views/analysis/analysis.vue"
            )
        },
        {
          path: "/other",
          name: "other",
          label: "其他",
          component: () =>
            import(/* webpackChunkName: "other" */ "../views/other/other.vue")
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
  ]
});
