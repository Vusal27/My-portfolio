<template lang="pug">
tr(v-if="editmode === false")
    td {{skill.title}}
    td {{skill.percent}} %
    td 
        button(type="button") Удалить
tr(v-else)
    td
        input(
            type="text"
            placeholder="new skill"
        )
    td
        input(
            type="text"
            placeholder="percents"
        )
        span %
    td
        button(
        type="button"
        @click=""
    ) Добавить
</template>
<script>
export default {
    props: {
        skill: {
            type: Object,
            default: () => {}
        },
        editmode: {
            type: Boolean,
            default: false
        }
    }
}
</script>
