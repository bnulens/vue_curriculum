<template>
    <footer>
        <span>&copy; Brecht Nulens</span>
        <span>{{ new Date().getFullYear() }}</span>
    </footer>
</template>

<script>
</script>

<style scoped>
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        width: 100%;
        max-width: 1080px;
        padding: 8px;
        border-top: 1px solid grey;
    }
</style>