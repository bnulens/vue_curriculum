<template>
<div id="experience-wrapper">
    <div id="experience-body">
        <button class="experience-menu-btn">
            <span class="experience-menu-label">></span>
            <div class="menu--hidden">
                <div class="menu__bg-layer menu__bg-layer-2"></div>
                <div class="menu__bg-layer menu__bg-layer-1"></div>
                <div class="menu__container">
                    <ul class="menu__list" v-for="academic in academics.slice().reverse()" :key="academic.id" >
                        <li class="menu__item">
                            <h3>{{ academic.year }}</h3>
                            <h2>{{ academic.institution }}</h2>
                            <h5>{{ academic.title }}</h5>
                        </li>
                        <span class="menu__item_details">
                            <ul>
                                <li>{{ academic.location }}</li>
                                <li>{{ academic.status }}</li>
                            </ul>
                        </span>
                    </ul>
                </div>
            </div>
        </button>
        <div class="content">
            <h1>Academics</h1>
        </div>
    </div>
</div>
</template>

<script>
import academics from '../assets/academics'
import workexperience from '../assets/workexperience'

export default {
    name: 'ExperienceComp',
    data() {
        return {
            academics
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

*:focus {
    outline:none;
}

input, button {
    font-family: "Helvetica";
    font-size: 1em;
}

a { 
    text-decoration: none;
    color: inherit;
}

#experience-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 8vh;
    width: 100%;
}
#experience-body {
    display: flex;
    justify-content: flex-start;
    position: relative;
    overflow: auto;
    width: 38vw;
    height: 30vh;
    background: hsla(0,0%,100%,0.5);
    transition: all 0.2s cubic-bezier(.7,.2,.17,1);
    box-shadow: 0 0 2px hsla(0,0%,0%,0.1); 
}

#experience-wrapper:hover {
    background: hsla(0,0%,100%,1);
    box-shadow: 0 46px 12px -16px hsla(0,0%,0%,0.05); 
    transform: scale(1.02);
}

.content {
    text-align: justify;
    padding: 5%;
    margin-left: 3vw;
}

/* --- menu --- */
.experience-menu-btn {
    background: none;
    border: none;
    margin: 2vh;
    padding: 1em 0.5em;
}


.experience-menu-label {
    font-size: 0.8em;
    letter-spacing: 0.1em;
    font-weight:bold;
    color: #16DB93;
}

.menu__title {font-size:1.3em;}

.menu__container {
    position:absolute;
    top: 10px;
    left: 18%;
    height: 14vh;
    color: white;
    font-size: 1em;
    font-weight: bold;
    text-align: justify;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-20em);
    transition: all 0.4s 0.3s cubic-bezier(.4,0,.17,1);
}

.menu__list {
    display: block;
    margin-top: 1em;
}

.menu__list:hover .menu__item {
    color: black;
}

.menu__list .menu__item_details {
    display: flex;
    position: relative;
    justify-content: center;
    margin: 10px 0px;
    font-size: 1rem;
    text-align: left;
    color: black;
    opacity: 0;
    transition: ease transform 0.3s, opacity 0.3s;
    -webkit-transition: ease transform 0.3s, opacity 0.3s;
}

.menu__list:hover .menu__item_details {
    opacity: 1;
    transform: translate(10px, 0px);
}

.menu__item {
    display: block;
    transition: ease 0.4s;
}

.menu__item:before,
.menu__item:last-child:after {
    content:'';
    display:block;
    width: 200px;
    height:1px;
    background: hsla(0,0%,100%,0.5);
}

.menu__bg-layer {
    position:absolute;
    opacity: 0;
    height: 0;
    width: 0;
    background: #16DB93;
    transform: translate(-50%, -50%);
    transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.experience-menu-btn:hover .menu__container {
    transform: translateX(0);
    transition-delay: 0;
    width: 100%;
    visibility: visible;
    opacity: 1;
}

.experience-menu-btn:hover .menu__bg-layer {
    padding-bottom: 250%;
    width: 250%;
    opacity: 1;
}

.experience-menu-btn:hover .menu__bg-layer-2 {
    background: #FAFF7F;
}

.experience-menu-btn:hover .menu__bg-layer-1 {
    transition-delay: 0.2s;
}

</style>