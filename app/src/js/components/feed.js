var React = require("React"),
	ShowAddButton = require("./showaddbutton"),
	FeedForm = require("./feedform"),
	_ = require("lodash"),
	FeedList = require("./feedlist");

var Feed = React.createClass({
	getInitialState: function(){
		var feedItems = [
			{ key: '1', title: "Realtime Data", desc: "Firebase is cool", voteCount: 49},
			{ key: '2', title: "Javascript is fun", desc: "Lexical scoping FTW", voteCount: 34},
			{ key: '3', title: "Coffee makes you awake ", desc: "Drink responsibly", voteCount: 15}
		]

		return {
			feedItems: feedItems,
			displayForm: false
		}
	},
	toggleFormDisplay: function(){
		this.setState({
			displayForm: !this.state.displayForm
		});
	},
	addNewItem: function(newItem){
		newItem.key = (this.state.feedItems.length + 1).toString();
		var newItems = this.state.feedItems.concat([newItem]);
		console.dir(newItems);
		this.setState({
			feedItems: newItems,
			displayForm: false
		});
	},
	onVote: function(newItem){
		debugger;
		var items = _.uniq(this.state.feedItems);
		var index = _.findIndex(this.state.feedItems, function(item){
			return item.key == newItem.key;
		});
		var oldObj = items[index];
		var newItems = _.pull(items, oldObj);

		newItems.push(newItem);

		this.setState({
			feedItems: newItems
		});
	},
	render: function(){
		return (
			<div>
				<div className="container add_new_container ">
					<div className = "row">
						<ShowAddButton display = {this.state.displayForm} toggleForm={this.toggleFormDisplay} />
						<FeedForm display={this.state.displayForm} onNewItem = {this.addNewItem}/>
					</div>
				</div>
				<FeedList items = {this.state.feedItems} onVote = {this.onVote}/>
			</div>

		);
	}
});

module.exports = Feed;