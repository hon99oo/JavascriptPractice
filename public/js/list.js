function List(board, title, index, dummyList) {
	this.board = board
	this.title = title
	this.index = index
	this.node = document.createElement('div')
	this.titleNode = document.createElement('div')
	this.cardsNode = document.createElement('div')
	this.node.classList.add('list')
	this.titleNode.classList.add('list_title')
	this.cardsNode.classList.add('list-cards')
	this.titleNode.setAttribute('list-index', index)
	this.titleNode.appendChild(document.createTextNode(this.title))
	this.node.appendChild(this.titleNode)
}