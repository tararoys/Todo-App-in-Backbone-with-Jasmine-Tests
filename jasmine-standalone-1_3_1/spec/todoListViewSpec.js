describe ("Todo List View", function(){
	it("shows all todos in a list ", function(){
	//create two todos
		var todo1 = new Todo({caption: "create new todo", completed:false});
		var todo2 = new Todo({caption: "see if Todo List", completed:true});
		//create todo list
		var todo_list = new TodoList();
		todo_list.add(todo1);
		todo_list.add(todo2);
		//create todo list view
		var todo_list_view = new TodoListView({collection: todo_list});
		todo_list_view.render();
		expect(todo_list_view.el.innerHTML).toContain('create new todo');
		
		//'<div> <input type="checkbox"> <label>create new todo</label> </div><div> <input type="checkbox" checked=""> <label>see if Todo List</label> </div>');
		//render todo list
		
	
	 });
	 it("Should have a place to add todos", function(){ 
	 var todo_list = new TodoList();
	 var todo_list_view = new TodoListView({collection:todo_list});
	 	expect(todo_list_view.$('#addtodo')).toBeDefined();
	 });
});