const React = require('react')
import css from './character.css'

const Character = React.createClass({
  render () {
    return (
      <div className={css.component}>
        character
      </div>
    )
  }
})


Character.PropTypes = {
}

module.exports = Character


