var ItemComponent = {
	bindings: {
		item: '='
	},
	templateUrl: 'blog/templates/partials/item.html',
	controller: function () {
		
	}
}

angular
	.module('app')
	.component('item', ItemComponent);