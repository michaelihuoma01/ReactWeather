var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//
//     return (
//         <div>
//             <p>It's {temp} in {location}</p>
//         </div>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return (
          <p className="text-center">It's {temp} in {location}</p>
  );
};

module.exports = WeatherMessage;
