import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameDetail extends Component {
  render() {
    return(
      <div>
        Game Details Here
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.activeGame
  };
}

export default connect(mapStateToProps)(BookDetail)