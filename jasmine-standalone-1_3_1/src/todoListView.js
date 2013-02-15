var TodoListView = Backbone.View.extend({
initialize: function(){
	this.render();
},
render: function(){
	  this.$el.html('<input type="text" id="addtodo">');
	  this.collection.each(function(todo){ 
	  	var todo_view = new TodoView({model:todo});
	  	todo_view.render();
	  		this.$el.append(todo_view.$el);
	  	}, this);
	}

});