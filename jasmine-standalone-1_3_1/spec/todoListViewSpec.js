describe ("Todo List View", function(){
	var todo_list;
	var todo_list_view;
	beforeEach(function(){
		todo_list = new TodoList();
	 	todo_list_view = new TodoListView({collection:todo_list});
		
	});
	it("shows all todos in a list ", function(){
	//create two todos
		var todo1 = new Todo({caption: "create new todo", completed:false});
		var todo2 = new Todo({caption: "see if Todo List", completed:true});
		//create todo list
		todo_list.add(todo1);
		todo_list.add(todo2);
		//create todo list view
		todo_list_view.render();
		expect(todo_list_view.el.innerHTML).toContain('create new todo');
		
		//'<div> <input type="checkbox"> <label>create new todo</label> </div><div> <input type="checkbox" checked=""> <label>see if Todo List</label> </div>');
		//render todo list
		
	
	 });
	 it("Should have a place to add todos", function(){ 
	 
	 	expect(todo_list_view.$('#addtodo')).toBeDefined();
	 	
	 });
	 it("Should have a function to add new todos to todo list ", function(){ 
	 	todo_list_view.$('#addtodo').val('create new todo list item');
	 	todo_list_view.addTodo($.Event('keypress', {which:13}));
	 	expect(todo_list.at(0)).toBeDefined()
	 	
	 });
	 it("should create a new todo when you hit enter in the new todo inout box, and display it", function(){
	 	todo_list_view.$('#addtodo').val('create new todo list item');
	 	todo_list_view.$('#addtodo').trigger($.Event('keypress', {which:13}));
	 	expect(todo_list.at(0)).toBeDefined()
	 	expect(todo_list_view.$el.html()).toContain('create new todo');
	 
	  });
});