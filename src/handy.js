import base from './base';
let handy = {
  // 把一個陣列的layer都parent到同一個layer
  parentAll: function(layers, parent) {
    layers.map(layer => {
      layer.parent = parent;
    })
  },
  centeredBy3: function (layers) {
    arguments[0].centerX(-(base.deviceWidth/6*2))
    arguments[1].centerX()
    arguments[2].centerX(+(base.deviceWidth/6*2))
  }
};

export default handy;
