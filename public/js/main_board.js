(function () {
	function Board() {
		var nextId = 0

		this.lists = []
		this.cards = {}

		this.node = document.createElement('div')
		this.titleNode = document.createElement('div')
		this.listsNode = document.createElement('div')

		this.node.id = 'board'
		this.listsNode.id = 'list_node'

		this.titleFormNode = buildListTitleForm()

		this.getNextId = function () {
			return '_' + (nextId++).toString()
		}
	}

	Board.prototype.render = function () {
		this.lists.push(new List(this, 'Add a list...', 0, true))
		for (var i = 0; i < this.lists.length; ++i) {
			this.listsNode.appendChild(this.lists[i].node)
		}
		this.lists[this.lists.length - 1].node.appendChild(this.titleFormNode)
		this.lists[this.lists.length - 1].titleNode.onclick = addListTrello(this)
		this.node.appendChild(this.titleNode)
		this.node.appendChild(this.listsNode)
	}
	document.body.onload = function () {
		var board = new Board()

		board.render()
		document.getElementById('container').appendChild(board.node)
		currentBoard = board
	}
}())
