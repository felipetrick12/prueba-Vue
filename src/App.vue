<template>
  <div id="app" class="container">
    
    <h1 >Website Todo </h1>
  
      <div class='row '>
        <div class="containerHeader">
        
        <create-todo class="col-6 mt-1 " v-on:create-todo="createTodo"></create-todo>
        
          <div class="parrafos">
              <p class="tasks">Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}} </p>
              <p class="tasks">Pending Tasks:  {{todos.filter(todo => {return todo.done === false}).length}}</p>
              
          </div>
         
        </div>
        
        <div class="row p-0">
          <todo-list class="col-md-12 mt-1 p-0 " v-bind:todos="todos"></todo-list>
        </div>

        <hr/>
      </div>
    
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';



export default {
  name: 'app',
  components: {
    TodoList,
    CreateTodo,
  },
  data() {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    };
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
      sweetalert('Success!', 'To-Do created!', 'success');
    },
  },
  
};
</script>

<style >

    html {
    box-sizing: border-box;
    height: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    body {
    min-height: 100%;
    font-size: 16px; 
    font-size: 1.6rem;
    background-color: rgb(38, 38, 90);
    }
    .container {
      padding: 3rem;
      
    }
     .container h1 {
      text-align: center;
      background-color: rgb(67, 28, 209);
      color: white;
      border-radius:1px;
      border-radius: 5px;
      padding:1.5rem;
    }

    .row {
        margin: 0;
        margin-bottom: 3%;
        border-radius: 25px;
        background-color: rgb(233, 243, 248);
        overflow: hidden;
        border: 2px solid 0c3ad3;
      }
      hr {
        background-color:#0c3ad3;
      }
    .containerHeader{
      display:flex
    }

    .parrafos{
      text-align: center;
      width:100%;
    }
     p.tasks {
       text-align: center;
        margin-top: 5%;
        text-align: center;
        font-family: Georgia, 'Times New Roman', Times, serif;
      }

</style>
