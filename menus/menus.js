const menu = (prefix, numerodn, NomeDoBot, sender) => {
  
// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
┏───────────┓
*❘*  《𝘽𝙚𝙢 𝙑𝙞𝙣𝙙𝙤》
*❘* 𝙐𝙨𝙪𝙖𝙧𝙞𝙤:  @${sender.split("@")[0]}
*❘* 𝘿𝙤𝙣𝙤: ${numerodn}
*❘* 𝘽𝙤𝙩: ${NomeDoBot}
┗────────────┛


*╔═💦═════·͙•̩̩⁺˚•̩💧•̩˚‧͙⁺̩‧͙══════💦═╗*
  ＭＥＮＵＳ ＤＥ ＣＯＭＡＮＤＯＳ
*╚═💦═════·͙̩̩•⁺˚•̩💧•̩˚⁺‧͙⁺‧͙════💦══╝*

*╭────ೄྀ💧ˊˎ─────╮*
*│*     USUÁRIOS 
*╰────ೄྀ💧ˊˎ─────╯*
[✥]❃ ${prefix}Alugar
[✥]❃ ${prefix}Bot
[✥]❃ ${prefix}Perfil
[✥]❃ ${prefix}Ping
[✥]❃ ${prefix}Avalie "Quão Bom"
[✥]❃ ${prefix}Bug "Questione"
[✥]❃ ${prefix}Sugestão "Fale"
[✥]❃ ${prefix}Fazernick
[✥]❃ ${prefix}Calcular 1 + 1
[✥]❃ ${prefix}Tabela "Simbolos"
*╰────ೄྀ💧 ˊˎ─────╯*

*╭────ೄྀ💧ˊˎ─────╮*
*│*   MENU DIVERSOS
*╰────ೄྀ💧ˊˎ─────╯* 
[✥]❃ ${prefix}Infodono
[✥]❃ ${prefix}Menucompleto
[✥]❃ ${prefix}Menulist
[✥]❃ ${prefix}Menudono
[✥]❃ ${prefix}Menuadm
[✥]❃ ${prefix}Menupremium
[✥]❃ ${prefix}Menuefeitos
[✥]❃ ${prefix}Menulogos
[✥]❃ ${prefix}MenuBrincadeiras
[✥]❃ ${prefix}Menudownloads
[✥]❃ ${prefix}Menusticker
*╰────ೄྀ💧 ˊˎ─────╯*


*╭────ೄྀ💧ˊˎ─────╮*
*│*  OUTROS COMANDOS
*╰────ೄྀ💧ˊˎ─────╯* 
[✥]❃ ${prefix}Atividade
[✥]❃ ${prefix}Rankativo
[✥]❃ ${prefix}Checkativo 
[✥]❃ ${prefix}Ranklevel (DE-TODOS)
[✥]❃ ${prefix}Simi "Diga Algo"
[✥]❃ ${prefix}Conselhobiblico 
*╰────ೄྀ💧 ˊˎ─────╯*
`;
};

exports.menu = menu;

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

const infotransmitir = (prefix, pushname) => {
return`
Olá ${pushname}, irei explicar como funciona os seguintes comando:

${prefix}rgtm

${prefix}tirardatm

${prefix}fazertm

${prefix}listatm

O comando rgtm, você entra no grupo ou privado de alguém que deseja que ele receba transmissão, digita ${prefix}rgtm

E caso queira tirar o grupo da transmissão, entra nele e digita 

${prefix}tirardatm ou se já saiu dele, procura o id dele no comando ${prefix}listatm

E caso queira fazer a transmissão para todos os grupos que foi registrado para transmissão, digita 

${prefix}fazertm e digita o que quer enviar para todos os grupos que foi registrado ou marque uma imagem já com legenda, ou envie uma imagem com legenda, ou documento, ou vídeo, ou texto, então é isso..
`;
};

exports.infotransmitir = infotransmitir;


const anotacao = (prefix) => {
return `

Olá. Se você está lendo isso, provavelmente está curioso sobre o comando anotação. 

Existe os seguintes comando:

1 ${prefix}anotações

2 ${prefix}anotar

3 ${prefix}tirar_nota

4 ${prefix}nota titulo


O primeiro ele mostra todas as anotações do grupo, criada. 

O segundo, ele é usado para criar a nota, tipo um bloco de notas, exemplo: ${prefix}anotar ABC|ABC são 3 letras do alfabeto, utilizada bastante

Isso foi um exemplo, mas pode ser utilizado da fórma que quiser, mas lembre que antes do | é o título, depois é a anotação.

Ja o terceiro, é pra tirar a nota, Exemplo como expliquei, ${prefix}tirar_nota ABC 

Com isso a anotação que estava criada foi apagada. 

Já o terceiro, ele é pra buscar a anotação que deseja, pelo título, exemplo: ${prefix}nota ABC

É isso... 

Boa sorte. 
`;
};

exports.anotacao = anotacao;

// MENU DE ADMINISTRADORES 

const adms = (prefix, sender) => { 
 
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

	return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
*╔════ °༻•° 🩸 °•༺°════╗*
├── MENU DE ADMS
├───────────────
│ Usuário: @${sender.split("@")[0]}
╞───────────────┘
│✾▹ ${prefix}ativacoes
│✾▹ ${prefix}so_adm
│✾▹ ${prefix}listanegra (NUMERO)
│✾▹ ${prefix}tirardalista (NUMERO)
│✾▹ ${prefix}listanegraG (NÚMERO)
│✾▹ ${prefix}tirardalistaG (NÚMERO)
│✾▹ ${prefix}Kick [@] (pra-remover) 
│✾▹ ${prefix}Ban (responder-mensagem)
│✾▹ ${prefix}Promover [@] (Ser-ADM)
│✾▹ ${prefix}Rebaixar [@] (rebaixar-adm)
│✾▹ ${prefix}Totag (menciona-algo)
│✾▹ ${prefix}Grupo f/a
│✾▹ ${prefix}Status
│✾▹ ${prefix}Limpar (texto-invisível-gp)
│✾▹ ${prefix}Atividades (DO-GRUPO)
│✾▹ ${prefix}Linkgp
│✾▹ ${prefix}Grupoinfo
│✾▹ ${prefix}Hidetag (txt) (marcação)
│✾▹ ${prefix}Marcar (marca tds do gp)
│✾▹ ${prefix}Marcar2 (Marca-tds-Wa.me/)
│✾▹ ${prefix}Anagrama 1 / 0
│✾▹ ${prefix}Antipalavra 1 / 0
│✾▹ ${prefix}Descgp (TXT)
│✾▹ ${prefix}Nomegp (Nome)
│✾▹ ${prefix}Criartabela (ESCREVA-ALGO)
│✾▹ ${prefix}Tabelagp
*╚════ °❀•° 🩸 °•❀°════╝*

`;
};

