var TodoListView = Backbone.View.extend({
className: 'todolist',
initialize: function(){
	//_.bindAll(this);
	this.render();
	this.collection.on('add', this.render, this);
},
events:{
	"keypress #addtodo":"addTodo",
	"click .show_completed":"turnOnOnlyShowCompleted",
	"click .show_active":"turnOnOnlyShowActive",
	"click .show_all" : "turnOnShowAll"
},
render: function(){
	  this.$el.html('<input type="text" id="addtodo" value="type in todo item here">');
	  this.collection.each(function(todo){ 
	  	var filtered_todo=this.filter(todo);
	  	
	  	if(!(filtered_todo === null)){
	  		var todo_view = new TodoView({model:todo});
	  		todo_view.render();
	  		this.$el.append(todo_view.$el);
	  	}
	  }, this);
	  this.$el.append('<div><a class="show_completed">completed</a> <a class="show_active">active</a> <a class="show_all">all</a></div>');
	},
addTodo:function(e){
	var enterkey= 13;
	if( e.which !== enterkey){
		return;
	}
	var new_todo = new Todo({caption:this.$('#addtodo').val(), completed:false})
	this.collection.add(new_todo);
	
},
filter: function(todo){
	if(this.filter_name==="show_only_completed"){
	  		return this.completedFilter(todo);
	  	}
	 else if(this.filter_name==="show_only_active"){
	  		return this.activeFilter(todo);
	  	}
	  else if(this.filter_name==="show_all"){
	  		return todo;
	  	}
},
filter_name: "show_all",
turnOnOnlyShowCompleted:function(){
	this.filter_name= "show_only_completed";
	this.render();
},
turnOnOnlyShowActive:function(){
	this.filter_name= "show_only_active";
	this.render();
},
turnOnShowAll:function(){
	this.filter_name= "show_all";
	this.render();
},
completedFilter:function(todo){
	if(todo.get('completed') === true){
		return todo;
	}
	else{
		return null;
	}
},
activeFilter:function(todo){
	if(todo.get('completed') === false){
		return todo;
	}
	else{
		return null;
	}
},

});