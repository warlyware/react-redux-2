import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectGame } from '../actions/index';

class GameList extends Component {
  renderList() {
    return this.props.games.map((game) => {
      return(
        <li onClick={() => this.props.selectGame(game)}
        key={game.title}
        className="list-group-item">
          {game.title}
        </li>
      );
    })
  }

  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    games: state.games
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectGame: selectGame }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList);