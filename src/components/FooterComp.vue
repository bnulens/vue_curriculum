<template>
    <div class="footer">
        <div class="ref-icons">
            <a href="https://github.com/bnulens" target="_blank">
                <img class="ref-icon-github" src="/assets/icons/github.svg" alt="GitHub logo">
            </a>
            <a href="https://www.linkedin.com/in/brecht-nulens/" target="_blank">
                <img class="ref-icon" src="/assets/icons/linkedIn.svg" alt="LinkedIn logo">
            </a>
            <a href="mailto:brechtnulens@gmail.com" target="_blank">
                <img class="ref-icon" src="/assets/icons/gmail.svg" alt="Gmail logo">
            </a>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>

    * {
        margin: 0;
        padding: 0;
    }


    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        width: 100vw;
        background-color: rgb(213, 213, 213);
    }

    .ref-icon {
        width: 28px;
        margin-left: 20px;
        filter: grayscale(0.7);
        transition: filter 0.3s;
    }

    .ref-icon:hover {
        filter: grayscale(0);
    }

    .ref-icon-github{
        width: 28px;
        margin-left: 20px;
        filter: invert(0);
        transition: ease filter 0.3s;
    }

    .ref-icon-github:hover {
        filter: invert(1);
    }
</style>