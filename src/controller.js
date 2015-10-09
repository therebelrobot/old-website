var m = require('mithril')
var request = require('superagent')


module.exports = function (vm) {
  console.log('vm', vm)
  return _ctrl.bind(this, vm)
}

function _ctrl(vm) {
  console.log('main controller', vm, this)
  vm.userData = m.prop({
    bio_data:{
      experience:{
        items:[
          {}
        ]
      }
    }
  })
  request.get('http://api.therebelrobot.com').end(_afterAPI.bind({
    vm: vm
  }))
  return { // Ctrl functions

  }
}

function _afterAPI(err, response) {
  var vm = this.vm
  console.log('RESPONSE', response)
  vm.userData(response.body.me)
  console.log(vm.userData())
  m.redraw(true)
}

