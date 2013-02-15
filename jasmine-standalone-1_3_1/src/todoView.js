var TodoView = Backbone.View.extend({

	initialize: function(){
		this.render();
	},
	events: {
		"change input": "toggleCheckbox"
	},
	todotmpl: function(){},
	render : function() {
	
		var todo_content = "";
		
		if(this.model.get("completed")===true){
			todo_content="<input type='checkbox' checked='checked'>" + this.model.get("caption");
			}
		else{
			todo_content='<input type="checkbox">' + this.model.get("caption");
		}
		
		this.$el.html(todo_content);
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