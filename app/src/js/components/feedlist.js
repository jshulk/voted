var React = require("react"),
	FeedItem = require("./feeditem");

var FeedList = React.createClass({
	
	render: function(){
		var feedItems = this.props.items.map(function(item){
			return <FeedItem key = {item.key} itemKey={item.key} title = {item.title} desc={item.desc} voteCount={item.voteCount} onVote={this.props.onVote}  />
		}.bind(this));

		return (
			<div className = "container item_list_container">
				<div className = "row item_list_row">
					<div className="col-md-12">
						<ul className="item_list list-unstyled">
							{feedItems}
						</ul>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = FeedList;