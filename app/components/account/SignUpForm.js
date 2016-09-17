const React = require('react')
import css from './SignUpForm.css'

const SignUpForm = React.createClass({
  render () {
    return (
      <div className={css.component}>
        <h2>Register</h2>
      </div>
    )
  }
})


SignUpForm.PropTypes = {
}

module.exports = SignUpForm


