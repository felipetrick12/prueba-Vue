<template>
  <div class="">
    <button class='btn btn-secondary mt-4 ' v-on:click="openForm" v-show="!isCreating">
     Ingresar Tarea <i class=''></i>
    </button>
    <div class='formulario' v-show="isCreating">
          <div class='campo'>
            <label>Title:</label>
            <input v-model="titleText" type='text'>
          </div>
          <div class='campo'>
            <label>Project:</label>
            <input v-model="projectText" type='text'>
          </div>
          <div class='botones'>
            <button class="btn-info" v-on:click="sendForm()">
              Create
            </button>
            <button class="btn-info" v-on:click="closeForm()">
              Cancel
            </button>
         
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleText: '',
      projectText: '',
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title = this.titleText;
        const project = this.projectText;
        this.$emit('create-todo', {
          title,
          project,
          done: false,
        });
        this.titleText = '';
        this.projectText = '';
        this.isCreating = false;
      }
    },
  },
};
</script>

<style >
   .btn  {
     width: 100%;
    text-align: center;
    font-size: 22px;
   
  }
  .botones {
    display:flex;
    margin-top: 3%;
    width:100%;
    justify-content: space-between;
  }
  .botones button {
    padding: 3%;
    font-size: 18px;
    border-radius:5px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    width: 8rem;
    
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


