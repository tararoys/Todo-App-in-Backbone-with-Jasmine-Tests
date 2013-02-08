describe ("A Todo model (to create individual todo list items)", function(){
	
	
	it("should be able to create an instance of a todo item", function(){ 
		
		var todoitem = new Todo();
		expect(todoitem).toBeDefined();
	});
	it("should have a caption", function(){ 
		var todoitem = new Todo({
			caption: "Todo item"
		}
		);
		expect(todoitem.get("caption")).toBeDefined();
	});
	it("should have a checkbox to show it it is done. ", function(){ 
		var todoitem = new Todo({
			completed: "Todo item"
		}
		);
		expect(todoitem.get("completed")).toBeDefined();
	});
	
});