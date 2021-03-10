<template>
  <div id="app" class="container">
    
    
        <div class="row">
        <CardList class="container p-0" />
        </div>
      
    
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
import CardList from './components/CardList';


export default {
  name: 'app',
  components: {
    CardList,
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
      isShow:false,
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

<style lang="scss" >

   

    body {
    min-height: 100%;
    font-size: 16px; 
    font-size: 1.6rem;
    background-color: rgb(38, 38, 90);
     font-family: Georgia;
    }
    .container {
      padding: 2rem;
    }
     .container h1 {
      text-align: center;
      background-color: rgb(67, 28, 209);
      color: white;
      border-radius:1px;
      border-radius: 5px;
      padding:1.5rem;
      font-weight: bold;
      font-size:2.0em;
    }

    .row {
        margin: 0 ;
        margin-bottom: 3%;
        border-radius: 25px;
        background-color: rgb(233, 243, 248);
        overflow: hidden;
        border: 2px solid 0c3ad3;
      }
      hr {
        background-color:#0c3ad3;
      }
      
     .card-body  {
        background-color: #878b9769;
        color: #fff;
        text-align: center;
        border-radius:5px;
      }
      .completo {
          padding: 2%;
          font-size: 13px;
          float: right;
          background-color: rgba(154, 252, 154, .3);
          color: #FFF;
      }

      .incompleto{
          padding: 2%;
          font-size: 13px;
          float: right;
          background-color: rgba(250, 126, 126, 0.4);
         color: #FFF;
      }

      h5 {
        font-size: 1.3em;
      }

      ul {
        font-size:18px;
        color:black;
      }

   

</style>
