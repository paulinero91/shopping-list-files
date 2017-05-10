//Edit
$("body").on("click", ".shopping-item-toggle", function(event){
	console.log('click')
	$(this).closest("li").find(".shopping-item").toggleClass('shopping-item__checked')
})

//Delete
$("body").on("click", ".shopping-item-delete", function(event){
	$(this).closest("li").remove()
})

//Read + Create
$('#js-shopping-list-form').on("submit", function(event){
	event.preventDefault()
	var input = $('#shopping-list-entry').val()
	create(input)
})

function create(item){
	var template = '<li><span class="shopping-item">'+item+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
	$("ul").prepend(template)
}
