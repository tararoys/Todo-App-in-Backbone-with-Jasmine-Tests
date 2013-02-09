describe ("A todo list (Aka a collection of todo items)", function(){
	it("should be able to create a new collection", function(){
		
		expect(Backbone.Collection.extend({})).toBeDefined();
		expect(TodoList).toBeDefined();
	
	 });
	it("should contain todo models ", function(){ 
		var todo_list1 = new TodoList();
		expect(todo_list1.model).toBe(Todo);
	
	});
});