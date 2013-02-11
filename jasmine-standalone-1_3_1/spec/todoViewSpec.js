describe ("A todo item view", function(){
	it("should have a view constructor assigned ", function(){ 
		expect(Backbone.View.extend({})).toBeDefined();
		
	});
	it("should be able to instantiate a new todo item view ", function(){ 
		var todo_view = new TodoView({});
		expect(todo_view).toBeDefined();
	});
	it("should be abe to get data from a model ", function(){
		var my_model = new Todo();
		var todo_view = new TodoView({model:my_model});
		expect(todo_view.model.caption).toBe(my_model.caption);
	
	 });
	 it("Should be able to define the Dom element we are going to render our view into, aka el", function(){
	 	var todo_view = new TodoView();
	 	expect(todo_view.el).toBeDefined();;
	 
	 });
	 it("should have the Render function output some html containing the caption and a checkmark box showing the completed status ", function(){ 
	 	var my_model = new Todo();
	 	var todo_view = new TodoView({model:my_model});
	 	todo_view.render();
	 	expect(todo_view.$el.html()).toBe("random test string");
	 	
	 });
	
	
});