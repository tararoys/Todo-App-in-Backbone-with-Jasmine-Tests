var TodoView = Backbone.View.extend({

	initialize: function(){
		this.render();
	},
	events: {
		"change input": "toggleCheckbox"
	},
	template:_.template($('#item-template').html()),
	todotmpl: function(){
		var todo_content='';
		if(this.model.get("completed")===true){
			todo_content="<input type='checkbox' checked='checked'>" + this.model.get("caption");
			}
		else{
			todo_content='<input type="checkbox">' + this.model.get("caption");
		}
		return todo_content;
	},
	render : function() {
		model_data = this.model.toJSON()
		var todo_content = this.template(model_data);
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