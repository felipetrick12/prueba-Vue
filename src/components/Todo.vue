<template>
  <div class='col-md-3 mt-2'>
    <div class="card" v-show="!isEditing" >
    
    <div class="card-body">
      <h5 class="card-title">{{ todo.title }}</h5>
      <p class="card-text">{{ todo.project }}</p>

  <div class='botones'>
      <button class="btn btn-warning mt-2" v-on:click="showForm">editar</button>
      <button class="btn btn-danger mt-2" v-on:click="deleteTodo(todo)">eliminar</button>
    </div>
  
    </div>
  </div>


  <div class="formulario" v-show="isEditing">
      <div class='campo'>
            <label>Title:</label>
            <input type='text'/>
          </div>
          <div class='campo'>
            <label>Project:</label>
            <input type='text'/>
          </div>
        <div class='botones'>
          <button class="btn-info btn-block" v-on:click="hideForm">
            Close X
          </button>
        </div>
    </div>
   
    <div class='btn btn-info' v-show="!isEditing &&todo.done" disabled>
        Completed
    </div>
    <div class='btn btn-light' v-on:click="completeTodo(todo)" v-show="!isEditing && !todo.done">
        Pending
    </div>
  </div>

</template>

<script type="text/javascript">
  export default {
    
    props: ['todo'],
    data() {
      return {
        isEditing: false,
      };
    },
    methods: {
      completeTodo(todo) {
        this.$emit('complete-todo', todo);
      },
      deleteTodo(todo) {
        this.$emit('delete-todo', todo);
      },
      showForm() {
        this.isEditing = true;
      },
      hideForm() {
        this.isEditing = false;
      },
    },
  };
</script>



 
  <style >
   .container {
    text-align: center;
    display:block;
  }
   .btn  {
    text-align: center;
    font-size: 18px;
    color: #fff;
    width: 100%;
  }
  .botones {
    display:flex;
    margin-top: 3%;
    justify-content: space-around;
  }
  .botones button {
    padding: 1%;
    font-size: 18px;
    border-radius:5px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    width: 8rem;
    width:100%;
    
  }
  .formulario {
    padding-top: 1rem;
    padding-left: 2%;
    margin-bottom: 2%;
    
  }

  .campo{
    display: flex;
  }
  .campo label {
    margin-top: 2%;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 18px;
    width: 10%;
  }
  .campo input{
    margin-left:15%;
    margin-top: 2%;
    overflow: hidden;
    height:35px;
    border-radius: 2px;
    border:none;
    font-size:15px;
    width: 100%;
    border:2px solid rgba(12, 50, 219, 0.333);
  }
</style>
