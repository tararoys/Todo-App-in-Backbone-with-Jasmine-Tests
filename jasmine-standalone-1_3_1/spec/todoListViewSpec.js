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
		//todo_list_view.render();
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
	 it("should create a new todo when you hit enter in the new todo input box, and display it", function(){
	 	todo_list_view.$('#addtodo').val('create new todo list item');
	 	todo_list_view.$('#addtodo').trigger($.Event('keypress', {which:13}));
	 	expect(todo_list.at(0)).toBeDefined();
	 	expect(todo_list_view.$el.html()).toContain('create new todo');
	 
	  });
	 it("should remove item from collection and from element when item is deleted ", function(){ 
	 		var todo1 = new Todo({caption: "create new todo", completed:false});
	 		todo_list.add(todo1);
	 		
	 		expect(todo_list_view.el.innerHTML).toContain('create new todo');
	 		expect(todo_list.at(0)).toBeDefined();
	 		todo_list_view.$('.delete').click();//delete an item
	 		
	 		expect(todo_list_view.$el.html()).not.toContain('create new todo');
	 		expect(todo_list.at(0)).not.toBeDefined();
	 });
	 describe ("A way to show only the completed items in the list", function(){
	 	it("has a function called completedFilter that takes in todo items and returns them only if they are completed, and returns null if they are not. ", function(){ 
	 			var todo1 = new Todo({caption: "create new todo", completed:false});
	 			var filteredTodo1 = todo_list_view.completedFilter(todo1);
	 			expect(filteredTodo1).toBe(null);
	 			
	 			var todo2 = new Todo({caption: "create new todo", completed:true});
	 			var filteredTodo2 = todo_list_view.completedFilter(todo2);
	 			expect(filteredTodo2).toBe(todo2);
	 		});
	 	it("has a flag for when we want todos to be filtered through completedFilter ", function(){ 
	 			expect(todo_list_view.filter_name).toBeDefined();
	 			todo_list_view.filter_name="show_only_completed";
	 			expect(todo_list_view.filter_name).toBe("show_only_completed");
	 	
	 	});
	 	it("when only_show_completed flag is set, should dump every todo through completedFilter before rendering ", function(){
	 			todo_list_view.filter_name="show_only_completed";
	 			var todo1 = new Todo({caption: "create new todo", completed:false});
				var todo2 = new Todo({caption: "see if Todo List", completed:true});
				todo_list.add(todo1);
				todo_list.add(todo2);
				expect(todo_list_view.el.innerHTML).not.toContain('create new todo');
	 			
	 	
	 	 });
	 	 it("function that turns on the only_show_completed flag and rerenders", function(){ 
	 	 	
	 	 	var todo1 = new Todo({caption: "create new todo", completed:false});
			var todo2 = new Todo({caption: "see if Todo List", completed:true});
			todo_list.add(todo1);
			todo_list.add(todo2);
			todo_list_view.turnOnOnlyShowCompleted();
			expect(todo_list_view.filter_name).toBe("show_only_completed");
			expect(todo_list_view.el.innerHTML).not.toContain('create new todo');
	 	 	expect(todo_list_view.el.innerHTML).toContain('see if');
	 	 });
	 	 
	 	it("calls turnOnOnlyShowCompleted when you press completed link", function(){ 
	 		
	 		spyOn(todo_list_view, 'turnOnOnlyShowCompleted');
	 		todo_list_view.delegateEvents();
	 		todo_list_view.$('.show_completed').click();
	 		expect(todo_list_view.turnOnOnlyShowCompleted).toHaveBeenCalled();
	 	
	 	});
	 	
	});
	describe ("A way to show only active items in a list", function(){
		it("has a function called activeFilter that takes in todo items and returns them only if they are active, and returns null if they are not. ", function(){ 
	 			var todo1 = new Todo({caption: "create new todo", completed:false});
	 			var filteredTodo1 = todo_list_view.activeFilter(todo1);
	 			expect(filteredTodo1).toBe(todo1);
	 			
	 			var todo2 = new Todo({caption: "create new todo", completed:true});
	 			var filteredTodo2 = todo_list_view.activeFilter(todo2);
	 			expect(filteredTodo2).toBe(null);
	 		});
	 		it("has a flag for when we want todos to be filtered through activeFilter ", function(){ 
	 			expect(todo_list_view.filter_name).toBeDefined();
	 			todo_list_view.filter_name="show_only_active";
	 			expect(todo_list_view.filter_name).toBe("show_only_active");
	 		});
	 		it("when only_show_completed flag is set, should dump every todo through completedFilter before rendering ", function(){
	 			todo_list_view.filter_name="show_only_active";
	 			var todo1 = new Todo({caption: "create new todo", completed:false});
				var todo2 = new Todo({caption: "see if Todo List", completed:true});
				todo_list.add(todo1);
				todo_list.add(todo2);
				expect(todo_list_view.el.innerHTML).not.toContain('see if Todo List');
			});
			it("function that turns on the only_show_active flag and rerenders", function(){ 
	 	 	
	 	 	var todo1 = new Todo({caption: "create new todo", completed:false});
			var todo2 = new Todo({caption: "see if Todo List", completed:true});
			todo_list.add(todo1);
			todo_list.add(todo2);
			todo_list_view.turnOnOnlyShowActive();
			expect(todo_list_view.filter_name).toBe("show_only_active");
			expect(todo_list_view.el.innerHTML).toContain('create new todo');
	 	 	expect(todo_list_view.el.innerHTML).not.toContain('see if');
	 	 });
	 	 
	 	it("calls turnOnOnlyShowActive when you press actived link", function(){ 
	 		
	 		spyOn(todo_list_view, 'turnOnOnlyShowActive');
	 		todo_list_view.delegateEvents();
	 		todo_list_view.$('.show_active').click();
	 		expect(todo_list_view.turnOnOnlyShowActive).toHaveBeenCalled();
	 	
	 	});
	});
	describe ("A way to show all the the todos", function(){
		it("has a flag for when we want todos to be filtered through activeFilter ", function(){ 
	 			expect(todo_list_view.filter_name).toBeDefined();
	 			todo_list_view.filter_name="show_all";
	 			expect(todo_list_view.filter_name).toBe("show_all");
	 		});
	 	it("when show_all flag is set, should dump every todo through completedFilter before rendering ", function(){
	 			todo_list_view.filter_name="show_all";
	 			var todo1 = new Todo({caption: "create new todo", completed:false});
				var todo2 = new Todo({caption: "see if Todo List", completed:true});
				todo_list.add(todo1);
				todo_list.add(todo2);
				expect(todo_list_view.el.innerHTML).toContain('see if Todo List');
				expect(todo_list_view.el.innerHTML).toContain('create new todo');
		});
});
});