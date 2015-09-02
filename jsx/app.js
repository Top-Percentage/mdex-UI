// App

// Master Dex Container

var MasterDex = React.createClass({
  render: function() {
    return(
      <div>
        <NavigationBar />
        <SpriteCircle />
      </div>
    );
  }
});

// Sprite
var SpriteCircle = React.createClass({
  render: function() {
    return (
      <div className="sprite-circle">
        <div className="monster-sprite chimchar">
        </div>
      </div>
    );
  }
});

// Barebones Navigation Bar
var NavigationBar = React.createClass({
  render: function() {
    return (
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo default-nav center">Master Dex</a>
            <ul className="right">
              <li><a href="#"><i className="material-icons">search</i></a></li>
            </ul>
          </div>
        </nav>
    );
  }
});
React.render(
  <MasterDex />,
  document.getElementById('dex-nav')
);
