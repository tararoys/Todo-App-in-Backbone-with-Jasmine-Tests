var TodoList = Backbone.Collection.extend({
	model: Todo,
	localStorage: new Backbone.LocalStorage('Todo List Store')
});