const React = require('react')
const Output = require('./Output')
const Input = require('./Input')

const css = require('./Game.css')

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
