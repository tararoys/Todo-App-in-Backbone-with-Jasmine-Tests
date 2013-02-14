describe ("A todo item view", function(){
	var my_model;
	var todo_view;

	beforeEach(function(){
		my_model = new Todo({caption:"checkbox is not checked",
	 		completed:false});
		todo_view = new TodoView({model:my_model});
	});
	
	it("should have a view constructor assigned ", function(){ 
		expect(Backbone.View.extend({})).toBeDefined();
		
	});
	it("should be able to instantiate a new todo item view ", function(){ 
		
		expect(todo_view).toBeDefined();
	});
	it("should be abe to get data from a model ", function(){
		
		expect(todo_view.model.caption).toBe(my_model.caption);
	
	 });
	 it("Should be able to define the Dom element we are going to render our view into, aka el", function(){
	 	
	 	expect(todo_view.el).toBeDefined();;
	 
	 });
	 xit("should have the Render function output some html into thr view's el property", function(){ 
	 	my_model = new Todo({caption:"test model rendering"});
	 	todo_view = new TodoView({model:my_model});
	 	todo_view.render();
	 	expect(todo_view.$el.html()).toBe('<input type="checkbox">test model rendering');
	 	
	 });
	 it("Should be able to generate a checkbox thst is checked if Todo property completed is true", function(){
	 	 my_model = new Todo({caption:"checkbox is checked",
	 		completed:true});
	 	todo_view = new TodoView({model:my_model});
	 	expect(todo_view.$('input')).toBeChecked();
	 
	  });
	  xit("Should be able to generate a checkbox that is not checked if todo property complete is false ", function(){ 
	  	var my_model = new Todo({caption:"checkbox is not checked",
	 		completed:false});
	 	var todo_view = new TodoView({model:my_model});
	 	todo_view.render();
	 	expect(todo_view.$el.html()).toBe('<input type="checkbox">checkbox is not checked');
	  	
	  });
	  
	  it("should have el initialized ", function(){
	  	
	  	expect(todo_view.$el.html()).toBeDefined();
	   });
	   it("should define some events ", function(){
	   		
	  		expect(todo_view.events).toBeDefined();
	   
	    });
	    xit("Should have a function to toggle model's completed attribute ", function(){
	    	
	  		todo_view.toggleCheckbox();
	  		expect(my_model.get('completed')).toBe(true);
	  		
	  		expect(todo_view.$el.html()).toBe('<input type="checkbox" checked="checked">checkbox is not checked');
	    
	     });
	    it("should have a click event that calls toggleCheckbox ", function(){ 
	     	
	  		//todo_view.$('p').click();
	  		
	  		//expect(my_model.get('completed')).toBe(true);
	  		todo_view.$('input').change(); 
	  		expect(my_model.get('completed')).toBe(true);
	  		
	  		//expect(todo_view.$el.html()).toBe('<input type="checkbox" checked="checked">checkbox is not checked');
	     });
	
	
});