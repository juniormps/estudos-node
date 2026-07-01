// Instalando pacotes globais. Para instalar um pacote globalmente, você pode usar o comando `npm install -g <nome-do-pacote>`. Pacotes globais são úteis para ferramentas de linha de comando que você deseja acessar de qualquer lugar no seu sistema.

// Excepcionalmente, alguns pacotes instalados globalmente, como o loadash, devem ter o comando `npm link <nome-do-pacote>` para que possam ser usados em projetos locais. Isso cria um link simbólico do pacote global para o seu projeto local, permitindo que você use suas funcionalidades sem precisar instalá-lo novamente.


const _ = require('lodash')

const arr = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8]

console.log(_.sortedUniq(arr))
