const React = require('react')
import css from './statschar.css'

const Character = React.createClass({
  render () {
    return (
      <div className={css.component}>

        Character Stats:<br/>

         Str 
         <br/>
         Int
         <br/>
         Wis
         <br/>
         Dex
         <br/>
         Cha
         <br/>
         Con
      </div>
    )
  }
})


Character.PropTypes = {
}

module.exports = Character


