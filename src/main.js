var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var Author = require('./components/author/authorPage');


var App = React.createClass({
		render:function() {
			var Child;
			//depends on what the url is gone be
			switch (this.props.route) {
				case 'about':
					Child = About;
					break;
				case 'author':
					Child = Author;
					break;
				default:
					Child = Home;
					break;
			}
			return (
				<div>
					<Header/>
					<Child/>
				</div>
				);
		}
});
//when event change in the url 
function render(){
	var route = window.location.hash.substr(1);//get the route
	console.log(route)
	 React.render(<App route = {route} />, document.getElementById('app'));//we pass route as a property
}
window.addEventListener('hashchange', render);
render();

/* we don't need this hardcoded rendering 
 React.render(<Home />, document.getElementById('app'));
*/ 