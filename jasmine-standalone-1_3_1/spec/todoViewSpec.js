describe ("A todo item view", function(){
	it("should have a view constructor assigned ", function(){ 
		expect(Backbone.View.extend({})).toBeDefined();
		
	});
	it("should be able to instantiate a new todo item view ", function(){ 
		var my_model = new Todo();
		var todo_view = new TodoView({model:my_model});
		expect(todo_view).toBeDefined();
	});
	it("should be abe to get data from a model ", function(){
		var my_model = new Todo();
		var todo_view = new TodoView({model:my_model});
		expect(todo_view.model.caption).toBe(my_model.caption);
	
	 });
	 it("Should be able to define the Dom element we are going to render our view into, aka el", function(){
	 	var my_model = new Todo();
	 	var todo_view = new TodoView({model:my_model});
	 	expect(todo_view.el).toBeDefined();;
	 
	 });
	 it("should have the Render function output some html into thr view's el property", function(){ 
	 	var my_model = new Todo({caption:"test model rendering"});
	 	var todo_view = new TodoView({model:my_model});
	 	todo_view.render();
	 	expect(todo_view.$el.html()).toBe('<input type="checkbox">test model rendering');
	 	
	 });
	 it("Should be able to generate a checkbox thst is checked if Todo property completed is true", function(){
	 	var my_model = new Todo({caption:"checkbox is checked",
	 		completed:true});
	 	var todo_view = new TodoView({model:my_model});
	 	todo_view.render();
	 	expect(todo_view.$el.html()).toBe('<input type="checkbox" checked="checked">checkbox is checked');
	 
	  });
	  it("Should be able to generate a checkbox that is not checked if todo property complete is false ", function(){ 
	  	var my_model = new Todo({caption:"checkbox is not checked",
	 		completed:false});
	 	var todo_view = new TodoView({model:my_model});
	 	todo_view.render();
	 	expect(todo_view.$el.html()).toBe('<input type="checkbox">checkbox is not checked');
	  	
	  });
	  
	  it("should have el initialized ", function(){
	  	var my_model= new Todo({caption:"checkbox is not checked",
	 		completed:false});
	  	var todo_view = new TodoView({model:my_model});
	  	expect(todo_view.$el.html()).toBe('<input type="checkbox">checkbox is not checked');
	   });
	   it("should define some events ", function(){
	   		var my_model= new Todo({caption:"checkbox is not checked",
	 		completed:false});
	  	var todo_view = new TodoView({model:my_model});
	  		expect(todo_view.events).toBeDefined();
	   
	    });
	    it("Should have a function to toggle model's completed attribute ", function(){
	    	var my_model= new Todo({caption:"checkbox is not checked",
	 		completed:false});
	  		var todo_view = new TodoView({model:my_model});
	  		todo_view.toggleCheckbox();
	  		expect(my_model.get('completed')).toBe(true);
	  		
	  		expect(todo_view.$el.html()).toBe('<input type="checkbox" checked="checked">checkbox is not checked');
	    
	     });
	     it("should have a click event that calls toggleHeckbox ", function(){ 
	     	var my_model= new Todo({caption:"checkbox is not checked",
	 		completed:false});
	  		var todo_view = new TodoView({model:my_model});
	  		var checkbox= todo_view.$el;
	  		checkbox.trigger('click');
	
	  		
	  		expect(my_model.get('completed')).toBe(true);
	  		expect(todo_view.$el.html()).toBe('<input type="checkbox" checked="checked">checkbox is not checked');
	     
	     });
	
	
});