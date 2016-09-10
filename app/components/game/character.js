const React = require('react')
const Stats = require('./statschar')
import css from './character.css'

const Character = React.createClass({
  render () {
    return (
      <div className={css.component}>
        character
        <Stats />
      </div>
    )
  }
})


Character.PropTypes = {
}

module.exports = Character


