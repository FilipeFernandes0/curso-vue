<template>
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Points</th>
   </tr>
  </thead>
  <tbody>
    <tr  v-for="standing in standings" :key="standing.team.id">
      <td>{{ standing.team.name }}</td>
      <td>{{ getPoints(standing.stats) }}</td>
    
    </tr>
   

  </tbody>
</table>
</template>

<script>
export default{
    props: ['leagueId', 'year'],
    
    data(){
        return{
            
            standings:[],
        }

    },
    methods: {
    getPoints(stats) {
      // Find the "points" stat in the stats array
      const pointsStat = stats.find(stat => stat.name === 'points');
      // Return the value of the "points" stat
      return pointsStat ? pointsStat.displayValue : 'N/A';
    },
  },

    created() {
  fetch(`https://api-football-standings.azharimm.dev/leagues/${this.leagueId}/standings?season=${this.year}&sort=asc`)
    .then(response => response.json())
    .then(data => {
      this.standings = data.data.standings;
      console.error('Invalid data structure:', data);
    })
    .catch(error => console.error('Error fetching data:', error));
}

}

</script>