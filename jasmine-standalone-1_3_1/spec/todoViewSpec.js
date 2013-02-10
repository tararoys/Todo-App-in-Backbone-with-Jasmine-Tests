describe ("Rendering an individual todo list item", function(){
	it("should have a view constructor assigned ", function(){ 
		expect(Backbone.View.extend({})).toBeDefined();
		
	});
	it("should be able to instantiate a new todo item view ", function(){ 
		var todo_view= new TodoView({});
		expect(todo_view).toBeDefined();
	});
	it("should be abe to get data from a model ", function(){
		var my_model = new Todo();
		var todo_view = new TodoView({model:my_model});
		expect(todo_view.model.caption).toBe(my_model.caption);
	
	 });
	
	
});