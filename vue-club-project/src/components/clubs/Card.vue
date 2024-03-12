<template>
    <div>
      <div v-for="league in leagues" :key="league.id">
        <div class="card" style="width: 18rem;">
          <img :src="league.logos.light" class="card-img-top" alt="logo">
          <div class="card-body">
            <h5 class="card-title">{{ league.name }}</h5>
            <p class="card-text">{{ league.abbr }}</p>
            <router-link :to="{ name: 'detalhes-view', params: { leagueId: league.id } }">
            <a class="btn btn-primary">Detalhes</a>
          </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  
export default {

data() {
      return {
        leagues: [],
      };
    },
    created() {
      fetch('https://api-football-standings.azharimm.dev/leagues')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.leagues = data.data;
        })
        .catch(error => {
          console.error('Error fetching leagues:', error);
        });
    },
  };
  </script>
  