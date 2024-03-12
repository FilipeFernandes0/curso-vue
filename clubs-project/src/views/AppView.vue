

<template>

    <card></card>
    
    </template>
    
    <script>
    
    import Card from '@/components/club/Card.vue'
    
    
    export default{
      props:{
        name:String,
        abreviation:String,
        logo:String
        },
      components: {Card},
    
      
      
    
    
    }
    </script>