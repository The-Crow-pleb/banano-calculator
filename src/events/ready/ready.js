module.exports = async(client) => {

    const {loadLangs} = require('../../utils/languages/languages')
    const db = require('../../configs/dbs/dbLogin');
    
    db.then(() => console.log(`${client.user.username} bananoloaded into DB!`)).catch(err => console.log(err))
    console.log(`${client.user.username} Bananoloaded!`)

    loadLangs(client)
}