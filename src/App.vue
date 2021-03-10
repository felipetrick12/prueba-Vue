<template>
  <div id="app" class="container">
    
    
        <div class="row">
        <CardList class="container p-0" />
        </div>
      
    
  </div>
</template>

<script>
import CardList from './components/CardList';


export default {
  name: 'app',
  components: {
    CardList,
  }
  
};
</script>

<style  >

   

    body {
    min-height: 100%;
    font-size: 16px; 
    font-size: 1.6rem;
    background-color: rgb(32, 32, 88);
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
        margin-bottom: 5%;
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

      .sombra {
        -webkit-box-shadow: 0px 4px 10px -3px rgb(223, 119, 22);
        -moz-box-shadow: 0px 4px 10px -3px rgb(216, 165, 25);
        box-shadow: 0px 4px 10px -3px rgb(184, 97, 17);
      }

   

</style>
