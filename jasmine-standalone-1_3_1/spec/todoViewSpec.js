describe ("A todo item view", function(){
	var my_model;
	var todo_view;

	beforeEach(function(){
		my_model = new Todo({caption:"checkbox is not checked",
	 		completed:false});
		todo_view = new TodoView({model:my_model});
		//$('.fixture').remove();
		
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
	 it("should have the Render function output some html into thr view's el property", function(){ 
	 	my_model = new Todo({caption:"test model rendering"});
	 	todo_view = new TodoView({model:my_model});
	 	todo_view.render();
	 	expect(todo_view.$el.html()).not.toBeEmpty();
	 	
	 });
	 it("Should be able to generate a checkbox thst is checked if Todo property completed is true", function(){
	 	 my_model = new Todo({caption:"checkbox is checked",
	 		completed:true});
	 	todo_view = new TodoView({model:my_model});
	 	expect(todo_view.$('input')).toBeChecked();
	 
	  });
	  it("Should be able to generate a checkbox that is not checked if todo property complete is false ", function(){ 
	  	var my_model = new Todo({caption:"checkbox is not checked",
	 		completed:false});
	 	var todo_view = new TodoView({model:my_model});
	 	todo_view.render();
	 	expect(todo_view.$('input')).not.toBeChecked();
	  	
	  });
	  
	  it("should have el initialized ", function(){
	  	
	  	expect(todo_view.$el.html()).toBeDefined();
	   });
	   it("should define some events ", function(){
	   		
	  		expect(todo_view.events).toBeDefined();
	   
	    });
	    it("Should have a function to toggle model's completed attribute ", function(){
	    	
	  		todo_view.toggleCheckbox();
	  		expect(my_model.get('completed')).toBe(true);
	  		
	  		expect(todo_view.$('input')).toBeChecked();
	    
	     });
	    it("should have a click event that calls toggleCheckbox ", function(){ 
	     	
	  		todo_view.$('input').change(); 
	  		expect(my_model.get('completed')).toBe(true);
	  		
	  		expect(todo_view.$('input')).toBeChecked();
	     });
	     it("Should, by convention, return the view when the render functin is called ", function(){ 
	 			expect(todo_view.render()).toBe(todo_view);
	 
	 	});
	 	it("should have a template function that takes in model data and outputs the appropriate html. ", function(){ 
	 		expect(todo_view.template).toBeDefined();
	 		expect(todo_view.$el.html()).not.toBeEmpty();
	 	});
	 	it("should have a function to change the caption", function(){ 
	 		todo_view.$(".editbox").val('caption has been changed');
	 		todo_view.changeCaption($.Event('keypress', {which:13}));
	 		expect(todo_view.$('label').html()).toBe('caption has been changed');
	 	
	 	});
	 	it("should change the caption when enter is pressed in the edit box ", function(){ 
	 			todo_view.$(".editbox").val('caption has been changed');
	 			todo_view.$('.editbox').trigger($.Event('keypress', {which:13}));
	 			expect(todo_view.$('label').html()).toBe('caption has been changed');
	 			
	 	});
	 	it("should focus on the input box when the edit function is called", function(){ 
	 		todo_view.$el.addClass("fixture");
	 		$('body').append( todo_view.$el );
	 		todo_view.edit();
	 		expect(document.activeElement).toBe('.editbox');
	 		$('.fixture').remove();
	 	});
	 	it("should focus on the input box when the caption is double clicked ", function(){
	 		todo_view.$el.addClass("fixture");
	 		$('body').append( todo_view.$el );
	 		todo_view.$('label').dblclick();
	 		expect(document.activeElement).toBe('.editbox');
	 		$('.fixture').remove();
	 		
	 	 });
	 	 describe ("it should be able to delete itself", function(){
	 		 xit("should be able to destroy the todo model item it is associated with", function(){
	 	 		todo_view.clear();
	 	 		expect(this.model).not.toBeDefined();
	 		  });
	 		  
	 		  xit("should remove itself from the dom ", function(){ 
	 		    $('body').append( todo_view.$el );
	 		  	todo_view.clear();
	 		  	var parent_exists = todo_view.$el.parent().length;
	 		  		if(parent_exists === 0){
	 		  				parent_exists = false;
	 		  			}
	 		  	expect(parent_exists).toEqual(false);
	 		  });
	 		  it("should trigger clear function when delete button is clicked ", function(){ 
	 		  		
	 		  		spyOn(todo_view, 'clear');
	 		  		todo_view.delegateEvents();
	 		  		todo_view.$('.delete').trigger("click");
	 		  		expect(todo_view.clear).toHaveBeenCalled();
	 		  });
	 		 
	 	});
	
	
});