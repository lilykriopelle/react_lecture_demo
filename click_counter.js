var ClickCounter = React.createClass({
  getInitialState: function() {
    return {clicks: 0};
  },

  increment: function() {
    this.setState({clicks: this.state.clicks + 1});
  },

  render: function() {
    return <div className="click-counter">
      <h2>Click Counter Number {this.props.number}</h2>
      <p>{this.state.clicks}</p>
      <button onClick={this.increment}>CLICK ME</button>
    </div>;
  }
});

var ManyCounters = React.createClass({
  render: function() {
    var counters = [];
    for (var i = 0; i < this.props.numCounters; i ++) {
      counters.push(<ClickCounter number={i} />);
    }

    return <div>
            {counters}
           </div>;
  }
});
