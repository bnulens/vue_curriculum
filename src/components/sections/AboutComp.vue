<template>
    <section id="about">
        <h1 class="sr-only">About</h1>
        <div class="about-card-wrapper">
          <div class="about-card-container-left">
                <h2>"I am a fresh junior web developer looking to score"</h2>
                <h2>"Intrigued by project based studies and tests"</h2>
          </div>
          <div class="about-card-container-right">
                <section class="user-error-container" v-if="threwError">
                    <div class="user-error">
                        <img src="../../../public/assets/icons/error.svg" alt="error" class="user-avatar-error">
                        <span>Could not find Github profile</span>
                    </div>
                </section>
                <section class="user-profile" v-else>
                    <div v-if="loading">
                        <div class="loader"/></div>
                    <div class="user-profile-card" v-else>
                        <img :src="`${profileData.data.avatar_url}`" :alt="`${profileData.data.login}`" class="user-profile-card-avatar">
                        <div class="user-profile-card-content">
                            <h2>I am <strong>Brecht Nulens</strong></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae maiores sequi, id ratione inventore numquam velit accusamus doloribus voluptates, quisquam facilis blanditiis voluptatem non mollitia perferendis fugiat autem consectetur vero! 
                            </p>
                        </div>
                    </div>
                </section>
          </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            profileData: null,
            loading: true,
            threwError: false
        }
    },
    created() {
        axios
        .get('https://api.github.com/users/bnulens')
        .then(res => (this.profileData = res))
        .catch(err => {
            console.log(err)
            this.threwError = true
        })
        .finally(() => this.loading = false)
    }
}
</script>

<style scoped lang="scss">
    #about {
        position: relative;
        /* ABOUT TITLES and PARAGRAPHS */
        .about-card-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .about-card-container-left {
                h2 {
                    font-size: 48px;
                    font-weight: 100;
                    text-align: left;
                    color: grey;
                    padding: 16px;
                }
            }
            .about-card-container-right {
                display: block;
                padding: 16px;
                text-align: justify;
                width: 1000px;
                /* GITHUB AVATAR */
                .user-error-container {
                    display: flex;
                    align-items: center;
                    .user-error {
                        display: flex;
                        flex-direction: row;
                        margin: 0 auto;
                        .user-avatar-error {
                            display: block;
                            width: 180px;
                        }
                        span {
                            color: grey;
                            align-self: center;
                            font-size: 28px;
                            padding-bottom: 24px;
                        }
                    }
                }
                .user-profile {
                    .user-profile-card {
                        .user-profile-card-avatar {
                            display: block;
                            border-radius : 50%;
                        }
                        .user-profile-card-content {
                            display: block;
                            padding: 16px;
                            text-align: justify;
                            h2 {
                                font-size: 40px;
                                font-style: italic;
                                text-align: right;
                            }
                            p {
                                display: block;
                                font-size: 18px;
                                padding: 8px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>