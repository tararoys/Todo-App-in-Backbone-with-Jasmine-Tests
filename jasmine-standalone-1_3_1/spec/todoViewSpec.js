describe ("Rendering an individual todo list item", function(){
	it("should have a view constructor assigned ", function(){ 
		expect(Backbone.View.extend({})).toBeDefined();
		
	});
	it("should be able to instantiate a new todo item view ", function(){ 
		var todo_view= new TodoView({});
		expect(todo_view).toBeDefined();
	});
	
	
});