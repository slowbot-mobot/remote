const React = require('react')
import css from './theme.css'

const Theme = React.createClass({
  render () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta description={this.props.metaDescription} />
        </head>
        <body>
          <div className="container">
           {this.props.children}
          </div>
        </body>
      </html>
    )
  }
})


Theme.PropTypes = {
  title: React.PropTypes.string,
  metaDescription: React.PropTypes.string,
  children: React.PropTypes.array
}

module.exports = Theme
