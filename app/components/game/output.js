const React = require('react')
const World = require('./world')
const Character = require('./character')

import css from './output.css'

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


