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

var Yaxis = function (_Component) {
  _inherits(Yaxis, _Component);

  function Yaxis(props) {
    _classCallCheck(this, Yaxis);

    return _possibleConstructorReturn(this, (Yaxis.__proto__ || Object.getPrototypeOf(Yaxis)).call(this, props));
  }

  _createClass(Yaxis, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          margins = _props.margins,
          y = _props.y,
          yAxisClassName = _props.yAxisClassName,
          yDomain = _props.yDomain,
          yRange = _props.yRange,
          yBandPaddingInner = _props.yBandPaddingInner,
          yBandPaddingOuter = _props.yBandPaddingOuter,
          yScale = _props.yScale,
          yOrient = _props.yOrient,
          yTickOrient = _props.yTickOrient,
          yTickFormat = _props.yTickFormat,
          yTickPadding = _props.yTickPadding,
          yTickSizeOuter = _props.yTickSizeOuter,
          yTickSizeInner = _props.yTickSizeInner,
          yTicks = _props.yTicks,
          yLabel = _props.yLabel,
          yLabelPosition = _props.yLabelPosition,
          labelOffset = _props.labelOffset,
          showYAxis = _props.showYAxis,
          style = _props.style,
          yAxisStyling = _props.yAxisStyling,
          yTickValues = _props.yTickValues;


      var t;
      var axisLabel;

      if (!yRange) {
        yRange = [height - margins.top - margins.bottom, 0];
      }

      if (yOrient === 'right') {
        // y - right
        t = 'translate(' + (width - margins.right - margins.left) + ', 0)';
      } else if (yOrient === 'left') {
        // y - left
        t = 'translate(0, 0)';
      }

      if (yLabel) {
        axisLabel = _react2.default.createElement(_label2.default, {
          height: height,
          width: width,
          margins: margins,
          labelTitle: yLabel,
          labelPosition: yLabelPosition,
          labelOffset: labelOffset,
          bandPaddingInner: yBandPaddingInner,
          bandPaddingOuter: yBandPaddingOuter
        });
      }

      return _react2.default.createElement(
        'g',
        { transform: t },
        _react2.default.createElement(_axis2.default, {
          height: height,
          width: width,
          margins: margins,
          showAxis: showYAxis,
          axisClassName: yAxisClassName,
          bandPaddingInner: yBandPaddingInner,
          bandPaddingOuter: yBandPaddingOuter,
          type: 'y',
          proxy: y,
          domain: yDomain,
          range: yRange,
          scale: yScale,
          orient: yOrient,
          tickOrient: yTickOrient,
          tickFormat: yTickFormat,
          tickPadding: yTickPadding,
          tickSizeInner: yTickSizeInner,
          tickSizeOuter: yTickSizeOuter,
          ticks: yTicks,
          style: style,
          axisStyling: yAxisStyling,
          tickValues: yTickValues
        }),
        axisLabel
      );
    }
  }]);

  return Yaxis;
}(_react.Component);

Yaxis.defaultProps = _extends({
  showYAxis: true,
  yAxisClassName: 'react-d3-core__axis__yAxis',
  yScale: 'linear',
  yOrient: 'left',
  yTickOrient: 'left',
  yLabelPosition: 'left',
  yTickPadding: 3,
  yInnerTickSize: 6,
  yOuterTickSize: 6
}, _commonProps2.default);
Yaxis.propTypes = {
  height: _propTypes2.default.number.isRequired,
  width: _propTypes2.default.number.isRequired,
  margins: _propTypes2.default.object.isRequired,
  showYAxis: _propTypes2.default.bool,
  y: _propTypes2.default.func,
  yDomain: _propTypes2.default.array,
  yRange: _propTypes2.default.array,
  yScale: _propTypes2.default.string.isRequired,
  yOrient: _propTypes2.default.oneOf(['left', 'right']),
  yTickOrient: _propTypes2.default.oneOf(['left', 'right']),
  yAxisClassName: _propTypes2.default.string,
  yTickSizeInner: _propTypes2.default.number,
  yTickSizeOuter: _propTypes2.default.number,
  yBandPaddingInner: _propTypes2.default.number,
  yBandPaddingOuter: _propTypes2.default.number,
  yTickPadding: _propTypes2.default.number,
  yTickFormat: _propTypes2.default.func,
  yTicks: _propTypes2.default.array,
  style: _propTypes2.default.object,
  /*
   yAxisStyling object holds css styling classes for axis elements
   pathClassName: "someCls"
   ticksClassName: "someCls"
   textClassName: "someCls"
   */
  yAxisStyling: _propTypes2.default.object,
  yTickValues: _propTypes2.default.array
};
exports.default = Yaxis;