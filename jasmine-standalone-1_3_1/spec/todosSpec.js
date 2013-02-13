describe ("A todo list (Aka a collection of todo items)", function(){
	it("should be able to create a new collection", function(){
		
		expect(Backbone.Collection.extend({})).toBeDefined();
		expect(TodoList).toBeDefined();
	
	 });
	it("should contain todo models ", function(){ 
		var todo_list1 = new TodoList();
		expect(todo_list1.model).toBe(Todo);
	
	});
	it("should store models in localstorage for ", function(){
		var todo_list1 = new TodoList();
		expect(todo_list1.localStorage).toBeDefined();
	
	 });
	 it("should add a model to the collection ", function(){ 
	 	var todo_list1 = new TodoList();
	 	var my_todo = new Todo({
	 	 caption: 'Add a todo to the todolist', 
	 	 completed: false,
	 	 id:1
	 	 });
	 	todo_list1.add(my_todo);
	 	expect(todo_list1.get(1)).toBe(my_todo);
	 
	 });
	 it("should delete a model from the collection ", function(){
	 	var todo_list1 = new TodoList();
	 	var my_todo = new Todo({
	 	 caption: 'delete a todo to the todolist', 
	 	 completed: false,
	 	 id:1
	 	 });
	 	todo_list1.add(my_todo);
	 	todo_list1.remove(1);
	 	
	 	expect(todo_list1.get(1)).not.toBeDefined();
	 
	  });
	 
});