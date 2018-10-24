<template>
    
</template>
<script>
export default {
    beforeCreate(){
        if(!this.$session.exists()){
            this.$router.push('/')
        }
    },
}
</script>
