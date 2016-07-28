import React from 'react';
import { Link } from 'react-router';

// React.cloneElement takes any propps from parent component and pass them to dynamic child elements
const Main = React.createClass({
  render() {
    return(
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
