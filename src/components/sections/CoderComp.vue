<template>
    <div id="coder">
        <section id="user-error" v-if="threwError">
            <div><span>Could not get Github Profile</span></div>
        </section>
        <section id="user-profile" v-else>
            <div v-if="loading"><span>Fetching profile...</span></div>
            <div class="user-profile-card" v-else>
                <img :src="`${profileData.data.avatar_url}`" :alt="`${profileData.data.login}`" class="user-profile-card-avatar">
                <div class="user-profile-card-header">
                    <h1>{{profileData.data.blog}}</h1>
                </div>
            </div>
        </section>
    </div>
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