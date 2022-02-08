<template>
  <div>BLOG</div>
 
 <button  class="btn btn-primary"  @click= "goBack">Back</button>
 {{this.$route.params.number}}

 {{ blog }}
</template>

<script>
import axios from 'axios';

export default {
data(){
    return{
        blog:'',
    }
},


methods:{
    goBack(){
        this.$router.go(-1)
    },

    async  getBlog(){
        const res =await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${this.$route.params.number}`
            )
         this.blog = res.data;
         console.log(this.blog)
        },

},
mounted(){
    this.getBlog();
}
}
</script>

<style>

</style>