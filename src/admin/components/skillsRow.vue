<template lang="pug">
    .skills
        .skills-title {{type.name}}
        table.skills-list
            skills-item(
                v-for="skill in skills"
                :key="skill.id"
                v-if="skill.category === type.id"
                :skill="skill"
            )
            skills-item(
                :editmode="true"
            )
</template>
<script>
import skillsItem from './skillsItem';
export default {
    components: {
        skillsItem
    },
    props: {
        type: {
            type: Object,
            default: () => {}
        },
        skills: {
            type: Array,
            default: () => []
        },
    }
};
</script>
