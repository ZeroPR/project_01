<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <login-form></login-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import LoginForm from '@/components/LoginForm'
export default {
    beforeCreate(){
        if(this.$session.exists()){
            this.$router.push('/home')
        }
    },
    components: {
        LoginForm
    }
}
</script>
