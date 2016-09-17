const React = require('react')
const World = require('./World')
const Character = require('./Character')

import css from './Output.css'

const Output = React.createClass({
  render () {
    return (
      <div className={css.component}>
        <Character />
        <World />
      </div>
    )
  }
})


Output.PropTypes = {
}

module.exports = Output


