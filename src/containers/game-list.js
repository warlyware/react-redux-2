import React, { Component } from 'react';

export default class GameList extends Component {
  renderList() {
    return this.props.games.map((game) => {
      return(
        <li key={game.title}
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