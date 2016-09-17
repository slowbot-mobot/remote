const React = require('react')
const Theme = require('./theme')
const Game = require('./game/game')
const Account = require('./account/account')

const css = require('./index.css')

const Index = React.createClass({
  getInitialState(){
    return {
      currentPlayer: null
    }
  },

  render () {
    return (
      <Theme>
        {(this.state.currentPlayer !== null)
          ? <Game className={css.component} />
          : <Account />
        }
      </Theme>
    )
  }
})


Index.PropTypes = {
}

module.exports = Index
