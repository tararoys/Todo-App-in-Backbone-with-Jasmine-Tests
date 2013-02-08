describe ("A Todo model to create individual todo items", function(){
	
	
	it("should be able to create an instance of a todo item", function(){ 
		
		var todoitem = new Todo();
		expect(todoitem).toBeDefined();
	});
	
});