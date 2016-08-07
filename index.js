(function(){

  'use strict';

  var wm = new WeakMap();

  var obj = {};

  console.info('set obj => 100');
  wm.set(obj, 100);
  console.log(wm);

  console.info('has obj => true');
  console.log(wm.has(obj));

  console.info('get obj => 100');
  console.log(wm.get(obj));

  console.info('delete obj');
  wm.delete(obj);
  console.log(wm);

}());
