'use strict';
var React =require('react');
var AuthorApi = require('../../../api/authorApi');

var Author = React.createClass({
		//define initial state for the component
		getInitialState:function(){
			return{
				authors: []
			};
		},

		componentWillMount() {
			this.setState({authors:AuthorApi.getAllAuthors()});
		},

	render:function() {

		var createAuthorRow = function (author){
			console.log(author);
			return(
				<tr key={author.id}>
				<td><a href={"/#authors/"+author.id}>{author.id}</a></td>
				<td>{author.firstName} {author.lastName}</td>
				</tr>
			);
		};
		return (
			<div>
				<h1>Authors</h1>
				<table className='table'>
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{this.state.authors.map(createAuthorRow,this)}
					</tbody>
				</table>
			</div>
		);
	}
});
module.exports = Author ;
