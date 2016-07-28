import React from 'react';

const PhotoGrid = React.createClass({
  render() {
    return(
      <div className="photo-grid">
        <pre>
          {/*{JSON.stringify(this.props.posts, null,' ')}*/}
          {this.props.posts.map((post, i) => <Photo />)}
        </pre>
      </div>
    )
  }
});

export default PhotoGrid;
