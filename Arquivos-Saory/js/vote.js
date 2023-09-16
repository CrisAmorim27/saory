const fs = require('fs');
const voting = JSON.parse(fs.readFileSync('./Arquivos-Saory/funcoes/voting.json'))

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const delVote = (_id) => {
	voting.splice(_id,0)
    fs.writeFileSync(`./Arquivos-Saory/funcoes/voting.json`, JSON.stringify(voting))
    fs.unlinkSync(`./Arquivos-Saory/vote/${_id}.json`)
    fs.unlinkSync(`./Arquivos-Saory/${_id}.json`)
}

const addVote = async(_id,_value1,_value2,_value3,reply) => {
	voting.push(_id)
    fs.writeFileSync(`./Arquivos-Saory/${_id}.json`,'[]')
    fs.writeFileSync(`./Arquivos-Saory/vote/${_id}.json`,'[]')
    fs.writeFileSync('./Arquivos-Saory/funcoes/voting.json', JSON.stringify(voting)) 
    await sleep(2000)
    let votes = JSON.parse(fs.readFileSync(`./Arquivos-Saory/vote/${_id}.json`))  
    votes.push({
    reason: _value1 ? _value1 : '-',
    votes: _value2.trim() +'@s.whatsapp.net',
    durasi: _value3 
    })  
    fs.writeFileSync(`./Arquivos-Saory/vote/${_id}.json`, JSON.stringify(votes)) 
    setTimeout(async function() {
	let vote = JSON.parse(fs.readFileSync(`./Arquivos-Saory/${_id}.json`))
    let tru = vote.filter(a => a.voting == '✅')
    let fals = vote.filter(a => a.voting == '❌')
    reply(`*votação encerrada*\n\n*votos*\n✅ = ${tru.length}\n❌ = ${fals.length}`)
    fs.unlinkSync(`./Arquivos-Saory/vote/${_id}.json`)
    fs.unlinkSync(`./Arquivos-Saory/${_id}.json`)
    fs.writeFileSync(`./Arquivos-Saory/funcoes/voting.json`, JSON.stringify(voting)) 
    }, _value3 * 60 * 1000);
}

module.exports = {
	delVote,
	addVote,
}