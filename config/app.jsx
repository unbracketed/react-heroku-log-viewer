var React = require("react")
var atom = require('../app/store')
var View = require('../app/views/Home/Handler')

import csp from "js-csp"

const ch = csp.chan()


//TODO get app from path
var source      = new EventSource('/logs/oneup-prod');
source.addEventListener('message', function(message) {
	atom.cursor('logs').update(logs => logs.push(message.data))
});

function render(){
	React.render(<View/>, document.getElementById('content'))
}

atom.on('swap', render)
render()
