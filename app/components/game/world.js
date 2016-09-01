const React = require('react')
import css from './world.css'

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


