<template>
 <div class="card" style="width: 18rem;">
  <img :src="logo" class="card-img-top" alt="logo">
  <div class="card-body">
    <h5 class="card-title">{{name}}</h5>
    <p class="card-text">{{ abreviation }}</p>
    <router-link to="/portuguese-liga"><a class="btn btn-primary">detalhes</a></router-link>
  </div>
</div>
</template>

<script>

export default {

  data(){
    return{

      name:'',
      abreviation:'',
      logo:'',
      
     

      
    
  }
  },
  created(){
    fetch('http://localhost:3000/data/por.1')
    .then(response => response.json())
    .then(especifications => {
      console.log(especifications)

      this.name = especifications.name
      this.abreviation = especifications.abbr
      this.logo = especifications.logos.light;


      
    })
  }
 
}

</script>