exports.adms = adms;

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 


const infoaluguel = (prefix, pushname) => {
return`

Olá ${pushname} Irei explicar como utilizar o comando 

${prefix}rg_aluguel

O exemplo é: ${prefix}rg_aluguel 01/01|coloca o número do dono aqui

Você coloca o mês que vai expirar, ae ele vai enviar uma mensagem no seu privado no dia que expirar, e vai renovar sozinho pro próximo mês, na mesma data, só não coloque pro mês 12, pois senão ele vai renovar pro mês 13 kkkk, mas só tirar o registro do aluguel..

Comando de tirar um aluguel do registro..

${prefix}rm_aluguel iddogrupo 

Em iddogrupo você tem que pegar o id do grupo, que está registrado o aluguel, use o comando ${prefix}iddogrupo 

E contem também o comando ${prefix}lista_aluguel que visualiza todos aluguel já registrado... 

Lá você pode pegar o id do grupo também, pra tirar do registro kkkk

Boa sorte..
`;
};

exports.infoaluguel = infoaluguel;

// MENU DE DONO

const menudono = (prefix, sender) => {
	
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode alterar ele tod0, menos as definições, só se quiser apagar a definição completa. 	

return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
	
╭───────────────┐
├── MENU DE DONO
├───────────────
│ Usuário: @${sender.split("@")[0]}
├───────────────┐
│ Config: ${prefix}Configurar-bot
╞───────────────┘
│✾▹ ${prefix}ativacoes_dono
│✾▹ ${prefix}Bangp
│✾▹ ${prefix}Unbangp
│✾▹ ${prefix}Fotomenu (MARCAR-IMG) 
│✾▹ ${prefix}Blockcmd  (cmd)
│✾▹ ${prefix}Unblockcmd (cmd)
│✾▹ ${prefix}Legenda_estrangeiro (msg)
│✾▹ ${prefix}Legendabv (oq qr)
│✾▹ ${prefix}Legendasaiu (oq qr)
│✾▹ ${prefix}Legendasaiu2 (oq qr)
│✾▹ ${prefix}Legendabv2 (oq qr)
│✾▹ ${prefix}Fundobemvindo (marcar-img)
│✾▹ ${prefix}Fundosaiu (marcar-img)
│✾▹ ${prefix}Serpremium
│✾▹ ${prefix}Listagp
│✾▹ ${prefix}Antipalavrão 1 / 0
│✾▹ ${prefix}Antiligar 1 / 0
│✾▹ ${prefix}Addpalavra (palavrão)
│✾▹ ${prefix}Delpalavra (palavrão)
│✾▹ ${prefix}Ativo
│✾▹ ${prefix}Ausente (fale-oq-faz)
│✾▹ ${prefix}Delpremium @(marca)
│✾▹ ${prefix}Addpremium @(marca)
│✾▹ ${prefix}Clonar [@] (rouba ft de prf)
│✾▹ ${prefix}Fotobot (img, = foto do BT)
│✾▹ ${prefix}Descriçãogp (digite-algo)
│✾▹ ${prefix}Block [@] (bloq de usar cmds) 
│✾▹ ${prefix}Unblock [@] (desbloquear) 
│✾▹ ${prefix}Setprefix  (prefixo-novo)
│✾▹ ${prefix}Bcgp (TM-PRA-PV-MEMBROS)
╰──────────┘
`;

};

exports.menudono = menudono;

// MENU DE LOGOS 

const menulogos = (prefix, sender) => {
  
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  
  return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

╭───────────────┐
├── MENU DE LOGOS
├───────────────
│ Usuário: @${sender.split("@")[0]}
╰──────────┐
╭──────────┴─┐
│ Logos De 1 Texto
├────────────
│✾▹ ${prefix}logos1 (txt) 
│
╰──────────┐
╭──────────┴─┐
│ Logos De 2 Texto
├────────────
│✾▹ ${prefix}Comporn (txt/txt) 
│✾▹ ${prefix}Glitch (txt/txt)
│✾▹ ${prefix}Glitch3 (txt/txt)
│✾▹ ${prefix}Grafity (txt-txt)
│✾▹ ${prefix}Space (txt/txt)
│✾▹ ${prefix}Marvel (txt/txt)
│✾▹ ${prefix}Stone (txt/txt)
│✾▹ ${prefix}Steel (txt/txt)
│
╰──────────┘
`;
};

