var TodoListView = Backbone.View.extend({
initialize: function(){
	this.render();
},
events:{
	"keypress #addtodo":"addTodo"
},
render: function(){
	  this.$el.html('<input type="text" id="addtodo">');
	  this.collection.each(function(todo){ 
	  	var todo_view = new TodoView({model:todo});
	  	todo_view.render();
	  		this.$el.append(todo_view.$el);
	  	}, this);
	},
addTodo:function(e){
	
	var new_todo = new Todo({caption:this.$('addtodo').val(), completed:false})
	this.collection.add(new_todo);
}

});