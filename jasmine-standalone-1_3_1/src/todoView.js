var TodoView = Backbone.View.extend({

	initialize: function(){
		this.render();
	},
	events: {
		"change input": "toggleCheckbox"
	},
	render : function() {
		//this.$el.html('<p><input type="checkbox">' + this.model.get("caption") + " completed: " + this.model.get("completed") + "</p>");
		if(this.model.get("completed")===true){
			this.$el.html("<input type='checkbox' checked='checked'>" + this.model.get("caption"));
			}
		else{
			this.$el.html('<input type="checkbox">' + this.model.get("caption"));
		}
		return this;
	},
	toggleCheckbox: function(){
		if(this.model.get('completed')===false){
			this.model.set('completed', true);
		}
		else{
			this.model.set('completed', false);
		}
		this.render();
	}
	

});