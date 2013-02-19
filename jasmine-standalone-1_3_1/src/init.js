$(document).ready(function(){
	todo_list = new TodoList();
	todo_list_view = new TodoListView({collection:todo_list, el:$("#my_todo_list")});
});