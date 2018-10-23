<template>
    <v-card class="elevation-12">
        <v-toolbar dark color="primary">
        <v-toolbar-title>Login form</v-toolbar-title>
        <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
        <v-form>
            <v-text-field 
            prepend-icon="fas fa-user" 
            name="login" label="Login" 
            type="text"
            v-model="username"></v-text-field>
            <v-text-field id="password" 
            prepend-icon="fas fa-lock" 
            name="password" label="Password" 
            type="password"
            v-model="password"></v-text-field>
        </v-form>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="login">Login</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>

export default {
    data(){
        return{
            username: '',
            password: ''
        }
    },

    methods: {
        login(){
            let data = {
                username: this.username,
                password: this.password
            }
            this.$axios.post('http://localhost:5000/login', data)
            .then(res => {
                console.log(res.data)
                this.$session.start()
                this.$session.set('token', res.data.token)
                this.$axios.defaults.headers.common['x-access-token'] = res.data.token
                this.$router.push('/')
            })
            .catch(err => {
                alert(err.message, 'ERROR')
            })
        }
    }
}
</script>
