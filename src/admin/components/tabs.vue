<template lang="pug">
  #tabs
    ul.tabs-list
      li.item(v-for="tab in tabs")
        router-link(
          :to="tab.href"
        ).link {{tab.title}}
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Блог", href: "/blog" },
        { title: "Работы", href: "/works" }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
#tabs {
  background: #f0efe9;
  height: 50px;
  text-align: start;
}
.tabs-list {
    display: flex;
    height: 100%;
    padding: 0;
}
.item {
  border-right: 2px solid #fff;
  list-style: none;
  height: 100%;
  width: 200px;
  :hover {
      background-color: white;
  }
}
.link {
  display: flex;
  width: 100%;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>