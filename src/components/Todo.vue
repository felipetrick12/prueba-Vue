<template>
  <div class='col-md-3 mt-2'>
    <div class="card" v-show="!isEditing" >
    
    <div class="card-body">
      <h5 class="card-title">{{ todo.title }}</h5>
      <p class="card-text">{{ todo.project }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
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
  }
</style>