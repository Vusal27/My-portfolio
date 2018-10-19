<template lang="pug">
div
    .works-title Добавить работу
        input.works-input(
            type="text"
            placeholder="Название проекта"
        )
        input.works-input(
            type="text"
            placeholder="Технологии"
        )
        button.works-inputPic(type="button") Загрузить картинку
        button.works-button(type="button") Добавить
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.works-title {
    display: flex;
    flex-flow: column;
}
.works-input {
    margin-top: 20px;
    width: 300px;
    padding: 10px;
    border-radius: 5px;
}
.works-button{
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
.works-inputPic {
    color: #0b42b0;
    font-weight: 600;
    background-color: transparent;
    border: none;
    height: 40px;
    width: 150px;
    margin-top: 20px;
    cursor: pointer;
}
</style>
