var React = require("react");

var ShowAddButton = React.createClass({


	render: function(){
		var classes ;
		var buttonText ;
		if( this.props.display ){
			classes = "btn btn-default btn-block";
			buttonText = "Cancel";
		} else {
			classes = "btn  btn-success btn-block";
			buttonText = "Create New Item";
		}

		return (
			<div className="container">
				<button className={classes} onClick={this.props.toggleForm}>{buttonText}</button>
			</div>	
		);

	}
});

module.exports = ShowAddButton;