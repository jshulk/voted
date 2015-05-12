var React  = require("react");

var FeedItem = React.createClass({
	vote: function(newCount){
		var newItem = {
			key: this.props.itemKey,
			title: this.props.title,
			desc: this.props.desc,
			voteCount: newCount
		};

		this.props.onVote(newItem);
	},
	voteUp: function(){
		debugger;
		var count = this.props.voteCount;
		var newCount = count + 1;
		this.vote(newCount);
	},
	voteDown: function(){
		var count = this.props.voteCount;
		var newCount = count - 1;
		this.vote(newCount);
	},
	render: function(){
		return (
			<li key={this.props.itemKey} className = "panel panel-default">
				<div className = "item panel-body clearfix">
					<div className="pull-left">
						<h4>{this.props.title}</h4>
						<small>{this.props.desc}</small>
					</div>
					<div className="pull-right">
						<div className="votes text-center">
							<span className ="badge badge-success">{this.props.voteCount}</span>
						</div>
						<div className="actions btn-toolbar">
							<button type="button" className="btn btn-primary" onClick={this.voteUp}>
								<span className = "glyphicon glyphicon-arrow-up "></span>
							</button>
							<button type="button" className="btn btn-primary" onClick={this.voteDown}>
								<span className = "glyphicon glyphicon-arrow-down "></span>
							</button>
						</div>
					</div>
				</div>
			</li>
		);
	}
});

module.exports = FeedItem;