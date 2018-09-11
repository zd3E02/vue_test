var state = {count: 0}
var app = new Vue({
  el: '#app',
  data: {
    message :{
      value:'vue.js!',
    } ,
    list: ['apple','b','c'],
    num :1
  }
})
state.count++