<template>
  <div class="row">
   
    <h1>Cards</h1>
    <div class="col-md-6 col-sm-6" v-for='gettercard in getterscard' :key='gettercard.id'  > 
            
            <div class="card-body mt-2" >
           
            <h5 class="card-title">{{gettercard.name}}
                <span v-bind:class="[gettercard.isCompleted ? 'completo' : 'incompleto']"> 
                    <fa-icon class='mx-1' :icon="['fa', 'user-secret']"/> 
                    {{gettercard.isCompleted}}
                </span>
            </h5>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">Descripcion: {{gettercard.description}}</li>
            </ul>

        
        <hr/>
    </div>
</div>
    
    
</div>
    

  
</template>

<script>


export default {
    
  computed: {
    getterscard() {
    return this.$store.getters.allCards
    },
    users() {
    return this.$store.state.cards
    }
  },
  mounted() {
    this.$store.dispatch("getCards");
  }
}
</script>