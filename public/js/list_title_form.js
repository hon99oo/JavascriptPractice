function buildListTitleForm() {
	var node = document.createElement('form')
	node.innerHTML =
		'<div class="newitem_wrapper">' +
		'<input id="list_title_input" type="text">' +
		'<input id="list_title_submit" type="submit" value="Save">' +
		'</div>'
	node.style.display = 'none'
	return node
}