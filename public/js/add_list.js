function addList(board) {
	return function () {
		var titleInput = document.getElementById('list_title_input')

		document.getElementById('list_title_submit').onclick = titleButtonClick
		board.titleFormNode.style.display = 'block'
		titleInput.focus()

		function titleButtonClick(evt) {
			evt.preventDefault()
			var title = titleInput.value.trim()
			var index = board.lists.length - 1
			var list

			board.titleFormNode.style.display = 'none'
			titleInput.value = ''
			if (!title) {
				return
			}

			list = new List(board, title, index)
			board.lists.splice(index, 0, list)
			board.listsNode.insertBefore(list.node,
				board.lists[index + 1].node)
			board.lists[index + 1].titleNode.setAttribute('list-index', index + 1)
		}
	}
}