const React = require('react')
import css from './input.css'

const Input = React.createClass({
  render () {
    return (
      <div className={css.component}>
        <input className={css.input} type="text" />
      </div>
    )
  }
})


Input.PropTypes = {
}

module.exports = Input


