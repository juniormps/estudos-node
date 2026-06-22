// O EventEmitter é uma classe do Node.js que permite criar e gerenciar eventos personalizados. Ele é amplamente utilizado para lidar com eventos assíncronos, como cliques de mouse, conexões de rede, ou qualquer outra ação que possa ocorrer em um aplicativo. O EventEmitter fornece uma maneira de registrar ouvintes (listeners) para eventos específicos e emitir esses eventos quando necessário. Isso é útil para criar aplicativos mais flexíveis e responsivos, permitindo que diferentes partes do código se comuniquem de forma eficiente.

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
  console.log('Durante')
})

console.log('Antes')

eventEmitter.emit('start')

console.log('Depois')
