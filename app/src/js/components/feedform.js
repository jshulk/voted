var React = require("react");

var FeedForm = React.createClass({
	handleForm: function(e){
		e.preventDefault();
		var newItem = {
			title: this.refs.title.getDOMNode().value,
			desc: this.refs.desc.getDOMNode().value,
			voteCount: 0
		};

		this.refs.newItemForm.getDOMNode().reset();
		this.props.onNewItem(newItem);

	},
	render: function(){
		var display = this.props.display ? "block": "none";
		var styles = {display: display};
		return (
				<form ref = "newItemForm" style = {styles} className="container" id = "feedForm" onSubmit = {this.handleForm}>
					<div className="form-group">
						<input ref = "title" type = "text" placeholder="title" className = "form-control "/>
						<input ref = "desc" type = "text" placeholder = "description" className = "form-control"/>
						<button className = "btn btn-primary btn-block">Add</button>
					</div>
				</form>
				
		);
	}	
});

module.exports = FeedForm;