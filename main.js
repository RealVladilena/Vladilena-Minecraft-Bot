const mineflayer = require('mineflayer')
const radarPlugin = require('mineflayer-radar')(mineflayer);

const bot = mineflayer.createBot({
    host: 'github.alice.fr',            // Ip du serveur de connexion
    username: 'Alice@SaabniaTv.fr',     // Le pseudo du bot ou l'adresse mail si vous souhaite que votre bot se connecter avec votre compte premium
    password: 'your password'           // A utiliser si vous souhaiter que votre bot se connecter avec votre compte premium
})

const { mineflayer: mineflayerViewer } = require('prismarine-viewer')
bot.once('spawn', () => {
    mineflayerViewer(bot, { port: 3007, firstPerson: true })    // Le port localhost pour pour voir dans les "oeils" du bot
})

function lookAtNearestPlayer() {
    const playerFilter = (entity) => entity.type === 'player'
    const playerEntity = bot.nearestEntity(playerFilter)

    if (!playerEntity) return

    const pos = playerEntity.position.offset(0, playerEntity.height, 0)
    bot.lookAt(pos)
}

var options = {
    host: '0.0.0.0',
    port: 3008,         // Le port pour le "radar", pour voir se qu'y a autour du bot
}
radarPlugin(bot, options);


bot.on('physicTick', lookAtNearestPlayer)
console.log('Connected')



/*
 * Ce bot n'est qu'une base à un grand cercle de pratique !!
 * Vous pouvez retrouver tout ce que vous pouvez faire avec sur ce site : https://www.npmjs.com/package/mineflayer
 * Peut-être que d'ici là, je verrais pour un intégrer plus de chose ici UwwwU
 */