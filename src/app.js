var _ = require('lodash')
var mithrilCore = require('mithril')
var m = require('mithril-router')(mithrilCore)

var doc = document.getElementById('therebelrobot');

var vm = {}
vm.userData = m.prop({})
console.log('VM',vm)
var mainCtrl = {}
mainCtrl.controller= require('./controller')(vm)
mainCtrl.view= require('./view')(vm)

m.route.mode = 'hash'

m.route(doc, '/', {
  '/': {
    controller: mainCtrl,
    namespace: 'root',
    root: true
  }
})

console.log('loaded mithril')