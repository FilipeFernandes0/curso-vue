<template>
    <ul class="list-group">
        <router-link :to="`/liga/${this.leagueId}/temporada/${season.year}`" v-for="season in seasons"
            class="list-group-item">{{ season.displayName }}</router-link>


    </ul>
</template>


<script>

export default {
    props: ['leagueId'],
    data() {
        return {
            seasons: []
        };
    },
    created() {
        fetch(`https://api-football-standings.azharimm.dev/leagues/${this.leagueId}/seasons`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.seasons = data.data.seasons;
            })
            .catch(error => {
                console.error('error fetching leagues', error);
            });
    },
}

</script>