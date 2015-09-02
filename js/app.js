// App

// Master Dex Container

var MasterDex = React.createClass({displayName: "MasterDex",
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement(NavigationBar, null), 
        React.createElement(SpriteCircle, null)
      )
    );
  }
});

// Sprite
var SpriteCircle = React.createClass({displayName: "SpriteCircle",
  render: function() {
    return (
      React.createElement("div", {className: "sprite-circle"}, 
        React.createElement("div", {className: "monster-sprite chimchar"}
        )
      )
    );
  }
});

// Barebones Navigation Bar
var NavigationBar = React.createClass({displayName: "NavigationBar",
  render: function() {
    return (
        React.createElement("nav", null, 
          React.createElement("div", {className: "nav-wrapper"}, 
            React.createElement("a", {href: "#!", className: "brand-logo default-nav center"}, "Master Dex"), 
            React.createElement("ul", {className: "right"}, 
              React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "material-icons"}, "search")))
            )
          )
        )
    );
  }
});
React.render(
  React.createElement(MasterDex, null),
  document.getElementById('dex-nav')
);
