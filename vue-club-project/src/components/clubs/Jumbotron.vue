<template>

    <header>
    
      <div class="p-5 mb-4 bg-body-tertiary rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">{{ data.name }}</h1>
          <p class="col-md-8 fs-4">{{ data.abbreviation }}</p>
          <button class="btn btn-primary btn-lg" type="button">Example button</button>
        </div>
      </div>
    
    </header>
    
    </template>
    
    <script>
    export default {
        props: ['leagueId'],


      data() {
        return {
          data: [],
        };
      },
      created() {
   
        fetch(`https://api-football-standings.azharimm.dev/leagues/${this.leagueId}/seasons`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.data = data.data;
            })
            .catch(error => {
                console.log('error fetching data', error);
            });
   
      }
 }

    </script>
    