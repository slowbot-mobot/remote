const React = require('react')
import css from './World.css'

const World = React.createClass({
  render () {
    return (
        <div className={css.component}>
          hello
        </div>
    )
  }
})


World.PropTypes = {
}

module.exports = World


