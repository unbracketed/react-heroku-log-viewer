var React = require('react')
var atom = require('../../store')

require('../../../node_modules/fixed-data-table/dist/fixed-data-table.css')

if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target, firstSource) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}

var FixedDataTable = require('fixed-data-table');
var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;
//var ReactPivot = require('react-pivot')


var MainHandler = React.createClass({

  render() {

    // Table data as a list of array.
    //var rows = atom.cursor('logs').toArray().map(log => ({raw: log}))
    //console.log('render', rows)

    // var reducer = function(row, memo) {
    //   memo.totalLines = (memo.totalLines || 0) + 1;
    //   return memo;
    // };
    // var calc = []

          // <ReactPivot
          //   rows={rows}
          //   dimensions={[{value: 'raw', title: 'Logs'}]}
          //   reduce={reducer}
          //   calculations={calc}
          //   activeDimensions={['Logs']}
          //   />

    //TODO only display recent

    var rows = atom.cursor('logs').toArray()
    function rowGetter(rowIndex) {
      return [rows[rowIndex]];
    }


    return (
      <div>
        <div>
          <Table
            rowHeight={50}
            rowGetter={rowGetter}
            rowsCount={rows.length}
            width={1000}
            height={600}
            headerHeight={50}>
            <Column
              label="Col 1"
              width={1000}
              dataKey={0}

              />
          </Table>

        </div>
      </div>
    )
  }
})

module.exports = MainHandler
