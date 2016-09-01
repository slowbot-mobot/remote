const React = require('react')
const Output = require('./output')
const Input = require('./input')

const css = require('./game.css')

const Game = React.createClass({
  render () {
    return (
      <div className={css.component}>
        <Output />
        <Input />
      </div>
    )
  }
})


Game.PropTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number
}

module.exports = Game
