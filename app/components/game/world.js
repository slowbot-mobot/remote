const React = require('react')
import css from './World.css'

const World = React.createClass({
  clicker () {
    console.log('thing')
  },
  render () {
    return (
        <div className={css.component}>
          hello
          <button onClick={this.clicker}>Submit</button>
        </div>
    )
  }
})


World.PropTypes = {
}

module.exports = World


