var app = angular.module('dropfile', []);
app.directive('drop', function() {
    return {
        scope: {
			drop: '&',
		},
        link: function(scope, element) {
			function dragOverOrEnter(e) {
				if (e.preventDefault) e.preventDefault();
				e.dataTransfer.effectAllowed = 'move';
				this.classList.add('dragover');
				return false;
			}
			element.bind('dragover',dragOverOrEnter)
			element.bind('dragenter',dragOverOrEnter)
			element.bind(
				'dragleave',
			    function(e) {
					 if (e.preventDefault) e.preventDefault();
			        this.classList.remove('dragover');
			        return false;
			    }
			);
			element.bind(
			    'drop',
			    function(e) {
					if (e.stopPropagation) e.stopPropagation();
					if (e.preventDefault) e.preventDefault();
					this.classList.remove('dragover');					
					var fn = scope.drop();
					if ('undefined' !== typeof fn) {
						fn(e.dataTransfer.files);
					}
			        return false;
			    }
			);
        }
    }
});

