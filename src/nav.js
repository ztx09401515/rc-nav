"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _nav = _interopRequireDefault(require("./nav.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mergeClass() {
  for (var _len = arguments.length, names = new Array(_len), _key = 0; _key < _len; _key++) {
    names[_key] = arguments[_key];
  }

  if (names) {
    var result = '';

    for (var _i = 0; _i < names.length; _i++) {
      var name = names[_i];

      if (name) {
        result += ' ' + name;
      }
    }

    return result;
  }
}

var Item =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _getPrototypeOf(Item).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "handlerClick",
    value: function handlerClick(pxe) {
      if (this.props.onClick) {
        this.props.onClick.apply(this, [pxe]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return Item;
}(_react.default.Component);

_defineProperty(Item, "propTypes", {
  selected: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  href: _propTypes.default.string
});

_defineProperty(Item, "defaultProps", {
  itemContent: _nav.default.itemContent
});

var SubNav =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(SubNav, _React$Component2);

  function SubNav() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, SubNav);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SubNav)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {}), _temp));
  }

  _createClass(SubNav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props,
          state = this.state,
          display = props.display,
          subNavClass = props.mode === 'vertical' ? _nav.default.subNav + ' ' + _nav.default.subNavVertical : _nav.default.subNav;
      var results = [props.title];

      if (display) {
        results.push(_react.default.createElement("ul", {
          key: 'subNav',
          className: subNavClass
        }, _react.default.Children.map(this.props.children, function (el, index) {
          if (el.type) {
            var Type = el.type;

            switch (Type) {
              case Item:
                return _react.default.createElement("li", {
                  key: index,
                  onClick: el.props.onClick,
                  className: el.props.selected ? mergeClass(_nav.default.navItem, _nav.default.itemSelect) : _nav.default.navItem
                }, _react.default.createElement("a", {
                  href: el.props.href,
                  onClick: el.props.onClick
                }, _react.default.createElement("span", null, _react.default.createElement(Type, _extends({}, el.props, {
                  float: 'none',
                  key: index
                })))));

              case SubNav:
                return _react.default.createElement("li", {
                  onMouseLeave: function onMouseLeave() {
                    var nstate = {};
                    nstate[index] = false;

                    _this2.setState(nstate);
                  },
                  onMouseOver: function onMouseOver() {
                    var nstate = {};
                    nstate[index] = true;

                    _this2.setState(nstate);
                  },
                  key: index,
                  className: el.props.selected ? mergeClass(_nav.default.navItem, _nav.default.itemSelect) : _nav.default.navItem
                }, _react.default.createElement("a", {
                  href: el.props.href,
                  onClick: el.props.onTitleClick
                }, _react.default.createElement("span", null, _react.default.createElement(Type, _extends({
                  key: index
                }, el.props, {
                  display: state[index] ? true : false,
                  mode: props.mode,
                  float: 'none'
                })))));

              default:
                break;
            }
          }
        })));
      }

      return results;
    }
  }]);

  return SubNav;
}(_react.default.Component);

_defineProperty(SubNav, "propTypes", {
  onTitleClick: _propTypes.default.func,
  selected: _propTypes.default.bool,
  display: _propTypes.default.bool,
  title: _propTypes.default.node.isRequired,
  href: _propTypes.default.string
});

var Nav =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Nav, _React$Component3);

  function Nav() {
    var _getPrototypeOf3;

    var _temp2, _this3;

    _classCallCheck(this, Nav);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _possibleConstructorReturn(_this3, (_temp2 = _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Nav)).call.apply(_getPrototypeOf3, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {}), _temp2));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var props = this.props,
          state = this.state,
          thiscomp = this,
          className = mergeClass(_nav.default.nav, props.className);

      var result = _react.default.createElement("ul", {
        style: props.style,
        className: className
      }, _react.default.Children.map(this.props.children, function (el, index) {
        if (el && el.type) {
          var Type = el.type;

          switch (el.type) {
            case Item:
              return _react.default.createElement("li", {
                key: index,
                onClick: el.props.onClick,
                onMouseLeave: function onMouseLeave() {
                  var nstate = {};
                  nstate[index] = false;
                  thiscomp.setState(nstate);
                },
                onMouseOver: function onMouseOver() {
                  var nstate = {};
                  nstate[index] = true;
                  thiscomp.setState(nstate);
                },
                className: el.props.selected ? mergeClass(_nav.default.navItem, _nav.default.itemSelect) : _nav.default.navItem,
                style: Object.assign({}, {
                  float: props.mode === 'vertical' ? 'none' : 'left'
                }, props.navItemStyle ? props.navItemStyle : null)
              }, _react.default.createElement("a", {
                href: el.props.href,
                onClick: el.props.onClick
              }, _react.default.createElement("span", null, _react.default.createElement(Type, _extends({}, el.props, {
                key: index
              })))));

            case SubNav:
              return _react.default.createElement("li", {
                key: index,
                onClick: el.props.onTitleClick,
                onMouseLeave: function onMouseLeave() {
                  var nstate = {};
                  nstate[index] = false;
                  thiscomp.setState(nstate);
                },
                onMouseOver: function onMouseOver() {
                  var nstate = {};
                  nstate[index] = true;
                  thiscomp.setState(nstate);
                },
                className: el.props.selected ? mergeClass(_nav.default.navItem, _nav.default.itemSelect) : _nav.default.navItem,
                style: Object.assign({}, {
                  float: props.mode == 'vertical' ? 'none' : 'left'
                }, props.navItemStyle ? props.navItemStyle : null)
              }, _react.default.createElement("a", {
                href: el.props.href,
                onClick: el.props.onClick
              }, _react.default.createElement("span", null, _react.default.createElement(Type, _extends({}, el.props, {
                mode: props.mode,
                display: state[index] ? true : false,
                key: index
              })))));

            default:
              break;
          }
        }
      }));

      return result;
    }
  }]);

  return Nav;
}(_react.default.Component);

exports.default = Nav;

_defineProperty(Nav, "propTypes", {
  style: _propTypes.default.object,
  className: _propTypes.default.string
});

_defineProperty(Nav, "defaultProps", {
  mode: 'horizontal'
});

_defineProperty(Nav, "Item", Item);

_defineProperty(Nav, "SubNav", SubNav);