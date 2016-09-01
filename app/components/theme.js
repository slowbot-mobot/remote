const React = require('react')

const Theme = React.createClass({
  render () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta description={this.props.metaDescription} />
        </head>
        <body>
          {this.props.children}
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
