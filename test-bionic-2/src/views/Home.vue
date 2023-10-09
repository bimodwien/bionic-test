<template>
    <div>Home Hello</div>
</template>

<script>
export default {
    name: 'Home',
    computed: {
        employees() {
            return this.$store.state.employees
        }
    },
    created() {
        console.log('jalan');
        this.$store.dispatch('fetchEmployee')
    }
}
</script>