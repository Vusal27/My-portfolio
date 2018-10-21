<template lang="pug">
#header
    .title Панель администрирования
    a.exit Вернуться на сайт
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
#header {
  background: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: #fff;
  height: 100px;
}
.exit {
  color: inherit;
}
</style>