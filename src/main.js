var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage.js');
var app = React.createClass({
		render:function() {
			var Child;
			switch (this.props.route) {
				case 'about':
					Child = About;
					break;
				default:
					Child = Home;
					break;
			}
			return(
				<div>
					<Child />
				</div>
				);
		}
});
//when event change in the url 
function render(){
	var route = window.location.hash.substr(1);
	 React.render(<App route = {route}/>, document.getElementById('app'));
}
window.addEventListener('hashchange', render);
render();
/* we don't need this hardcoded rendering 
 React.render(<Home />, document.getElementById('app'));
*/ console.log("hello");
/*var app = console.log('hello');
module.exports = App;
*/