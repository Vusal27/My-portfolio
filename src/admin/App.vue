<template lang="pug">
  app-title
    .header
      header#header
        .title Панель администрирования
        a.exit(href="#") Вернуться на сайт
    .tabs
      tabs
    .content
      skills(
        :skills="skills"
      )
      blog
      works
</template>

<script>
import header from "./components/header";
import tabs from "./components/tabs";
import skills from "./components/skills";
import blog from "./components/blog";
import works from "./components/works";
// import { mapActions} from "vuex";

const data = [
  {id: 1, title: "Html", percent: 20, category: 0 },
  {id: 2, title: "PHP", percent: 20, category: 1 },
  {id: 3, title: "CSS", percent: 30, category: 0 },
  {id: 4, title: "Node.js", percent: 20, category: 1 },
  {id: 5, title: "Mongo", percent: 20, category: 1 },
  {id: 6, title: "Git", percent: 20, category: 2 },
  {id: 7, title: "Gulp", percent: 40, category: 2 },
  {id: 8, title: "Javascript", percent: 20, category: 0 },
  {id: 9, title: "Bower", percent: 20, category: 2 },
  {id: 10, title: "MySQL", percent: 50, category: 1 }
]

export default {
  components: {
    skills, header, tabs, blog, works
  },
  data() {
    return {
      skills: data
    }
  },
  // created() {
  //   this.fetchSkills();
  // },
  // methods: {
  //   ...mapActions({
  //     fetchSkills: "skills/fetch"
  //   })
  // }
};
</script>
<style lang="scss" scoped>
#header {
  background: #0b42b0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: #fff;
}
.exit {
  color: white;
  opacity: 0.5;
  font-size: 14px;
  text-decoration: underline;
}
.title {
  font-size: 22px;
  font-weight: 600;
}
</style>
