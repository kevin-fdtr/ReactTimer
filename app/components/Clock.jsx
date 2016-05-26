var React = require('react');

var Clock = React.createClass({
  formatSeconds: function (totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.florr(totalSeconds / 60);
    return minutes  + ":" + seconds;
  },
  render: function () {
    return (
      <div>

      </div>
    );
  }
});

module.exports = Clock;
