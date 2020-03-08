var todolist = {
    todoarray: [],
    displaytodo: function() {
      console.log("todolist ");
      for (var i = 0; i < this.todoarray.length; i++) {
        if (this.todoarray[i].completed)
          console.log("(X)", this.todoarray[i].todoText);
        else console.log("( )", this.todoarray[i].todoText);
      }
    },
    addtodo: function(text) {
      this.todoarray.push({
        completed: false,
        todoText: text
      });
      this.displaytodo();
    },
    changetodo: function(index, newtext) {
      this.todoarray[index].todoText = newtext;
      this.displaytodo();
    },
    toggleTodo: function(index) {
      this.todoarray[index].completed = true;
      this.displaytodo();
    }
  };
  todolist.addtodo("item1");
  todolist.addtodo("item2");
  todolist.addtodo("item3");
  todolist.addtodo("item4");

  var DisplayAllBtn = document.getElementById("DisplayAllBtn");
  DisplayAllBtn.addEventListener('click',function(){
    todolist.displaytodo();
  });