var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        <div>
          {props.children}
          <p>Main Rendered</p>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
