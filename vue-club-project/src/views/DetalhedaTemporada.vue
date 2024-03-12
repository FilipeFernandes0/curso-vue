

<template>


   <jumbotron :leagueId="leagueId"></jumbotron>
    <TableData :leagueId="leagueId" :year="year" ></TableData>
  
    
    </template>
        
        
    <script>
    
    
    import Jumbotron from '@/components/clubs/Jumbotron.vue'
    import TableData from '@/components/clubs/TableData.vue'

    
    
        
        
        
    export default{
        
    
         
      data() {
        return {
        leagueId: '',
        year:''
        };
      },
      created() {
        this.leagueId = this.$route.params.leagueId;
        this.year = this.$route.params.year;

      },
      components: {
        Jumbotron,
        TableData,
       
      },
    };
    
    
    </script>