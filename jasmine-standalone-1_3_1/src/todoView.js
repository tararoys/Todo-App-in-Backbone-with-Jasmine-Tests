var TodoView = Backbone.View.extend({

	events: {
		"click" : "helloWorld"
	},
	render : function() {
		if(this.model.get("completed")===true){
			this.$el.html("<input type='checkbox' checked='checked'>" + this.model.get("caption"));
			}
		else{
			this.$el.html('<input type="checkbox">' + this.model.get("caption"));
		}
	},
	helloWorld: function(){
		alert("hello world");
		}
	

});