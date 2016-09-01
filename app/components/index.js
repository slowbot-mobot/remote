const React = require('react')
const Theme = require('./theme')
const Game = require('./game/game')

const css = require('./index.css')

const Index = React.createClass({
  render () {
    return (
      <Theme>
        <Game className={css.component} />
      </Theme>
    )
  }
})


Index.PropTypes = {
}

module.exports = Index
