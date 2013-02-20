var TodoView = Backbone.View.extend({

	initialize: function(){
		this.render();
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
		
	},
	events: {
		"change .toggle": "toggleCheckbox",
		"keypress .editbox":"changeCaption",
		"click label":"edit",
		"click .delete": "clear"
	},
	template:_.template($('#item-template').html()),
	
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
	},
	changeCaption: function(e){
		var enterkey= 13;
	if( e.which !== enterkey){
		return;
	}
		this.model.set('caption', this.$('.editbox').val());
	},
	edit: function(){
		this.$('.editbox').focus();
		
	},
	clear: function(){
		this.model.destroy();
	
	}
	

});