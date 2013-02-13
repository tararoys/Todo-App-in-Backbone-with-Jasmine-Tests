var TodoListView = Backbone.View.extend({
render: function(){
	  this.$el.html('');
	  this.collection.each(function(){ this.$el.append('howdy')}, this);
	}

});