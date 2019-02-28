var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

var callbacks = [];

function addScript(src, cb) {
  if (callbacks.length === 0) {
    callbacks.push(cb);
    var s = document.createElement('script');
    s.setAttribute('src', src);
    s.onload = function () {
      return callbacks.forEach(function (cb) {
        return cb();
      });
    };
    document.body.appendChild(s);
  } else {
    callbacks.push(cb);
  }
}

var TweetEmbed = function (_React$Component) {
  _inherits(TweetEmbed, _React$Component);

  function TweetEmbed() {
    _classCallCheck(this, TweetEmbed);

    return _possibleConstructorReturn(this, (TweetEmbed.__proto__ || Object.getPrototypeOf(TweetEmbed)).apply(this, arguments));
  }

  _createClass(TweetEmbed, [{
    key: 'loadTweetForProps',
    value: function loadTweetForProps(props) {
      var _this2 = this;

      var renderTweet = function renderTweet() {
        window.twttr.ready().then(function (_ref) {
          var widgets = _ref.widgets;

          // Clear previously rendered tweet before rendering the updated tweet id
          if (_this2._div) {
            _this2._div.innerHTML = '';
          }

          var options = props.options,
              onTweetLoadSuccess = props.onTweetLoadSuccess,
              onTweetLoadError = props.onTweetLoadError;

          widgets.createTweetEmbed(_this2.props.id, _this2._div, options).then(onTweetLoadSuccess).catch(onTweetLoadError);
        });
      };

      if (!(window.twttr && window.twttr.ready)) {
        var isLocal = window.location.protocol.indexOf('file') >= 0;
        var protocol = isLocal ? this.props.protocol : '';

        addScript(protocol + '//platform.twitter.com/widgets.js', renderTweet);
      } else {
        renderTweet();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadTweetForProps(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.id !== nextProps.id || this.props.className !== nextProps.className;
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.props.id !== nextProps.id) {
        this.loadTweetForProps(nextProps);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement('div', {
        className: this.props.className,
        ref: function ref(c) {
          _this3._div = c;
        }
      });
    }
  }]);

  return TweetEmbed;
}(React.Component);

TweetEmbed.propTypes = {
  id: PropTypes.string,
  options: PropTypes.object,
  protocol: PropTypes.string,
  onTweetLoadSuccess: PropTypes.func,
  onTweetLoadError: PropTypes.func,
  className: PropTypes.string
};

TweetEmbed.defaultProps = {
  protocol: 'https:',
  options: {},
  className: null
};

export default TweetEmbed;
