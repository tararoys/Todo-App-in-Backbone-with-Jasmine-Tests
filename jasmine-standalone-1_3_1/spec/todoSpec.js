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
			completed: false
		}
		);
		expect(todoitem.get("completed")).toBeDefined();
	});
	it("should have the empty string as the default caption ", function(){
		var todoitem = new Todo();
		expect(todoitem.get('caption')).toBe('');
	 });
	 it("should have false as the default value for completed ", function(){ 
	 	var todoitem = new Todo();
	 	expect(todoitem.get("completed")).toBe(false);
	 });
	 it("Should be able to change the value of completed from false to true ", function(){ 
	 		var todoitem = new Todo();
	 		todoitem.set("completed", #true);
	 		expect(todoitem.get("completed")).toBe(true);
	 });
	 it("Should be able to change the value of completed from true to false ", function(){ 
	 		var todoitem = new Todo({
	 			caption: "This is completed",
	 			completed: true
	 		});
	 		todoitem.set("completed", false);
	 		expect(todoitem.get("completed")).toBe(false);
	 
	 });
	 
	
});