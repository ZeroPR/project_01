<template>
    <v-card class="elevation-12">
        <v-toolbar dark color="primary">
            <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
        <v-form>
            <v-text-field 
            prepend-icon="fas fa-user" 
            name="login" label="Login" 
            type="text"
            v-model="username"
            @keyup.enter="login"></v-text-field>
            <v-text-field id="password" 
            prepend-icon="fas fa-lock" 
            name="password" label="Password" 
            type="password"
            v-model="password"
            @keyup.enter="login"></v-text-field>
        </v-form>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="login">
            <span v-if="!loading">Login</span>
            <v-progress-circular v-if="loading"
            :value="100"
            indeterminate
            ></v-progress-circular>
        </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>

export default {
    data(){
        return{
            username: '',
            password: '',
            loading: false
        }
    },

    methods: {
        login(){
            this.loading = true
            let data = {
                username: this.username,
                password: this.password
            }
            this.$axios.post('http://localhost:5000/login', data)
            .then(res => {
                console.log(res.data)
                this.loading = false
                if('token' in res.data){
                    this.$session.start()
                    this.$session.set('token', res.data.token)
                    this.$axios.defaults.headers.common['x-access-token'] = res.data.token
                    this.$router.push('/home')
                }
                if('error' in res.data){
                    alert(res.data.error, 'ERROR')
                }
            })
            .catch(err => {
                this.loading = false
                alert(err.message, 'ERROR')
            })
        }
    }
}
</script>
