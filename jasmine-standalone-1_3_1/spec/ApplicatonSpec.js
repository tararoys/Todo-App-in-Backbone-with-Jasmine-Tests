describe ("An Application that stores todo lists", function(){
	it("should have a working testing framework", function(){
		//if this test shows up when you run specrunner, you know jasmine is working
		var jasmine_works=true;
		expect(jasmine_works).toBeTruthy();
	 });
	 it("Should have loaded Backbone ", function(){
	 	expect(Backbone).toBeDefined();
	  });
	 it("Should have loaded underscore ", function(){ 
	 	expect(Backbone.Model.extend({})).toBeDefined();
	 });
});