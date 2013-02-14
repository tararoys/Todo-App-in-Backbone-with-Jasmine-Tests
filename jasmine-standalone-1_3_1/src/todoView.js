var TodoView = Backbone.View.extend({

	initialize: function(){
		this.render();
	},
	events: {
		"click input": "toggleCheckbox"
	},
	render : function() {
		if(this.model.get("completed")===true){
			this.$el.html("<input type='checkbox' checked='checked'>" + this.model.get("caption"));
			}
		else{
			this.$el.html('<input type="checkbox">' + this.model.get("caption"));
		}
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