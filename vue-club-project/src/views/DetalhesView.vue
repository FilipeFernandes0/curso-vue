

<template>


<jumbotron :leagueId="leagueId"></jumbotron>

<links :leagueId="leagueId"></links>


</template>
    
    
<script>


import Jumbotron from '@/components/clubs/Jumbotron.vue'

import Links from '@/components/clubs/Links.vue'

    
    
    
export default{
    

     
  data() {
    return {
      leagueId: '',
    };
  },
  created() {
    this.leagueId = this.$route.params.leagueId;
  },
  components: {
    Jumbotron,
    Links,
  },
};


</script>