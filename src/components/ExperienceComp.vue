<template>
<div id="experience-wrapper">
    <button class="experience-menu-btn">
        <span class="experience-menu-label">></span>
        <div class="menu--hidden">
            <div class="menu__bg-layer menu__bg-layer-2"></div>
            <div class="menu__bg-layer menu__bg-layer-1"></div>
            <div class="menu__container">
                <span class="menu__title">Academics</span>
                <ul class="menu__list">
                    <li class="menu__item"><a href="">Lorem ipsum</a></li>
                    <li class="menu__item"><a href="">Sin dolor habet</a></li>
                    <li class="menu__item"><a href="">Maxima experienca</a></li>
                    <li class="menu__item"><a href="">Lat in vodis</a></li>
                    <li class="menu__item"><a href="">Halamber nut</a></li>
                </ul>
            </div>
        </div>
    </button>
    <div class="content">
        <h1>Academics and Experience</h1>
        <p>Here you can find some info about where I have studied and where I have worked</p>
    </div>
</div>
</template>

<script>
import academics from '../assets/academics'
import workexperience from '../assets/workexperience'

export default {
    name: 'ExperienceComp'
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

input, button {
    font-family: "Space Mono";
    font-size: 1em;
}

a { 
    text-decoration: none;
    color: inherit;
}

#experience-wrapper {
    display: flex;
    justify-content: center;
    position: relative;
    overflow:auto;
    width: 100%;
    height: 40vh;;
    background: hsla(0,0%,100%,0.5);
    transition: all 0.2s cubic-bezier(.7,.2,.17,1);
    box-shadow: 0 0 2px hsla(0,0%,0%,0.1); 
}

#experience-wrapper:hover {
    background: hsla(0,0%,100%,1);
    transform: scale(1.02);
    box-shadow: 0 46px 12px -16px hsla(0,0%,0%,0.05); 
}

.content {
    text-align: justify;
    padding: 5%;
}

/* --- menu --- */

.experience-menu-btn {
    float: left;
    background: none;
    border: none;
    padding: 1em 0.5em;
}


.experience-menu-label {
    /* writing-mode: vertical-lr; */
    font-size: 0.8em;
    letter-spacing: 0.1em;
    font-weight:bold;
    color: #16DB93;
}

.menu__title {font-size:1.3em;}

.menu__container {
    position:absolute;
    top: 30px;
    left: 40%;
    padding: 1em;
    color: white;
    font-size: 1em;
    font-weight: bold;
    text-align: left;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-20em);
    transition: all 0.4s 0.3s cubic-bezier(.4,0,.17,1);
}

.menu__list {
    padding:0;
    margin-top:2em;
}

.menu__item {
    list-style: none;
    transition: all 0.2s;
}

.menu__item:hover {
    color:black;
}

.menu__item:before,
.menu__item:last-child:after {
    content:'';
    display:block;
    margin: 1em 0;
    width:100px;
    height:1px;
    background: hsla(0,0%,100%,0.5);
}

.menu__bg-layer {
    position:absolute;
    opacity: 0;
    height: 0;
    width: 0;
    border-radius:50%;
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