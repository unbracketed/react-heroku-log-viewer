var React = require("react")
var atom = require('../app/store')
var View = require('../app/views/Home/Handler')


var source      = new EventSource('/logs/lebowski-haiku');
source.addEventListener('message', function(message) {
	atom.cursor('logs').update(logs => logs.push(message.data))
});

function render(){
	React.render(<View/>, document.getElementById('content'))
}

atom.on('swap', render)
