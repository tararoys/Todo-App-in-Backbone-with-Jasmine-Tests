var TodoView = Backbone.View.extend({
	render : function() {
		if(this.model.get("completed")===true){
			this.$el.html("<input checked='checked'>" + this.model.get("caption"));
			}
		else{
			this.$el.html(this.model.get("caption"));
		}
	}

});