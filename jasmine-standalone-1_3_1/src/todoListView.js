var TodoListView = Backbone.View.extend({
render: function(){
	  this.$el.html('');
	  this.collection.each(function(todo){ 
	  	var todo_view = new TodoView({model:todo});
	  	todo_view.render();
	  		this.$el.append(todo_view.$el);
	  	}, this);
	}

});