const React = require('react')
import css from './signUpForm.css'

const signUpForm = React.createClass({
  getInitialState(){
    return {
      signUpEmail: {valid: true},
      signUpPassword: {valid: true},
      signUpPasswordConfirmation: {valid: true},
      signUpForm: { valid: false }
    }
  },

  handleSubmit () {
  },

  formIsValid () {
    return this.validatePassword() &&
      this.validatePasswordConfirmation &&
      this.validateEmail()
  },

  doPasswordValidation () {
    this.setState({
      signUpPassword: { valid: this.validatePassword() }
    }, {
      signUpform: { valid: this.formIsValid()  }
    })
  },

  validatePassword () {
    return this.refs.signUpPassword.value.length > 7
  },

  doPasswordConfirmationValidation () {
    this.setState({
      signUpPasswordConfirmation: {
        valid: this.validatePasswordConfirmation()
      }
    }, {
      signUpform: { valid: this.formIsValid() }
    })
  },

  validatePasswordConfirmation() {
    return this.refs.signUpPasswordConfirmation.value.length > 7 &&
      this.refs.signUpPassword.value === this.refs.signUpPasswordConfirmation.value
  },

  doEmailValidation () {
    this.setState({
      signUpEmail: { valid: this.validateEmail() }
    }, {
      signUpForm: { valid: this.formIsValid() }
    })
  },

  validateEmail () {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(this.refs.signUpEmail.value)
  },

  validate () {
    return validateEmail() && 
    validatePassword() &&
    validatePasswordConfirmation()
  },
  
  render () {
    return (
      <div className={css.component}>
        <h2>Register</h2>
        <div className={css.form}>
          <input 
            ref="signUpEmail"
            onBlur={this.doEmailValidation} 
            className={`valid-${this.state.signUpEmail.valid}`} 
            type="email" 
            name="email" 
            placeholder="your email address" 
          />
          <input
            ref="signUpPassword"
            onBlur={this.doPasswordValidation} 
            className={`valid-${this.state.signUpPassword.valid}`} 
            type="password"
            name="password"
            placeholder="account password"
          />
          <input
            ref="signUpPasswordConfirmation"
            onBlur={this.doPasswordConfirmationValidation} 
            className={`valid-${this.state.signUpPasswordConfirmation.valid}`} 
            type="password"
            name="password_confirmation"
            placeholder="confirm password"
          />
          <button
            onClick={this.handleSubmit}
            disabled={!this.state.signUpForm.valid}
          >Submit</button>
        </div>
      </div>
    )
  }
})


signUpForm.PropTypes = {
}

module.exports = signUpForm