exports.menulogos = menulogos;

// MENU DE ALTERAR ÁUDIOS E VÍDEOS

const alteradores = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return`
╭───────────────┐
├ Alteradores de audio/video 
├───────────────
│ Usuário: @${sender.split("@")[0]}
╰──────────┐
╭──────────┴─┐
│ Alterar Videos
├────────────
│✾▹ ${prefix}Videolento (marca)
│✾▹ ${prefix}Videorapido (marca)
│✾▹ ${prefix}Videocontrario (marca)
╰──────────┐
╭──────────┴─┐
│ Alterar Audios
├────────────
│✾▹ ${prefix}Audiolento (marca)
│✾▹ ${prefix}Audiorapido (marca)
│✾▹ ${prefix}Grave (marca)
│✾▹ ${prefix}Grave2 (marca)
│✾▹ ${prefix}Esquilo (marca)
│✾▹ ${prefix}Estourar (marca)
│✾▹ ${prefix}Bass (marca)
│✾▹ ${prefix}Bass2 (marca)
│✾▹ ${prefix}Vozmenino (marca)
╰──────────┘
`;
};

exports.alteradores = alteradores;

// MENU PREMIUM 

const menuprem = (prefix, sender) => { 

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
╭───────────────┐
├─ Menu Premium
├───────────────
│ Usuário: @${sender.split("@")[0]}
╰──────────┐
╭──────────┴─┐
│✾▹ ${prefix}Destrava
│✾▹ ${prefix}Destrava2
│✾▹ ${prefix}Ddd (DDD)
│✾▹ ${prefix}Cep (NÚMERO)
│✾▹ ${prefix}GerarCPF
│✾▹ ${prefix}PremiumList
│✾▹ ${prefix}EncurtaLink (LINK)
╰──────────┘
`;
};

exports.menuprem = menuprem;

// MENU DE BRINCADEIRAS.. 

const brincadeiras = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

╭───────────────┐
├─ Menu De Brincadeiras
├───────────────
│ Usuário: @${sender.split("@")[0]}
╰──────────┐
╭──────────┴─┐
│✾▹ ${prefix}Gay (marca (@))
│✾▹ ${prefix}Feio (marca (@))
│✾▹ ${prefix}Corno (marca (@))
│✾▹ ${prefix}Vesgo (marca (@))
│✾▹ ${prefix}Bebado (marca (@))
│✾▹ ${prefix}Gostoso (marca (@))
│✾▹ ${prefix}Gostosa (marca (@))
│✾▹ ${prefix}Beijo (marca (@))
│✾▹ ${prefix}Matar (marca (@))
│✾▹ ${prefix}Tapa (marca (@))
│✾▹ ${prefix}Chute (marca (@))
│✾▹ ${prefix}Dogolpe (marca (@))   
│✾▹ ${prefix}Nazista (marca (@))
│✾▹ ${prefix}Chance (fale algo) 
│✾▹ ${prefix}Casal   
│✾▹ ${prefix}Rankgay     
│✾▹ ${prefix}Rankgado
│✾▹ ${prefix}Rankcorno  
│✾▹ ${prefix}Rankgostoso
│✾▹ ${prefix}Rankgostosa
│✾▹ ${prefix}Ranknazista
│✾▹ ${prefix}Rankotakus
│✾▹ ${prefix}Rankpau
╰──────────┘
`;
};

exports.brincadeiras = brincadeiras;

// MENU DE EFEITOS DE IMAGEM, MONTAGEM Tops Kkk

const efeitos = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╭───────────────┐
├─ Menu De Efeitos
├───────────────
│ Usuário: @${sender.split("@")[0]}
╰──────────┐
╭──────────┴─┐
│✾▹ ${prefix}Legenda (marcar)-(img)
│✾▹ ${prefix}Procurado (marcar)-(img)
│✾▹ ${prefix}Hitler (marcar)-(img)
│✾▹ ${prefix}Preso (marcar)-(img)
│✾▹ ${prefix}Lixo (marcar)-(img)
│✾▹ ${prefix}Deletem (marcar)-(img)
│✾▹ ${prefix}Morto (marcar)-(img) 
│✾▹ ${prefix}Lgbt (marcar)-(img) 
│
╰──────────┘
`;
};

exports.efeitos = efeitos;
