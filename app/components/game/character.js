const React = require('react')
const Stats = require('./Stats')
import css from './Character.css'

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


