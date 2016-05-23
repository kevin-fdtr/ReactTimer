var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        <div>
          <p>Main Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
