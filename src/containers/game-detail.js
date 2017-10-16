import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameDetail extends Component {
  render() {
    if (!this.props.game) {
      return(
        <div>
          Select a game.
        </div>
      );
    }
    return(
      <div>
        <h3>Details</h3>
        <div>{this.props.game.title}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.activeGame
  };
}

export default connect(mapStateToProps)(GameDetail)