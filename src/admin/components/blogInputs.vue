<template lang="pug">
div
    .blog-title Добавить запись
        input.blog-input(
            type="text"
            placeholder="Название"
        )
        input.blog-input(
            type="text"
            placeholder="Дата"
        )
        textarea.blog-textarea(
            type="text"
            placeholder="Содержимое"
        )
        button.blog-button(type="button") Добавить
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.blog-title {
    display: flex;
    flex-flow: column;
}
.blog-input {
    margin-top: 20px;
    width: 300px;
    padding: 10px;
    border-radius: 5px;
}
.blog-textarea {
    margin-top: 20px;
    max-width: 500px;
    border-radius: 5px;
    padding: 10px;
    height: 140px;
    resize: none;
}
.blog-button {
    height: 40px;
    width: 110px;
    margin-top: 20px;
    border-radius: 5px;
    color: white;
    background-color: #0b42b0;
    border: transparent;
    font-weight: 600;
    cursor: pointer;
}
</style>
