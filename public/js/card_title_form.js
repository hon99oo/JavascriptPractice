function buildCardTitleForm() {
	var node = document.createElement('form')
	node.id='card_title_form'
	node.innerHTML =
		'<div class="newcard_wrapper">' +
		'<textarea class="card_title_input" placeholder="Add a card..." type="text"></textarea>' +
		'<input class="card_title_submit" type="submit" value="Add">' +
		'</div>'
	node.style.display = 'none'
	return node
}