"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _axis = require('./axis');

var _axis2 = _interopRequireDefault(_axis);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

var _commonProps = require('../commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Xaxis = function (_Component) {
  _inherits(Xaxis, _Component);

  function Xaxis(props) {
    _classCallCheck(this, Xaxis);

    return _possibleConstructorReturn(this, (Xaxis.__proto__ || Object.getPrototypeOf(Xaxis)).call(this, props));
  }

  _createClass(Xaxis, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          height = _props.height,
          width = _props.width,
          margins = _props.margins,
          showXAxis = _props.showXAxis,
          x = _props.x,
          xAxisClassName = _props.xAxisClassName,
          xDomain = _props.xDomain,
          xRange = _props.xRange,
          xBandPaddingInner = _props.xBandPaddingInner,
          xBandPaddingOuter = _props.xBandPaddingOuter,
          xScale = _props.xScale,
          xOrient = _props.xOrient,
          xTickOrient = _props.xTickOrient,
          xTickPadding = _props.xTickPadding,
          xTickSizeOuter = _props.xTickSizeOuter,
          xTickSizeInner = _props.xTickSizeInner,
          xTickFormat = _props.xTickFormat,
          xTicks = _props.xTicks,
          xLabel = _props.xLabel,
          xLabelPosition = _props.xLabelPosition,
          labelOffset = _props.labelOffset,
          style = _props.style,
          xAxisStyling = _props.xAxisStyling,
          xTickValues = _props.xTickValues;


      var t;
      var axisLabel;

      if (!xRange) {
        xRange = [0, width - margins.left - margins.right];
      }

      if (xOrient === 'bottom') {
        // x - bottom
        t = 'translate(0, ' + (height - margins.bottom - margins.top) + ')';
      } else if (xOrient === 'top') {
        // x - top
        t = 'translate(0, 0)';
      }

      if (xLabel) {
        axisLabel = _react2.default.createElement(_label2.default, {
          height: height,
          width: width,
          margins: margins,
          labelTitle: xLabel,
          labelPosition: xLabelPosition,
          labelOffset: labelOffset,
          bandPaddingInner: xBandPaddingInner,
          bandPaddingOuter: xBandPaddingOuter
        });
      }

      return _react2.default.createElement(
        'g',
        { transform: t },
        _react2.default.createElement(_axis2.default, {
          height: height,
          width: width,
          margins: margins,
          showAxis: showXAxis,
          axisClassName: xAxisClassName,
          bandPaddingInner: xBandPaddingInner,
          bandPaddingOuter: xBandPaddingOuter,
          type: 'x',
          proxy: x,
          domain: xDomain,
          range: xRange,
          scale: xScale,
          orient: xOrient,
          tickOrient: xTickOrient,
          tickFormat: xTickFormat,
          tickPadding: xTickPadding,
          tickSizeInner: xTickSizeInner,
          tickSizeOuter: xTickSizeOuter,
          style: style,
          ticks: xTicks,
          axisStyling: xAxisStyling,
          tickValues: xTickValues
        }),
        axisLabel
      );
    }
  }]);

  return Xaxis;
}(_react.Component);

Xaxis.defaultProps = _extends({
  showXAxis: true,
  xAxisClassName: 'react-d3-core__axis__xAxis',
  xScale: 'linear',
  xOrient: 'bottom',
  xTickOrient: 'bottom',
  xLabelPosition: 'bottom',
  xTickPadding: 3,
  xInnerTickSize: 6,
  xOuterTickSize: 6
}, _commonProps2.default);
Xaxis.propTypes = {
  height: _propTypes2.default.number.isRequired,
  width: _propTypes2.default.number.isRequired,
  margins: _propTypes2.default.object.isRequired,
  showXAxis: _propTypes2.default.bool,
  x: _propTypes2.default.func,
  xDomain: _propTypes2.default.array,
  xRange: _propTypes2.default.array,
  xScale: _propTypes2.default.string.isRequired,
  xOrient: _propTypes2.default.oneOf(['top', 'bottom']),
  xTickOrient: _propTypes2.default.oneOf(['top', 'bottom']),
  xAxisClassName: _propTypes2.default.string,
  xTickSizeInner: _propTypes2.default.number,
  xTickSizeOuter: _propTypes2.default.number,
  xBandPaddingInner: _propTypes2.default.number,
  xBandPaddingOuter: _propTypes2.default.number,
  xTickPadding: _propTypes2.default.number,
  xTickFormat: _propTypes2.default.func,
  xTicks: _propTypes2.default.array,
  style: _propTypes2.default.object,
  /*
   xAxisStyling object holds css styling classes for axis elements
   pathClassName: "someCls"
   ticksClassName: "someCls"
   textClassName: "someCls"
   */
  xAxisStyling: _propTypes2.default.object,
  xTickValues: _propTypes2.default.array
};
exports.default = Xaxis;