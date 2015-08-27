var React = require('react');
var ReactIntl = require('react-intl');

var IntlMixin = ReactIntl.IntlMixin;
var FormattedRelative = ReactIntl.FormattedRelative;
var FormattedNumber = ReactIntl.FormattedNumber;

var DetailItem = React.createClass({

  mixinx: [IntlMixin],

  propTypes: {
    location: React.PropTypes.object
  },

  getCSVURL: function (l) {
    return 'https://api.openaq.org/v1/measurements?format=csv&location=' + l.location;
  },

  render () {
    var l = this.props.location;
    return (
      <div className='location-detail'>
        <div className='inner'>
          <div className='title'><a href={l.sourceURL} title='See source site' target='_blank'>{l.location}</a></div>
          <div className='extra'><span>Count</span>: <FormattedNumber value={l.count} /> measurements</div>
          <div className='extra'><span>Updated</span>: <FormattedRelative value={l.lastUpdated} /></div>
          <div className='extra'><span>Available</span>: {l.parameters.join(', ')}</div>
          <div className='extra'><span>Resolution</span>: {l.resolution}</div>
        </div>
        <div className='divider'></div>
        <div className='links'>
          <a href={this.getCSVURL(l)} title='Download CSV of all data'><span className='collecticon collecticon-download'></span></a>
        </div>
      </div>
    );
  }
});

module.exports = DetailItem;