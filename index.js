/* BY RAMDANI OFFICIAL

=> NOTES
• MAU AMBIL CASE? ADD NAMA RAMDANI OFFICIAL DI THX TO
• JGN DIPERJUAL BELIKAN
• THX TO JGN DI GANTI
• NAMA OTHER RAMDANI OFFICIAL JGN DIHAPUS
*/
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    processTime,
    GroupSettingChange
} = require('@adiwajshing/baileys')
api = "https://myselfff.herokuapp.com/docs"
const { color, bgcolor } = require('./Z2/color') 
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./Z2/functions')
const { fetchJson, fetchText } = require('./Z2/fetcher')
const fs = require('fs')
const http = require("http")
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg') 
const axios = require("axios")
const { arts } = require('./Z4')
const moment = require('moment-timezone')  
const setting = JSON.parse(fs.readFileSync('./Z1/settings.json'))
const tomxic = JSON.parse(fs.readFileSync('./Z1/toxic.json'))
const { toxic1, toxic2, toxic3, toxic4, toxic5, toxic6, toxic7, toxic8, 
toxic9, toxic10, toxic11, toxic12, toxic13, toxic14, toxic15, toxic16} = tomxic
prefix = setting.prefix
nama = setting.nama
prosess = setting.prosess
donasi = setting.donasi
dana = setting.dana
gopay = setting.gopay
pulsa = setting.pulsa
namabot = setting.namabot
oownerNumber = setting.oownerNumber
tz = `➪`
art1 = false
art2 = false
art3 = false
art4 = false
art5 = false
blocked = [] 
const antilink = []
const antitoxic = []
const antitag = []
const antivirtex = []
const prem = []
const ban = []
limitawal = setting.limitawal
const limit = JSON.parse(fs.readFileSync('./Z2/limit.json'))
xrandom = fs.readFileSync('./Z2/xrandom.webp')
zrandom = fs.readFileSync('./Z2/zrandom.webp')
helpimg = fs.readFileSync('./Z2/helpimg.jpeg')
audio1 = fs.readFileSync('./Z3/nayla1.m4a')
audio2 = fs.readFileSync('./Z3/nayla2.m4a')
audio3 = fs.readFileSync('./Z3/nayla3.m4a')
audio4 = fs.readFileSync('./Z3/nayla4.m4a')
audio5 = fs.readFileSync('./Z3/nayla5.m4a')
audio6 = fs.readFileSync('./Z3/nayla6.m4a')
audio7 = fs.readFileSync('./Z3/nayla7.m4a')
audio8 = fs.readFileSync('./Z3/nayla8.m4a')
audio9 = fs.readFileSync('./Z3/nayla9.m4a')
audio10 = fs.readFileSync('./Z3/nayla10.m4a')
audio11 = fs.readFileSync('./Z3/nayla11.m4a')
audio12 = fs.readFileSync('./Z3/nayla12.m4a')
audio13 = fs.readFileSync('./Z3/nayla13.m4a')
audio14 = fs.readFileSync('./Z3/nayla14.m4a')
audio15 = fs.readFileSync('./Z3/nayla15.m4a')
audio16 = fs.readFileSync('./Z3/nayla16.m4a')
audio17 = fs.readFileSync('./Z3/nayla17.m4a')
audio18 = fs.readFileSync('./Z3/nayla18.m4a')
audio19 = fs.readFileSync('./Z3/nayla19.m4a')
audio20 = fs.readFileSync('./Z3/nayla20.m4a') 
            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`
            }   
            versibot = [2, 2147, 16]         
         	async function starts() {
       	    const _0x3db00d=_0x4a9c;(function(_0x44ca38,_0x1f63ad){const _0x1e7ca1=_0x4a9c,_0x403898=_0x44ca38();while(!![]){try{const _0x5148c3=parseInt(_0x1e7ca1(0xcb))/0x1+parseInt(_0x1e7ca1(0xca))/0x2*(-parseInt(_0x1e7ca1(0xc8))/0x3)+parseInt(_0x1e7ca1(0xc9))/0x4+-parseInt(_0x1e7ca1(0xc5))/0x5*(parseInt(_0x1e7ca1(0xc1))/0x6)+parseInt(_0x1e7ca1(0xc7))/0x7+parseInt(_0x1e7ca1(0xb6))/0x8+-parseInt(_0x1e7ca1(0xbf))/0x9*(parseInt(_0x1e7ca1(0xbe))/0xa);if(_0x5148c3===_0x1f63ad)break;else _0x403898['push'](_0x403898['shift']());}catch(_0x27a21){_0x403898['push'](_0x403898['shift']());}}}(_0xcf23,0xedf85));const nayla=new WAConnection();function _0xcf23(){const _0x2c7b25=['4532952AFYrai','existsSync','open','Connected','writeFileSync','connecting','version','warn','3490ilqwVv','279ToFQFS','string','191796hQtzuB','stringify','./simi.json','level','200zsDUXt','loadAuthInfo','6074040BnbSAz','1128LZwCyk','3000112KgbURw','682REDYjE','208033oDZLRL'];_0xcf23=function(){return _0x2c7b25;};return _0xcf23();}function _0x4a9c(_0x2e7152,_0x3f7da7){const _0xcf23ac=_0xcf23();return _0x4a9c=function(_0x4a9ce0,_0x27c72e){_0x4a9ce0=_0x4a9ce0-0xb6;let _0x243231=_0xcf23ac[_0x4a9ce0];return _0x243231;},_0x4a9c(_0x2e7152,_0x3f7da7);}nayla[_0x3db00d(0xbc)]=versibot,nayla['logger'][_0x3db00d(0xc4)]=_0x3db00d(0xbd),console['log'](banner[_0x3db00d(0xc0)]),nayla['on']('qr',()=>{}),fs[_0x3db00d(0xb7)](_0x3db00d(0xc3))&&nayla[_0x3db00d(0xc6)](_0x3db00d(0xc3)),nayla['on'](_0x3db00d(0xbb),()=>{start('2','Connecting...');}),nayla['on'](_0x3db00d(0xb8),()=>{const _0x378dc8=_0x3db00d;success('2',_0x378dc8(0xb9));}),await nayla['connect']({'timeoutMs':0x1e*0x3e8}),fs[_0x3db00d(0xba)](_0x3db00d(0xc3),JSON[_0x3db00d(0xc2)](nayla['base64EncodedAuthInfo'](),null,'\x09'));
        	nayla.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	        }
         	})        	 
         	nayla.on('group-participants-update', async (anu) => { 	    
		    function getJeneng (jid)  {
  			let v = jid === nayla.user.jid ? nayla.user : nayla.contacts[jid] || { notify: jid.replace(/@.+/, '') }
  			let PhoneNumber = jid.split('@')[0]
  			return v.notify || '+'+PhoneNumber
 	 		}
		    const memJid = anu.participants[0]
		    const pushnem = getJeneng(memJid)
		    try {
			const mdata = await nayla.groupMetadata(anu.jid)
			const iniGc = anu.jid.endsWith('@g.us')
			const jumlahMem = iniGc ? mdata.participants : ''
			if (anu.action == 'add') {
			let nnnyz2 = fs.readFileSync(`Z2/welcome.jpeg`)
            const nnnyz3 = await nayla.prepareMessage(mdata.id, nnnyz2, MessageType.location, {thumbnail: nnnyz2})
            let nnnyz4 = nnnyz3.message["ephemeralMessage"] ? nnnyz3.message.ephemeralMessage : nnnyz3
            const nnnyz5 = [
            {buttonId: 'id1', buttonText: {displayText: 'WELCOME'}, type: 1}]
            const nnnyz6 = {contentText: `[ *SELAMAT DATANG* ]\n${tz} *NAME* : @${memJid.split('@')[0]}\n${tz} *GROUP* : ${mdata.subject}\n${tz} *MEMBER* : ${jumlahMem.length}\n${tz}intro intro!!! \n${tz}Nama lengkap:  \n${tz}Nama panggilan: \n${tz}Hobi: \n${tz}Umur: \n${tz}Gender: \n${tz}Kelas: \n${tz}Tinggi badan: \n${tz}Berat badan : \n${tz}Agama: \n${tz}Golongan darah:\n${tz}Status: \n${tz}Nama pacar:\n${tz}Jumlah mantan: \n${tz}Nama mantan: \n${tz}Nama bapak : \n${tz}Nama ibu :\n${tz}Nama kakak:\n${tz}Kakak online:\n${tz}Kakak kandung/tiri:\n${tz}Jumlah kakak: \n${tz}Nama adek:\n${tz}Adek online:\n${tz}Adek kandung/tiri:\n${tz}Jumlah adek: \n${tz}Nama kakek:\n${tz}Kakek dari ayah :\n${tz}Kakek dari ibu :\n${tz}Nama nenek\n${tz}Nenek dari ayah :\n${tz}Nenek dari ibu :\n${tz}Nama bibi\n${tz}Bibi dari ayah :\n${tz}Bibi dari ibu :\n${tz}Nama paman\n${tz}Bibi dari ayah :\n${tz}Bibi dari ibu :\n${tz}KTP: \n${tz}SIM: \n${tz}STNK: \n${tz}BPKB:\n${tz}KK: \n${tz}Alamat rumah:\n${tz}RT: \n${tz}RW:\n${tz}KELURAHAN: \n${tz}KECAMATAN: \n${tz}KABUPATEN: \n${tz}KOTA:\n${tz}PROVINSI:\n${tz}PLANET:\n${tz}GALAXY:\n${tz}UNIVERSE:\n${tz}LANGIT:\n${tz}DARATAN: \n${tz}LAUTAN: \n${tz}KEPULAUAN:\n${tz}SAMUDRA: \n${tz}UKURAN SEPATU:\n${tz}UKURAN BAJU: \n${tz}UKURAN CELANA: \n${tz}LEBAR PINGGANG: \n${tz}PANJANG TANGAN:\n${tz}PANJANG KAKI:\n${tz}MAKANAN FAVORIT:\n${tz}MINUMAN FAVORIT:\n${tz}FILM FAVORIT:\n${tz}SINETRON FAVORIT:\n${tz}GAME FAVORIT:\n${tz}ANIME FAVORIT:\n${tz}MANGA FAVORIT:\n${tz}MANHUA FAVORIT:\n${tz}MANHWA FAVORIT:\n${tz}CHANNEL YOUTUBE:\n${tz}INSTAGRAM:\n${tz}TWITTER: \n${tz}FACEBOOK:\n${tz}MUSIC FAVORIT:\n${tz}SIFAT:\n${tz}SIKAP: \n${tz}ZODIAK:\n${tz}TANGGAL LAHIR:\n${tz}MERK HP:\n${tz}MERK MOTOR:\n${tz}MERK MOBIL:\n${tz}TINGKAT RUMAH:\n${tz}ALAMAT SEKOLAH:\n${tz}Ukuran daleman:\n${tz}Ukuran atasan : \n${tz}Diameter kepala :\n${tz}Statistik tubuh \n${tz}Diameter perut :\n${tz}Diameter lengan :\n${tz}Diameter paha :\n${tz}Diameter lutut :\n${tz}Diameter betis:\n${tz}Panjang tangan :\n${tz}Panjang kaki :\n${tz}Panjang kepala :\n${tz}Lebar hidung :\n${tz}Cita cita :\n${tz}Hobi :\n${tz}Jenis hewan peliharaan :\n${tz}Nama hewan:\n${tz}Diameter rumah:\n${tz}Waifu:\n${tz}Husbu:\n${tz}Loli kesukaan :\n${tz}Shota kesukaan :\n${tz}Punya brp teman :\n${tz}Teman online :\n${tz}Teman offline :\n${tz}Teman main game:\n${tz}Teman sekolah:\n${tz}Nemu link grup ini dari mana :\n${tz}Kenal sama siapa aj d grup ini :\n${tz}Org paling cantik yg lu kenal:\n${tz}Org paling ganteng yg lu kenal :\n${tz}Nama wali kelas:\n${tz}Nama kepala sekolah :\n${tz}Nma ketua kelas:\n${tz}Wakil ketua kls:\n${tz}Sekertaris :\n${tz}Sekertaris 2:\n${tz}Bendahara:\n${tz}Bendahara 2:\n${tz}Nama presiden:\n${tz}Nama wakil:\n${tz}Nma org yg lu kejar:`, footerText: `© botz by ${nama} || 2022`, buttons: nnnyz5, headerType: 6, locationMessage: nnnyz4.message.locationMessage}
            nayla.sendMessage(mdata.id,  nnnyz6, MessageType.buttonsMessage,{caption: 'whatsapp',"contextInfo": {text: 'BOTZ19', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, "mentionedJid" : [memJid], },sendEphemeral: true})                         
			}
            if (anu.action == 'remove') {
            let nnnyz2 = fs.readFileSync(`Z2/out.jpeg`)
            const nnnyz3 = await nayla.prepareMessage(mdata.id, nnnyz2, MessageType.location, {thumbnail: nnnyz2})
            let nnnyz4 = nnnyz3.message["ephemeralMessage"] ? nnnyz3.message.ephemeralMessage : nnnyz3
            const nnnyz5 = [
            {buttonId: 'id1', buttonText: {displayText: 'BYEEEE'}, type: 1}]
            const nnnyz6 = {contentText: `[ *SELAMAT TINGGAL BEBAN KELUARGA* ]\n${tz} *NAME* : @${memJid.split('@')[0]}\n${tz} *GROUP* : ${mdata.subject}\n${tz} *MEMBER* : ${jumlahMem.length}`, footerText: `© botz by ${nama} || 2022`, buttons: nnnyz5, headerType: 6, locationMessage: nnnyz4.message.locationMessage}
            nayla.sendMessage(mdata.id,  nnnyz6, MessageType.buttonsMessage,{caption: 'whatsapp',"contextInfo": {text: 'BOTZ19', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, "mentionedJid" : [memJid], },sendEphemeral: true})             
            }
		    } catch (e) {
			console.log(e)
		    }
        	})   
        	function _0x2ac2(_0x594960,_0x3036b9){const _0x6d5bb7=_0x6d5b();return _0x2ac2=function(_0x2ac26c,_0x56736f){_0x2ac26c=_0x2ac26c-0x130;let _0x442784=_0x6d5bb7[_0x2ac26c];return _0x442784;},_0x2ac2(_0x594960,_0x3036b9);}const _0x53d2a9=_0x2ac2;function _0x6d5b(){const _0x320abb=['split','\x20TELAH\x20DITURUNKAN,\x20MENJADI\x20MEMBER\x20GRUB','412100ABgOdS','group-participants-update','text','jid','4OzQZmm','participants','sendMessage','2320790ejOMhK','action','*[\x20PROMOTE\x20DETECTION\x20]*\x0aJABATAN\x20USER\x20@','groupMetadata','promote','9GZEpPa','demote','63636DqrTXn','6323595EEqFFi','6048376QUGqOa','1773876YDltQz','777YPSzjh','66Nsookr',',\x20TELAH\x20DINAIKKAN,\x20MENJADI\x20ADMIN\x20GRUB','3918048wtUHNF'];_0x6d5b=function(){return _0x320abb;};return _0x6d5b();}(function(_0x26949a,_0x389a86){const _0x423e31=_0x2ac2,_0x5d1854=_0x26949a();while(!![]){try{const _0x5b57d6=-parseInt(_0x423e31(0x13d))/0x1+-parseInt(_0x423e31(0x136))/0x2+parseInt(_0x423e31(0x13a))/0x3+-parseInt(_0x423e31(0x141))/0x4*(-parseInt(_0x423e31(0x134))/0x5)+parseInt(_0x423e31(0x133))/0x6*(-parseInt(_0x423e31(0x137))/0x7)+-parseInt(_0x423e31(0x135))/0x8*(parseInt(_0x423e31(0x131))/0x9)+parseInt(_0x423e31(0x144))/0xa*(parseInt(_0x423e31(0x138))/0xb);if(_0x5b57d6===_0x389a86)break;else _0x5d1854['push'](_0x5d1854['shift']());}catch(_0x3e1291){_0x5d1854['push'](_0x5d1854['shift']());}}}(_0x6d5b,0xb26ea),nayla['on'](_0x53d2a9(0x13e),async _0x18a4b6=>{const _0xb76e1b=_0x53d2a9,_0x3da135=await nayla[_0xb76e1b(0x147)](_0x18a4b6[_0xb76e1b(0x140)]);if(_0x18a4b6[_0xb76e1b(0x145)]==_0xb76e1b(0x132))num=_0x18a4b6[_0xb76e1b(0x142)][0x0],teks='*[\x20DEMOTE\x20DETECTION\x20]*\x0aJABATAN\x20USER\x20@'+num[_0xb76e1b(0x13b)]('@')[0x0]+_0xb76e1b(0x13c),nayla[_0xb76e1b(0x143)](_0x3da135['id'],teks,MessageType[_0xb76e1b(0x13f)],{'contextInfo':{'mentionedJid':[num]}});else _0x18a4b6[_0xb76e1b(0x145)]==_0xb76e1b(0x130)&&(num=_0x18a4b6[_0xb76e1b(0x142)][0x0],teks=_0xb76e1b(0x146)+num[_0xb76e1b(0x13b)]('@')[0x0]+_0xb76e1b(0x139),nayla['sendMessage'](_0x3da135['id'],teks,MessageType[_0xb76e1b(0x13f)],{'contextInfo':{'mentionedJid':[num]}}));}));
         	nayla.on('chat-update', async (nay) => {
	      	try {
            if (!nay.hasNewMessage) return
            nay = nay.messages.all()[0]
			if (!nay.message) return
			if (nay.key && nay.key.remoteJid == 'status@broadcast') return
		//	if (nay.key.fromMe) return
			global.prefix
			global.blocked	
			runtime = process.uptime()		
			const content = JSON.stringify(nay.message)
			const from = nay.key.remoteJid
			nayla.chatRead(from)
			const type = Object.keys(nay.message)[0]			 
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && nay.message.conversation.startsWith(prefix)) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption.startsWith(prefix) ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption.startsWith(prefix) ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text.startsWith(prefix) ? nay.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			var pes = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : ''			
			const command1 = body.slice(2).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isCmd = body.startsWith(prefix)
			const nayNumber = nayla.user.jid
			const ownerNumber = [`${oownerNumber}@s.whatsapp.net`]				 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? nay.participant : nay.key.remoteJid
			const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isnayGroupAdmins = groupAdmins.includes(nayNumber) || false 
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const isGroupAdmins = groupAdmins.includes(sender) || false			 
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = prem.includes(sender) || isOwner	
			const isBotGroupAdmins = groupAdmins.includes(nayNumber) || false			
			emote = ['😁','😆','😉','😋','😎','😍','😘','🥴','🤩','🤪','🤫','😗','😚','☺','🙂','🤗','🤥','🤔','😐','😣','😮','😝','🙃','😲','😤','☹️','😦','😬','😳','😡']
			const emoji = emote[Math.floor(Math.random() * (emote.length))]			 
			codename = nayla.contacts[sender] != undefined ? nayla.contacts[sender].vname || nayla.contacts[sender].notify : undefined			 				 
		    buttonsR = (type === 'buttonsResponseMessage') ? nay.message.buttonsResponseMessage.selectedDisplayText : '' || ''
		    fakereply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption": `textnya`} } }
		    nay1 = { 
	        key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: {extendedTextMessage: {text: `${nama} TELAH TERVERIFIKASI\nRUNTIME : ${kyun(runtime)} [ EMOTE : ${emoji} ]`,contextInfo: {participant: `0@s.whatsapp.net`}}}}	 			
			nayz1 = { 
	        key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: {extendedTextMessage: {text: `${tz} FITUR : *${command}* [ EMOTE : ${emoji} ]`,contextInfo: {participant: `0@s.whatsapp.net`}}}}	 		
			const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}						 
			const reply = (teks) => {nayla.sendMessage(from, teks, text, {quoted: nay1})}	
			const isAntitoxic = isGroup ? antitoxic.includes(from) : false
			const isAntitag= isGroup ? antitag.includes(from) : false 
			const toxicc = (teks) => {
			if (!isAntitoxic) return
			if (budy.includes(teks)) {  
			toxic = fs.readFileSync('./Z2/toxic.webp')
			nayla.sendMessage(from, toxic, sticker, {quoted: nay})}}	
			const Reply = (teks) => {nayla.sendMessage(from, teks, text, {quoted: nayz1})}			            
            const random = (teks) => {nayla.sendMessage(from, `[ *SILAHKAN MASUKAN TEXT* ]\n${tz} *CONTOH* : ${prefix + command} ${teks}`, text, {quoted: nay1})}
			const sendMess = (hehe, teks) => {nayla.sendMessage(hehe, teks, text, {quoted:nay1})}
			const sendAudio = (teks) => {nayla.sendMessage(from, teks, audio, {mimetype:"audio/mp4", thumbnail:Buffer.alloc(0), quoted:nay1})}
			const sendVn = (teks) => {nayla.sendMessage(from, teks, audio, {mimetype:"audio/mp4", ptt:true, quoted:nay1})}
			const sendImage = (teks, teks1) => {nayla.sendMessage(from, teks, image, {caption:teks1, quoted:nay1, thumbnail:Buffer.alloc(0)})}
			const sendVideo = (teks, teks1) => {nayla.sendMessage(from, teks, video, {caption:teks1, thumbnail:Buffer.alloc(0), quoted:nay1})}
			const soundRandom = (teks) => {
			nayla.updatePresence(from, Presence.recording) 
            const gtts = require('./Z2/gtts')("id")
            const ndakbisa =[`Ini dia orang yang ter${teks} di grub ini`]
            const dtt = ndakbisa[Math.floor(Math.random() * ndakbisa.length)]
            ranm = getRandom('.mp3')
            dtt.length > 600
            ? reply('Textnya kebanyakan om')
            : gtts.save(ranm, dtt, function() {
            const S1 = groupMembers		     
 		    const S2 = S1[Math.floor(Math.random() * S1.length)]
            nayla.sendMessage(from, fs.readFileSync(ranm), audio, {mimetype:"audio/mp4", ptt:true, quoted: { key: { fromMe: false, participant: `${S2.jid.split('@')[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `Kok A-aku??😳`} } }})
            fs.unlinkSync(ranm)
            })}
            const soundMy = (teks) => {
			nayla.updatePresence(from, Presence.recording) 
            const gtts1 = require('./Z2/gtts')("id")
            const gtts2 =[`Ini dia orang yang ter${teks} di grub ini`]
            const gtts3 = gtts2[Math.floor(Math.random() * gtts2.length)]
            ranm = getRandom('.mp3')
            gtts3.length > 600
            ? reply('Textnya kebanyakan om')
            : gtts1.save(ranm, gtts3, function() {             
            nayla.sendMessage(from, fs.readFileSync(ranm), audio, {mimetype:"audio/mp4", ptt:true, quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `Kok A-aku??😳`} } }})
            fs.unlinkSync(ranm)
            })}
			const sendStick = (teks) => {nayla.sendMessage(from, teks, sticker, {quoted:nay1})}
			const timers = (teks) => {
			setTimeout( () => {reply("[❗] 20 DETIK LAGI")}, 10000)
			setTimeout( () => {reply("[❗] 10 DETIK LAGI")}, 20000)
			setTimeout( () => {reply("[❗] WAKTU HABIS" + `\n${tz} *JAWABAN* : ${teks}`)}, 30000)}	
			const mentions = (teks, memberr, id) => {(id == null || id == undefined || id == false) ? nayla.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nayla.sendMessage(from, teks.trim(), extendedText, {quoted: nay1, contextInfo: {"mentionedJid": memberr}})}						 	
			colors = ['red','white','black','blue','yellow','green']			 
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	     	aq = args.join(' ')	 
	     	MessReply = {
            textpro : `[ *SILAHKAN MASUKAN TEXT* ]\n${tz} *CONTOH* : ${prefix + command} HALO`
            }            
            angka = ['1','2','3','4','5','6','7','8','9']
			const randomnay1 = angka[Math.floor(Math.random() * (angka.length))]
			const randomnay2 = angka[Math.floor(Math.random() * (angka.length))]
            const mentionByTag = type == "extendedTextMessage" && nay.message.extendedTextMessage.contextInfo != null ? nay.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByReply = type == "extendedTextMessage" && nay.message.extendedTextMessage.contextInfo != null ? nay.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : []
			const isAntiLink = isGroup ? antilink.includes(from) : false 
			const isAntiVirtex = isGroup ? antivirtex.includes(from) : false 
			const mentionUser = mention != undefined ? mention.filter(n => n) : []	 	 
            // REPLY ONLY  
            only = {
            botadmin : "MAAF FITUR INI HANYA BISA DIGUNAKAN JIKA BOT MENJADI ADMIN",           
            group : "MAAF FITUR INI HANYA BISA DIGUNAKAN DI GROUP",           
            admin : "MAAF FITUR INI HANYA BISA DIGUNAKAN OLEH ADMIN GROUP",
            owner : "MAAF FITUR INI HANYA BISA DIGUNAKAN OLEH OWNER BOT",
            member : "MAAF FITUR INI HANYA BISA DIGUNAKAN OLEH MEMBER GROUP",
            pribadi : "MAAF FITUR INI HANYA BISA DIGUNAKAN DIPESAN PRIBADI",
            premium : "MAAF FITUR INI HANYA BISA DIGUNAKAN USER PREMIUM"
            }  
            if (art1 == false) {aart = arts.arts1}
            if (art2 == true) {aart = arts.arts2}
            if (art3 == true) {aart = arts.arts3}    
            if (art4 == true) {aart = arts.arts4}    
            if (art5 == true) {aart = arts.arts5}        
            codename = nayla.contacts[sender] != undefined ? nayla.contacts[sender].vname || nayla.contacts[sender].notify : undefined
		    if (!isGroup && isCmd) console.log('\Z1b[1;31m=\Z1b[1;37m>', '[\Z1b[1;32m=>\Z1b[1;37m]', color(`[ ${namabot} ]`, 'yellow'), color('NAMA', 'red'), color(codename, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('=>', 'yellow'), color(command), 'DI :', color('PESAN PRIBADI', 'yellow')) 
			if (isCmd && isGroup) console.log('\Z1b[1;31m=\Z1b[1;37m>', '[\Z1b[1;32m=>\Z1b[1;37m]', color(`[ ${namabot} ]`, 'yellow'), color('NAMA', 'red'), color(codename, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('=>', 'yellow'), color(command), 'DI :', color(groupName, 'yellow'))	  	     	 			 
			const checkLimit = (sender) => {
          	let found = false
            for (let lmt of limit) {
            if (lmt.id === sender) {
            let limitCounts = limitawal - lmt.limit
            if (limitCounts <= 0) return nayla.sendMessage(from,`MAAF USER ${codename} LIMIT KAMU TELAH HABIS, SILAHKAN GET/DAPATKAN LIMIT DENGAN CARA KETIK COMMAND ${prefix}claim`, text,{ quoted: nay1 })
            nayla.sendMessage(from, `${limitCounts}`, text, { quoted : nay1 })
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            limit.push(obj)
            fs.writeFileSync('./Z2/limit.json', JSON.stringify(limit))
            nayla.sendMessage(from, `${limitCounts}`, text, { quoted : nay1 })
            }
			} 
			const limitAdd = (sender) => {
            if (isOwner) {
                return;
            }
            if (isPrem) {
                return;
            }
            var position = false;
            Object.keys(limit).forEach((i) => {
            if (limit[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            limit[position].limit += 1;
            fs.writeFileSync('./Z2/limit.json', JSON.stringify(limit));
            }
            }   
            const isLimit = (sender) =>{  
		    let position = false
            for (let i of limit) {
            if (i.id === sender) {
         	let limits = i.limit
            if (limits >= limitawal ) {
            position = true
            reply(`MAAF USER ${codename} LIMIT KAMU TELAH HABIS, SILAHKAN GET/DAPATKAN LIMIT DENGAN CARA KETIK COMMAND ${prefix}claim`)
            return true
            } else {
          	limit
            position = true
            return false
            }
            }
            }
            if (position === false) {
           	let obj = { id : sender, limit : 1 }
            limit.push(obj)
            fs.writeFileSync('./Z2/limit.json',JSON.stringify(limit))
            return false
            }
            }
            const bayarLimit = (userid, amount) => {
         	let position = false
            Object.keys(limit).forEach((i) => {
            if (limit[i].id === userid) {
            position = i
            }
            })
            if (position !== false) {
            limit[position].limit -= amount
            fs.writeFileSync('./Z2/limit.json', JSON.stringify(limit))
            }
            }
			// BUTTON
			const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nama}\n`
            + 'ORG:Owner;\n'
            + `TEL;type=CELL;type=VOICE;waid=${oownerNumber}:+${oownerNumber}\n`
            + 'END:VCARD'			 
			if (buttonsR === 'TIDAK') {	
			reply("TERIMAKASIH TELAH MEMBERIKAN PENDAPAT ANDA TENTANG BOT INI")
			nayla.sendMessage(`${oownerNumber}@s.whatsapp.net`, `[ *NEW MESSAGE* ]\n${tz} *NAME* : ${codename}\n${tz} *TIME* : ${time}\n${tz} *PENDAPAT* : TIDAK MENYUKAI BOT INI`, text,{quoted:nay1})
			}
			if (buttonsR === 'IYAA') {	
			reply("TERIMAKASIH TELAH MEMBERIKAN PENDAPAT ANDA TENTANG BOT INI")
			nayla.sendMessage(`${oownerNumber}@s.whatsapp.net`, `[ *NEW MESSAGE* ]\n${tz} *NAME* : ${codename}\n${tz} *TIME* : ${time}\n${tz} *PENDAPAT* : SANGAT MENYUKAI BOT INI`, text,{quoted:nay1})
			}			 			 
            const txt = nay.message.conversation                   			
			switch(command) {			 
			case 'owner':
			nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: nay1})
			break	
			case 'pendapat':
			const A1 = [
            {buttonId: 'id1', buttonText: {displayText: `IYAA`}, type: 1},            
            {buttonId: 'id2', buttonText: {displayText: `TIDAK`}, type: 1}]
            const B1 = {contentText: "APAKAH ANDA MENYUKAI BOT INI?", footerText: `Berikan pendapat anda...`,buttons: A1,headerType: 1}      
			nayla.sendMessage(from, B1, MessageType.buttonsMessage, {quoted:nay1})
			break
			case 'donasi':
			dnasi = `${donasi}\n${tz} *PULSA* : ${pulsa}\n${tz} *GOPAY* : ${gopay}\n${tz} *DANA* : ${dana}`
			reply(dnasi)
			break	 	 
		    case 'setart':
		    if (!isOwner) return reply(only.owner)
		    if ((args[0]) === '1') {
		    art1 = true
		    reply("SUKSES SET ART #1")
		    } else if ((args[0]) === '2') {
		    art2 = true
		    reply("SUKSES SET ART #2")
		    } else if ((args[0]) === '3') {
		    art3 = true
		    reply("SUKSES SET ART #3")
		    } else if ((args[0]) === '4') {
		    art4 = true
		    reply("SUKSES SET ART #4")
		    } else if ((args[0]) === '5') {
		    art5 = true
		    reply("SUKSES SET ART #5")
		    } else {
		    rart = `[ *SET ART* ]\n`,
		    rart += `${tz} *CONTOH* : ${prefix}setart 1\n`,
		    rart += `${tz} *PILIHAN ART* : 1, 2, 3, 4, dan 5`
		    reply(rart)
		    }
		    break
			case 'ban':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
			if (!isOwner) return reply(only.owner)
			bnnd = body.slice(6)
			ban.push(`${bnnd}@s.whatsapp.net`)
		    fs.writeFileSync('./Z2/banned.json', JSON.stringify(ban))
			reply(`Nomor wa.me/${bnnd} telah dibanned !`)
			break
        	case 'unban':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
			if (!isOwner) return reply(only.owner)
			bnnd = body.slice(8)
			ban.splice(`${bnnd}@s.whatsapp.net`, 1)
			fs.writeFileSync('./Z2/banned.json', JSON.stringify(ban))
			reply(`Nomor wa.me/${bnnd} telah di unban!`)
			break   		 
			case 'limit':
			case 'ceklimit':
			try{
	        checkLimit(sender)
	        } catch (e) { reply("SILAHKAN GUNAKAN 1 FITUR TERLEBIH DAHULU")}
		    break 
		    case 'claim':
		    reply("SUKSES!, ANDA MENDAPATKAN 2000 LIMIT SECARA GRATIS, LIMIT AKAN MASUK SETELAH 60 DETIK, SILAHKAN TUNGGU SEBENTAR LAGI" + `\n*NOTE* : JANGAN SPAM FITUR INI`)
		    setTimeout( () => {
		    bayarLimit(sender, "2000")
		    nayla.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, "LIMIT 2000 ANDA TELAH MASUK, ANDA BISA MENGGUNAKAN FITUR PADA BOT INI KEMBALI", text, {quoted:nay1})
		    }, 60000)
		    break
			case 'addprem':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
            if (args.length == 0) return reply(`=> [ *CONTOH NYA GINI* ]\n ${prefix}${command} @tag`)
            if (!isOwner) return reply(only.owner)
            if (!isGroup) return reply(only.group)
 		    adprem = `${args[0].replace('@','')}@s.whatsapp.net`
 		    prem.push(adprem)
 		    fs.writeFileSync('./Z2/prem.json', JSON.stringify(prem))
 		    reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
 		    break				
 		    case 'dellprem':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
 		    if (args.length == 0) return reply(`=> [ *CONTOH NYA GINI* ]\n ${prefix}${command} @tag}`)
 		    if (!isOwner) return reply(only.owner)	
 		    if (!isGroup) return reply(only.group)	      	
 		    delp = body.slice(10)
 		    prem.splice(`${delp}@s.whatsapp.net`, 1)
 		    fs.writeFileSync('./Z2/prem.json', JSON.stringify(prem))
 		    reply(`BERHASIL MENGELUARKAN USER PREMIUM`)
 		    break 	 
            // GROUPMENU
            case 'antivirtext':
			case 'antivirtex':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			                                                            
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)
			if (args.length < 1) return reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}${command} off`)
			if ((args[0]) === 'on') {
			if (isAntiVirtex) return reply('𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱𝐭 𝐭𝐞𝐥𝐚𝐡 𝐚𝐤𝐭𝐢𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚')
			antivirtex.push(from)
			fs.writeFileSync('./Z2/antivirtex.json', JSON.stringify(antivirtex))
			reply(`𝐒𝐮𝐤𝐬𝐞𝐤 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`)
			} else if ((args[0]) === 'off') {
			if (!isAntiVirtex) return reply('𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱𝐭 𝐭𝐞𝐥𝐚𝐡 𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐡𝐚')
			antivirtex.splice(from, 1)
			fs.writeFileSync('./Z2/antivirtex.json', JSON.stringify(antivirtex))
			reply(`𝐒𝐮𝐤𝐬𝐞𝐬 𝐦𝐞𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`)
			} else {
			reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}${command} off`)
			}
			break		
            case 'antilink':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)
			if (args.length < 1) return reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}${command} off`)
			if ((args[0]) === 'on') {
			if (isAntiLink) return reply(`𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐬𝐮𝐝𝐚𝐡 𝐚𝐤𝐭𝐢𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚`)
			antilink.push(from)
			fs.writeFileSync('./Z2/antilink.json', JSON.stringify(antilink))
			reply(`𝐒𝐮𝐤𝐬𝐞𝐬 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`)
			} else if ((args[0]) === 'off') {
			if (!isAntiLink) return reply(`𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐬𝐮𝐝𝐚𝐡 𝐨𝐟𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚`)
			antilink.splice(from, 1)
			fs.writeFileSync('./Z2/antilink.json', JSON.stringify(antilink))
			reply(`𝐒𝐮𝐤𝐬𝐞𝐬 𝐦𝐞𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`)
			} else {
			reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}antilink off`)
			}
			break 	
			case 'antitoxic':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)
			if (args.length < 1) return reply(`FITUR ANTITOXIC\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
			if ((args[0]) === 'on') {
			if (isAntitoxic) return reply(`Antitoxic sudah aktif sebelumnya`)
			antitoxic.push(from)
			fs.writeFileSync('./Z2/antitoxic.json', JSON.stringify(antitoxic))
			reply(`Sukses mengaktifkan Antitoxic pada grub ini`)
			} else if ((args[0]) === 'off') {
			if (!isAntitoxic) return reply(`Antitoxic sudah off sebelumnya`)
			antitoxic.splice(from, 1)
			fs.writeFileSync('./Z2/antitoxic.json', JSON.stringify(antitoxic))
			reply(`Sukses non mengaktifkan Antitoxic pada grub ini`)
			} else {
			reply(`FITUR ANTITOXIC\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
			}
			break 	
			case 'antitag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)
			if (args.length < 1) return reply(`FITUR ANTITAG\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
			if ((args[0]) === 'on') {
			if (isAntitag) return reply(`Antitag sudah aktif sebelumnya`)
			antitag.push(from)
			fs.writeFileSync('./Z2/antitag.json', JSON.stringify(antitag))
			reply(`Sukses mengaktifkan Antitag pada grub ini`)
			} else if ((args[0]) === 'off') {
			if (!isAntitag) return reply(`Antitag sudah off sebelumnya`)
			antitag.splice(from, 1)
			fs.writeFileSync('./Z2/antitag.json', JSON.stringify(antitag))
			reply(`Sukses non mengaktifkan Antitag pada grub ini`)
			} else {
			reply(`FITUR ANTITAG\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
			}
			break 	
            case 'kick':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
            if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)			 
			if (!isGroup) {
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
			mentions(mentioned, true)
			nayla.groupRemove(from, mentioned)
			} else {
			await nayla.groupRemove(from, mentionUser)
			reply(`SUCCESS`)
			}
			break	     	 
            break
			case 'add':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)				 
			if (args.length < 1) return reply('NOMER NYA MANA')
			if (args[0].startsWith('08')) return reply('GUNAKAN KODE NEGARA!')
			try {
			num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
			nayla.groupAdd(from, [num])
			} catch (e) {
			console.log('Error :', e)
			reply('GAGAL MENAMBAHKAN TARGET, MUNGKIN KARENA DI PRIVATE')
			}
			break			 		 
			case 'listonline':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
        	let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
		    let online = [...Object.keys(nayla.chats.get(ido).presences), nayla.user.jid]
		    nayla.sendMessage(from, 'LIST ONLINE:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: nay1,
  		    contextInfo: { mentionedJid: online }
		    })			 
			break
			case 'group':		
			case 'grub':
			case 'grup':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)				 
			if (args[0] === 'buka') {
		    reply(`*BERHASIL MEMBUKA GROUP*`)
			nayla.groupSettingChange(from, GroupSettingChange.messageSend, false)
			} else if (args[0] === 'tutup') {
			reply(`*BERHASIL MENUTUP GROUP*`)
			nayla.groupSettingChange(from, GroupSettingChange.messageSend, true)
			}			 
			break      
			case 'setname':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (args.length < 1) return random('MYGRUB')		   
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)			 
            nayla.groupUpdateSubject(from, `${body.slice(9)}`)
            nayla.sendMessage(from, 'SUCCES, GANTI NAMA GRUP', text, {quoted: nay1 })			
			break
            case 'setdesc':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
            if (args.length < 1) return random(`SELAMAT DATANG`)		
            if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)				
            nayla.groupUpdateDescription(from, `${body.slice(9)}`)
            nayla.sendMessage(from, 'SUCCES, GANTI DESKRIPSI GRUP', text, {quoted:nay1 })				
			break	
	    	case 'listadmin':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)				 
			teks = `NAMA *${groupMetadata.subject}*\nTOTAL : ${groupAdmins.length}\n\n`
			no = 0
			for (let admon of groupAdmins) {
			no += 1
			teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
			}
			mentions(teks, groupAdmins, true)			 
			break
			case 'linkgc':	
			case 'linkgrub':
			case 'linkgrup':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)				 
		    linkgc = await nayla.groupInviteCode(from)
		    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
		    reply(yeh)		         
			break	
			case 'tagtime':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
	 	    if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)	
			if (args.length == 0) return reply(`=> [ *CONTOH NYA GINI* ]\n ${prefix}${command} text|waktu\nCONTOH ${prefix}${command} Hallo|10`)		
			var gh = body.slice(9)
			var anuu = gh.split("|")[0];
			var anu = gh.split("|")[1];
			jm = `${anu}000`
			reply(`SUKSES. PESAN AKAN DIKIRIM PADA ${anu} DETIK`)			 		
         	var group = await nayla.groupMetadata(from)
         	var member = group['participants']
         	var mem = []
         	member.map( async adm => {
         	mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
         	})
         	anuu = `${tz} *DARI* : ${codename}\n${tz} *TIMER* : ${anu}\n${tz} *PESAN* : ${anuu}`
         	var options = {
         	text: anuu,
         	contextInfo: { mentionedJid: mem },
         	quoted: nay1
         	}
         	setTimeout( () => {
         	nayla.sendMessage(from, options, text, {quoted:nay1}) 
         	}, jm)        	 
         	break	      	      
			case 'tagall':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `${tz} @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break
		    case 'tagall2':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `➤ @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break
		    case 'tagall3':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `➟ @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break
		    case 'tagall4':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `➙ @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break
		    case 'tagall5':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `➔ @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break	
			case 'kickrandom':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
	 	    if (!isGroup) return reply(replygrub)
			if (!isGroupAdmins) return reply(replyadmin)
			if (!isBotGroupAdmins) return reply(replyadminbot)
	 	    const A11 = groupMembers
 		    const C11 = A11[Math.floor(Math.random() * A11.length)]
 		    var kic = `${C11.jid.split('@')[0]}@s.whatsapp.net`                   		    
		    F1 = 'MENCARI MEMBER (RANDOM)'	 	    
	 	    D1 = `SUKSES KICK RANDOM USER @${C11.jid.split('@')[0]}`
	 	    reply(F1)	 	  
		    setTimeout( () => { 
	  	    nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	  	    }, 3000)    
	  	    setTimeout( () => {  
	  	    reply(D1)
	  	    }, 4000)     
	 	    break
	 	    case 'sms':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
	 	    if (args.length == 0) return reply(`=> [ *CONTOH NYA GINI* ]\n ${prefix}${command} haloo kak`)
	 	    if (!isGroup) return reply(`GROUP ONLY`)
 		    jds = []
		    const AA1 = groupMembers
 		    const CC1 = AA1[Math.floor(Math.random() * AA1.length)]
 		    G1 = `${tz} *DARI* : ${codename}\n${tz} *UNTUK* : ANDA\n${tz} *MATH* : RANDOM\n${tz} *PESAN* : ${aq}`
	 	    nayla.sendMessage(`${CC1.jid.split('@')[0]}@s.whatsapp.net`, G1, text) 
	 	    F1 = 'MENCARI MEMBER (RANDOM)'	 	    
	 	    D1 = `SUKSES MENGIRIM PESAN RANDOM KE @${CC1.jid.split('@')[0]}`	 	  
	 	    reply(F1) 
	 	    jds.push(CC1.jid)
	 	    setTimeout( () => {
	  	    mentions(D1, jds, true)
	  	    }, 3000)        		    
	 	    break
		    case 'ownerchat':
		    case 'chatowner':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (args.length == 0) return reply(`=> [ *CONTOH NYA GINI* ]\n ${prefix}${command} aku sayang kamu`)
            chat1 = `${tz} *DARI* : ${codename}\n`
            chat1 += `${tz} *BUAT* : ${nama}\n`
            chat1 += `${tz} *PESAN* : ${aq}`
            nayla.sendMessage(`${oownerNumber}@s.whatsapp.net`, chat1, text,{quoted:nay1})
            reply('SUKSES')
            break                  		 				 
            case 'delete':
			case 'd':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup)return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			nayla.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break			 
            case 'leave':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			             
			if (!isGroupAdmins) return reply(only.admin)
			if (!isGroup) return reply(only.group)
			anu = await nayla.groupLeave(from, `𝐒𝐚𝐲𝐨𝐧𝐚𝐫𝐚`, groupId)
			break
            case 'hidetag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)	
			if (!aq) return random(`HALO SEMUANYA`)		       
			var value = body.slice(9)
			var group = await nayla.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map( async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var options = {
			text: value,
			contextInfo: { mentionedJid: mem },
    		quoted: nay
			}
			nayla.sendMessage(from, options, text, {quoted:nay1})			 
			break  				 		 
            // SIMPLE 
            case 'sticker':  
         	case 'stiker':  
         	case 'stickergif':  
         	case 'stikergif':  
         	case 'sgif':  
         	case 's':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
         	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
         	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
         	const media = await nayla.downloadAndSaveMediaMessage(encmedia)
         	ran = getRandom('.webp')
         	await ffmpeg(`./${media}`)
         	.input(media)
         	.on('start', function (cmd) {         	 
          	})
         	.on('error', function (err) {
         	console.log(`Error : ${err}`)
         	fs.unlinkSync(media)
         	reply(prosess)
         	})
         	.on('end', function () {
         	console.log('SELESAI JANGAN LUPA SUBSCRIBE YT RAMDANI OFFICIAL')
         	nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
		    fs.unlinkSync(media)
         	fs.unlinkSync(ran)
         	})
         	.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
            min'(320,ih)':  
            force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
         	.save(ran)
         	} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
         	const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
         	const media = await nayla.downloadAndSaveMediaMessage(encmedia)
         	ran = getRandom('.webp')
         	reply(prosess)
         	await ffmpeg(`./${media}`)
         	.inputFormat(media.split('.')[1])
         	.on('start', function (cmd) {         	 
         	})
         	.on('error', function (err) {
         	console.log(`Error : ${err}`)
         	fs.unlinkSync(media)
         	tipe = media.endsWith('.mp4') ? 'video' : 'gif'
         	reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
         	})
         	.on('end', function () {
         	console.log('SELESAI JANGAN LUPA SUBSCRIBE YT RAMDANI OFFICIAL')
         	nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
         	fs.unlinkSync(media)
         	fs.unlinkSync(ran)
         	})
         	.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
          	min'(320,ih)':  
           	force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
         	.toFormat('webp')
         	.save(ran)
         	} else {
         	reply(`𝐤𝐢𝐫𝐢𝐦/𝐭𝐚𝐠 𝐟𝐨𝐭𝐨 𝐚𝐭𝐚𝐮 𝐯𝐢𝐝𝐞𝐨 𝐛𝐞𝐫𝐝𝐮𝐫𝐚𝐬𝐢 1-6 𝐝𝐞𝐭𝐢𝐤 𝐝𝐞𝐧𝐠𝐚𝐧 𝐜𝐚𝐩𝐭𝐢𝐨𝐧 ${prefix}sticker`)
         	}
         	break
            
            // WALLPAPER 		 
			case 'wallneon': case 'wallrandom': case 'wallcode': case 'wallhacker': case 'wallpubg': case 'wallml':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 							
			reply(prosess)
			try{			
			nyz2 = await fetchJson(`${api}/wallpaper/${command}`) 
			nyz3 = await getBuffer(nyz2.list.gambar)
			nayla.sendMessage(from, nyz3, image, {thumbnail:Buffer.alloc(0), caption:`NIH KAK`,quoted:nay1}) 			
			} catch (e) { reply("ERR SILAHKAN COBALAGI")}
			break	
			// TEXTPRO		 
			case 'rainbow': case 'scfi': case 'blue': case 'juice': case 'purple': case 'toxic': case 'peridot': case 'metal': 
			case 'realistic': case 'impressive': case 'cracked': case 'magma': case 'thunder': case 'berry': case 'transformer': 
			case 'horror': case 'metallic': case 'circuit': case 'sketch': case 'halloween':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (args.length < 1) return reply(MessReply.textpro)
			reply(prosess)						
			nyz5 = await fetchJson(`${api}/textpro/${command}?text=${aq}`) 
			nyz4 = await getBuffer(nyz5.result)
			nayla.sendMessage(from, nyz4, image, {thumbnail:Buffer.alloc(0), caption:`NIH KAK`,quoted:nay1}) 					
			break		
		    // RANDOM 
		    case 'artinama':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("Udin")
		    nyz6 = await fetchJson(`${api}/random/artinama?query=${aq}`)
		    nyz7 = `[ *ARTI NAMA* ]\n`,
		    nyz7 += `${tz} *ARTINAMA* : ${nyz6.result.list}`
		    Reply(nyz7)	
		    break
		    case 'artimimpi':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("ular")
		    nyz8 = await fetchJson(`${api}/random/artimimpi?query=${aq}`)
		    nyz31 = `[ *ARTI MIMPI* ]\n`,
		    nyz31 += `${tz} *ARTINAMA* : ${nyz8.result.list}`
		    Reply(nyz31)	
		    break
		    case 'resepmasakan':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("telur")
		    nyz9 = await fetchJson(`${api}/random/resepmasakan?query=${aq}`)
		    nyz32 = `[ *RESEP MASAKAN* ]\n`,
		    nyz32 += `${tz} *NAMA* : ${nyz9.list.nama}\n`,
		    nyz32 += `${tz} *CARA* : ${nyz9.list.cara}`		    
		    Reply(nyz32)	
		    break
		    case 'katajago':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("cantik")
		    nyz10 = await fetchJson(`${api}/random/katajago?query=${aq}`)
		    nyz33 = `[ *KATA JAGO* ]\n`,
		    nyz33 += `${tz} *RESULT* : ${nyz10.result.list}`
		    Reply(nyz33)	
		    break		     
		    case 'besarkecil':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz11 = await fetchJson(`${api}/random/besarkecil?query=${aq}`)
		    nyz34 = `[ *BESAR KECIL* ]\n`,
		    nyz34 += `${tz} *RESULT* : ${nyz11.result.list}`
		    Reply(nyz34)	
		    break	  
		    case 'jumlahhuruf':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz12 = await fetchJson(`${api}/random/jumlahhuruf?query=${aq}`)
		    nyz35 = `[ *JUMLAH HURUF* ]\n`,
		    nyz35 += `${tz} *RESULT* : ${nyz12.result.list}`
		    Reply(nyz35)	
		    break
		    case 'jumlahangka':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("193719174")
		    nyz13 = await fetchJson(`${api}/random/jumlahangka?query=${aq}`)
		    nyz36 = `[ *JUMLAH ANGKA* ]\n`,
		    nyz36 += `${tz} *RESULT* : ${nyz13.result.list}`
		    Reply(nyz36)
		    break
		    case 'infogempa':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    nyz14 = await fetchJson(`${api}/random/infogempa`)
		    nyz37 = `[ *INFO GEMPA* ]\n`,
		    nyz37 += `${tz} *WAKTU* : ${nyz14.result.waktu}\n`,
		    nyz37 += `${tz} *KEDALAMAN* : ${nyz14.result.kedalaman}\n`,
		    nyz37 += `${tz} *KOORDINAT* : ${nyz14.result.koordinat}\n`,
		    nyz37 += `${tz} *LOKASI* : ${nyz14.result.lokasi}\n`,
		    nyz37 += `${tz} *TSUNAMI* : ${nyz14.result.tsunami}`		    
		    Reply(nyz37)
		    break	    	
		    case 'kapital':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz15 = await fetchJson(`${api}/random/kapital?query=${aq}`)
		    nyz38 = `[ *KAPITAL* ]\n`,
		    nyz38 += `${tz} *RESULT* : ${nyz15.result.list}`
		    Reply(nyz38)
		    break	
		    case 'halah':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz16 = await fetchJson(`${api}/random/halah?query=${aq}`)
		    nyz39 = `[ *HALAH* ]\n`,
		    nyz39 += `${tz} *RESULT* : ${nyz16.result.list}`
		    Reply(nyz39)
		    break    	
		    case 'hilih':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz17 = await fetchJson(`${api}/random/hilih?query=${aq}`)
		    nyz40 = `[ *HILIH* ]\n`,
		    nyz40 += `${tz} *RESULT* : ${nyz17.result.list}`
		    Reply(nyz40)
		    break    	
		    case 'huluh':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz18 = await fetchJson(`${api}/random/huluh?query=${aq}`)
		    nyz41 = `[ *HULUH* ]\n`,
		    nyz41 += `${tz} *RESULT* : ${nyz18.result.list}`
		    Reply(nyz41)
		    break    	
		    case 'heleh':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz19 = await fetchJson(`${api}/random/heleh?query=${aq}`)
		    nyz42 = `[ *HELEH* ]\n`,
		    nyz42 += `${tz} *RESULT* : ${nyz19.result.list}`
		    Reply(nyz42)
		    break    	
		    case 'holoh':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz20 = await fetchJson(`${api}/random/holoh?query=${aq}`)
		    nyz43 = `[ *HOLOH* ]\n`,
		    nyz43 += `${tz} *RESULT* : ${nyz20.result.list}`
		    Reply(nyz43)
		    break  
		    case 'bilangangka':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("193719174")
		    nyz21 = await fetchJson(`${api}/random/bilangangka?query=${aq}`)
		    nyz44 = `[ *BILANG ANGKA* ]\n`,
		    nyz44 += `${tz} *RESULT* : ${nyz21.result.list}`
		    Reply(nyz44)
		    break 
		    case 'jumlahangka':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("193719174")
		    nyz22 = await fetchJson(`${api}/random/jumlahangka?query=${aq}`)
		    nyz45 = `[ *JUMLAH ANGKA* ]\n`,
		    nyz45 += `${tz} *RESULT* : ${nyz22.result.list}`
		    Reply(nyz45)
		    break  
		    case 'balikhuruf':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz23 = await fetchJson(`${api}/random/balikhuruf?query=${aq}`)
		    nyz46 = `[ *BALIK HURUF* ]\n`,
		    nyz46 += `${tz} *RESULT* : ${nyz23.result.list}`
		    Reply(nyz46)
		    break	
		    case 'wikipedia':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("manusia")
		    nyz24 = await fetchJson(`${api}/random/wikipedia?query=${aq}`)
		    nyz47 = `[ *WIKIPEDIA* ]\n`,
		    nyz47 += `${tz} *RESULT* : ${nyz24.result.list}`
		    Reply(nyz47)
		    break 
		    case 'balikangka':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 		
		    if (args.length < 1) return random("193719174")
		    nyz25 = await fetchJson(`${api}/random/balikangka?query=${aq}`)
		    nyz48 = `[ *BALIK ANGKA* ]\n`,
		    nyz48 += `${tz} *RESULT* : ${nyz25.result.list}`
		    Reply(nyz48)
		    break	 
		    // DOWNLOADER
		    case 'ytmp4':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isPrem) return reply(only.premium)	
		    if (args.length < 1) return reply("Masukkan url youtube")
		    nyz1 = await fetchJson(`${api}/downloader/ytmp4?url=${aq}`)
		    nyz2 = await getBuffer(nyz1.result.url)
		    nyz3 = `[ *YOUTUBE VIDEO* ]\n`
		    nyz3 += `${tz} *TITLE* : ${nyz1.result.title}\n`
		    nyz3 += `${tz} *DESC* : ${nyz1.result.desc}\n`
		    nyz3 += `_video sedang diproses, silahkan tunggu beberapa saat lagi_`
		    reply(nyz3)
		    reply(prosess)
		    nayla.sendMessage(from, nyz2, video, {caption:"NIH KAK", thumbnail:Buffer.alloc(0), quoted:nay1})
		    break
		    case 'ytmp3':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isPrem) return reply(only.premium)
		    if (args.length < 1) return reply("Masukkan url youtube")
		    nyz1 = await fetchJson(`${api}/downloader/ytmp3?url=${aq}`)
		    nyz2 = await getBuffer(nyz1.result.url)
		    nyz3 = `[ *YOUTUBE AUDIO* ]\n`
		    nyz3 += `${tz} *TITLE* : ${nyz1.result.title}\n`
		    nyz3 += `${tz} *DESC* : ${nyz1.result.desc}\n`
		    nyz3 += `_audio sedang diproses, silahkan tunggu beberapa saat lagi_`
		    reply(nyz3)
		    reply(prosess)
		    nayla.sendMessage(from, nyz2, audio, {mimetype:"audio/mp4", quoted:nay1})
		    break
		    case 'tiktokmp4':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isPrem) return reply(only.premium)		    
		    if (args.length < 1) return reply("Masukkan url tiktok")
		    nyz1 = await fetchJson(`${api}/downloader/tiktokmp4?url=${aq}`)
		    nyz2 = await getBuffer(nyz1.result.url)
		    reply(prosess)
		    nayla.sendMessage(from, nyz2, video, {caption:"NIH KAK", thumbnail:Buffer.alloc(0), quoted:nay1})		 
		    break
		    case 'playmp3': case 'playmp4':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isPrem) return reply(only.premium)
		    reply("MAAF FITUR INI SEDANG PERBAIKAN")
		    break
		    case 'tiktokmp3':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isPrem) return reply(only.premium)		    
		    if (args.length < 1) return reply("Masukkan url tiktok")
		    nyz1 = await fetchJson(`${api}/downloader/tiktokmp3?url=${aq}`)
		    nyz2 = await getBuffer(nyz1.result.url)
		    reply(prosess)
		    nayla.sendMessage(from, nyz2, audio, {mimetype:"audio/mp4", quoted:nay1})		 
		    break
		    // ANIME
		    case 'zoro': case 'luffy': case 'sanji': case 'ussop': case 'nami': case 'copper': case 'naruto': case 'minato': case 'sasuke': case 'sakura': case 'boruto': case 'sarada': case 'mitsuki': case 'orochimaru': case 'tsunade': case 'kakashi': case 'killua': case 'gon': case 'rimuru': case 'sagiri': case 'natsu': case 'tanjirou': case 'nezuko': case 'senku':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			   
            reply(prosess)
            nyz1 = await fetchJson(`${api}/anime/${command}`)            
            nyzs = await getBuffer(nyz1.result.list)
            sendImage(nyzs, "Nih foto " + command + " nya kak:)")
            break
            case 'pinterest':
            if (args.length < 1) return random("kucing")
            if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			   
            reply(prosess)
            nyz1 = await fetchJson(`${api}/search/pinterest?query=${aq}`)            
            nyzs = await getBuffer(nyz1.result.list)
            sendImage(nyzs, "NIHH")
            break
            // XRANDOM
            case 'xkontol':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')				 	
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xganteng':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xcantik':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xjelek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xgoblok':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 				  
            case 'xbego':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xpintar':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xjago':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xnolep':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
		    case 'xmonyet':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 				     
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 				                 	 
            case 'xbabi':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xbeban':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xbaik':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xjahat':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xanjing':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			  
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 				
            case 'xharam':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xkontol':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xpakboy':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xpakgirl':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			  
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 				
            case 'xwibu':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xhebat':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xsadboy':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
		    case 'xsadgirl':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
		    if (!isGroup) return reply(only.group)		     
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break  
			case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
            case 'bego': case 'pintar': case 'jago': case 'nolep': case 'monyet':                 	 
            case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
            case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
            case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group) 	 
 		    jds = []
		    const A12 = groupMembers
  		    const B12 = groupMembers
 		    const C12 = A12[Math.floor(Math.random() * A12.length)]
	 	    D12 = `Emh.. seperti biasa yang *ter${command}* disini adalah si @${C12.jid.split('@')[0]}`                  
		    jds.push(C12.jid)
	  	    mentions(D12, jds, true)
	 	    break   
	 	    case 'vganteng': case 'vcantik': case 'vjelek': case 'vgoblok':  
            case 'vbego': case 'vpintar': case 'vjago': case 'vnolep': case 'vmonyet':                 	 
            case 'vbabi': case 'vbeban': case 'vbaik': case 'vjahat': case 'vanjing': 
            case 'vharam': case 'vkontol': case 'vpakboy': case 'vpakgirl': 
            case 'vwibu': case 'vhebat': case 'vsadboy': case 'vsadgirl':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 					
			if (!isGroup) return reply(only.group)
 		    jds = []
		    const AS1 = groupMembers
 		    const CS1 = AS1[Math.floor(Math.random() * AS1.length)]	 	                      
 		    const vcardd = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${command1}\n` 
            + `ORG: NAK ${command1};\n`
            + `TEL;type=CELL;type=VOICE;waid=${CS1.jid.split('@')[0]}:+${CS1.jid.split('@')[0]}\n`
            + 'END:VCARD' 
            nayla.sendMessage(from, {displayname: "Jeff", vcard: vcardd}, MessageType.contact, { quoted: nay1})
            reply(`wkwk dia yang *ter${command1}* disini`)			
	 	    break	 	     
            case 'zganteng': case 'zcantik': case 'zjelek': case 'zgoblok':  
            case 'zbego': case 'zpintar': case 'zjago': case 'znolep': case 'zmonyet':                 	 
            case 'zbabi': case 'zbeban': case 'zbaik': case 'zjahat': case 'zanjing': 
            case 'zharam': case 'zkontol': case 'zpakboy': case 'zpakgirl': 
            case 'zwibu': case 'zhebat': case 'zsadboy': case 'zsadgirl':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			             
           	if (!isGroup) return reply(only.group) 	 
		    const AS11 = groupMembers		     
 		    const CS21 = AS11[Math.floor(Math.random() * AS11.length)]	 	    		     
			nayla.sendMessage(from, zrandom, sticker, {quoted: { key: { fromMe: false, participant: `${CS21.jid.split('@')[0]}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `aku adalah yang ter${command1} disini:v` }}})
			break 
            case 'gantengcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
            N = `KE *GANTENGAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'cantikcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *CANTIKAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}% :v*`
            reply(N)
            break
            case 'jelekcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")                 	
            N = `KE *J3L3K4N* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'goblokcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *GOBLOKAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'begocek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *BEGO* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'pintercek': 
            case 'pintarcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *PINTARAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'jagocek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            N = `KE *JAGOAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'nolepcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            N = `KE *NOLEPAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'babicek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            N = `KE *BABIAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'bebancek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *BEBANAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'baikcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *BAIKAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'jahatcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            N = `KE *JAHATAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'anjingcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            N = `KE *ANJINGAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break              
            case 'haramcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *HARAMAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break  
            case 'kontolcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            N = `KE *KOMTOLAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'pakboycek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            N = `KE *PAKBOYZ* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'pakgirlcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *PAKGILR* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break             
            case 'sangecek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `JIWA *SANGE* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break
            case 'bapercek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `JIWA *BEPERAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break                      
            // OWNER MENU
            case 'bc':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			if (!isOwner) return reply('ONLY OWNER') 
			if (args.length < 1) return reply('.......')
			anu = await nayla.chats.all()
			if (isMedia && !nay.message.videoMessage || isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
			buff = await nayla.downloadMediaMessage(encmedia)
			for (let _ of anu) {
			nayla.sendMessage(_.jid, buff, image, {caption: `[ *${namabot} BROADCAST* ]\n\n${body.slice(4)}`})
			}
			reply(_.jid)
			reply('*SUCCESS BROADCAST*')
			} else {
			for (let _ of anu) {
	    	sendMess(_.jid, `[ *${namabot} BROADCAST* ]\n\n${tz} *DARI* : ${nama}\n${tz} *TIME* : ${time}\n${tz} *PESAN* : ${body.slice(4)}`)
 			}
			reply('*SUCCESS BROADCAST* ')
			}			
			break		
			case 'bcgc':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
			if (!isOwner) return reply('ONLY OWNER') 
			if (args.length < 1) return reply('.......')
			anu = await groupMembers				 
			if (isMedia && !nay.message.videoMessage || isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
			buff = await nayla.downloadMediaMessage(encmedia)
			for (let _ of anu) {
			nayla.sendMessage(_.jid, buff, image, {caption: aq})
			}
			reply('')
			} else {
			for (let _ of anu) {
			sendMess(_.jid, aq)
			}
			reply('SUKSES BROADCAST GROUP')
			}			 
			break 
			case 'setprefix':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
	     	if (args.length < 1) return reply('PREFIX NYA APA?')
			if (!isOwner) return reply(only.owner)
            prefix = args[0] 
            reply(`SUKSES SET PREFIX KE ${prefix}`)
            break   
            case 'settz':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
	     	if (args.length < 1) return reply('PREFIX NYA APA?')
			if (!isOwner) return reply(only.owner)
            tz = args[0] 
            reply(`SUKSES SET TZ KE ${tz}`)
            break   
            case 'join':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
			if (!isOwner) return reply(only.owner) 
			if (isGroup) return reply('GUNAKAN FITUR INI DI PESAN PRIBADI')
			try {
		    ini_url = args[0]
			if (args.length < 1) return reply(`LINK NYA MANA??`)	
			var codeInvite = ini_url.split('https://chat.whatsapp.com/')[1]
			if (!codeInvite) return reply('pastikan link sudah benar!')
			var response = await nayla.acceptInvite(codeInvite)
			reply('SUKSES!!!, JGN LUPA SUBSCRIBE https://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw')
			} catch {
			reply('LINK ERROR!')
			}
			break			  	
			case 'setppbot':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isOwner) return reply(only.owner) 
		    nayla.updatePresence(from, Presence.composing) 
			if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
			enmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await nayla.downloadAndSaveMediaMessage(enmedia)
			await nayla.updateProfilePicture(botNumber, media)
			reply('SUKSES!!!')			  
			break			 
			case 'return':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isOwner) return reply(only.owner)
            try {
            return nayla.sendMessage(from, JSON.stringify(eval(budy.slice(8)),null,'\t'),text, {quoted: nay1})
            } catch(err) {
            e = String(err)
            reply(e)
            }
            break
            case 'audio1':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio1)
            break   
            case 'audio2':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio2)
            break       
            case 'audio3':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio3)
            break       
            case 'audio4':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio4)
            break       
            case 'audio5':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio5)
            break       
            case 'audio6':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio6)
            break       
            case 'audio7':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio7)
            break       
            case 'audio8':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio8)
            break       
            case 'audio9':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio9)
            break       
            case 'audio10':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio10)
            break       
            case 'audio11':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio11)
            break       
            case 'audio12':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio12)
            break       
            case 'audio13':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio13)
            break       
            case 'audio14':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio14)
            break       
            case 'audio15':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio15)
            break       
            case 'audio16':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio16)
            break       
            case 'audio17':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio17)
            break       
            case 'audio18':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio18)
            break       
            case 'audio19':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio19)
            break  
            case 'audio20':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendAudio(audio20)
            break  
            case 'cantiktag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *CANTIK RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KECANTIKAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'bapertag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *BAPER RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEBAPERAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'sangetag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *SENGE RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KESANGEAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'pakgirltag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *PAKGIRL RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEPAKGIRL AN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'pakboytag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *PAKBOY RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEPAKBOYAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'kontoltag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *KOMTOL RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEKONTOLAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'haramtag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *HARAM RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEHARAMAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'anjingtag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *ANJING RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEANJINGAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'jahattag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *JAHAT RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEJAHATAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'baiktag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *BAIK RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEBAIKAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'bebantag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *BEBAN RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEBEBANAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'babitag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *BABI RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEBABIAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'noleptag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *NOLEP RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KENOLEPAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'jagotag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *JAGO RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEJAGOAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'pintartag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *PINTAR RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEPINTARAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'begotag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *BEGO RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEBEGOAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'gobloktag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *GOBLOK RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEGOBLOKAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'jelektag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *JELEK RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEJELEKAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'gantengtag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *GANTENG RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEGANTENGAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
		    case 'sganteng': case 'scantik': case 'sjelek': case 'sgoblok':  
            case 'sbego': case 'spintar': case 'sjago': case 'snolep': case 'smonyet':                 	 
            case 'sbabi': case 'sbeban': case 'sbaik': case 'sjahat': case 'sanjing': 
            case 'sharam': case 'skontol': case 'spakboy': case 'spakgirl': 
            case 'swibu': case 'shebat': case 'ssadboy': case 'ssadgirl':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			             
           	if (!isGroup) return reply(only.group) 	 		    
			soundRandom(`${command}`)
			break
			case 'cganteng': case 'ccantik': case 'cjelek': case 'cgoblok':  
            case 'cbego': case 'cpintar': case 'cjago': case 'cnolep': case 'cmonyet':                 	 
            case 'cbabi': case 'cbeban': case 'cbaik': case 'cjahat': case 'canjing': 
            case 'charam': case 'ckontol': case 'cpakboy': case 'cpakgirl': 
            case 'cwibu': case 'chebat': case 'csadboy': case 'csadgirl':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			             
           	if (!isGroup) return reply(only.group) 	 		    
			soundMy(`${command}`)
			break
			case 'grubwa':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			if (args.length < 1) return random("2022") 
			nyz49 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/grubwa?query=${aq}`)
			nyz50 = `[ *GRUB WA* ]\n`,
			nyz50 += `${tz} *NAMA* : ${nyz49.result.judul}\n`,
			nyz50 += `${tz} *LINK* : ${nyz49.result.link}\n`
			reply(nyz50)
			break
			case 'arena':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			if (args.length < 1) return random("oppo")
			nyz51 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/arena?query=${aq}`)
			nyz53 = nyz51.result
			nyz52 = `[ *ARENA* ]\n`,
			nyz52 += `${tz} *SPEK* : ${nyz53.spek}\n`,
			nyz52 += `${tz} *TYPE* : ${nyz53.type}\n`,
			nyz52 += `${tz} *SIZE* : ${nyz53.size}\n`,
			nyz52 += `${tz} *RESOLUSI* : ${nyz53.resolusi}\n`,
			nyz52 += `${tz} *OS* : ${nyz53.os}\n`,
			nyz52 += `${tz} *CPU* : ${nyz53.cpu}\n`,
			nyz52 += `${tz} *INTERNAL* : ${nyz53.internal}\n`,
			nyz52 += `${tz} *CAMERA* : ${nyz53.camera}\n`,
			nyz52 += `${tz} *BATTERAI* : ${nyz53.batterai}\n`			
			reply(nyz52)
			break
			case 'amazon':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			if (args.length < 1) return random("batterai")
			nyz54 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/amazon?query=${aq}`)
			nyz55 = nyz54.result
			nyz56 = `[ *AMAZON* ]\n`,
			nyz56 += `${tz} *ITEM* : ${nyz55.item}\n`,
			nyz56 += `${tz} *REVIEW* : ${nyz55.review}\n`,
			nyz56 += `${tz} *RATING* : ${nyz55.rating}\n`,
			nyz56 += `${tz} *PRICE* : ${nyz55.price}\n`,
			nyz56 += `${tz} *DISKON* : ${nyz55.diskon}\n`,
			nyz56 += `${tz} *URL* : ${nyz55.url}\n`,
			nyz56 += `${tz} *SPONSOR* : ${nyz55.sponsor}\n`,
			nyz56 += `${tz} *BEST* : ${nyz55.best}\n`,
			nyz56 += `${tz} *AMAZON* : ${nyz55.amazon}\n`
			reply(nyz56)
			break
			case 'shopee':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			if (args.length < 1) return random("sepeda")
			nyz57 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/shopee?query=${aq}`)
			nyz58 = nyz57.result
			nyz59 = `[ *SHOPEE* ]\n`,
			nyz59 += `${tz} *JUDUL* : ${nyz58.judul}\n`,
			nyz59 += `${tz} *HARGA* : ${nyz58.harga}\n`,
			nyz59 += `${tz} *MERK* : ${nyz58.merk}\n`,
			nyz59 += `${tz} *STOCK* : ${nyz58.stock}\n`,
			nyz59 += `${tz} *LIKE* : ${nyz58.like}\n`,
			nyz59 += `${tz} *VIEWS* : ${nyz58.views}\n`,
			nyz59 += `${tz} *TERJUAL* : ${nyz58.terjual}\n`
			reply(nyz59)
			break
			case 'thelazy':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			if (args.length < 1) return random("mobile")
			nyz70 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/thelazy?query=${aq}`)
			nyz71 = nyz70.result
			nyz72 = `[ *THELAZY* ]\n`,
			nyz72 += `${tz} *TITLE* : ${nyz71.title}\n`,
			nyz72 += `${tz} *URL* : ${nyz71.url}\n`,
			nyz72 += `${tz} *CATEGORY* : ${nyz71.category}\n`,
			nyz72 += `${tz} *AUTHOR* : ${nyz71.author}\n`,
			nyz72 += `${tz} *POST* : ${nyz71.post_date}\n`,
			nyz72 += `${tz} *COMMENTS* : ${nyz71.comments}\n`
			reply(nyz72)
			break
			case 'cersex':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			if (args.length < 1) return random("kakak")
			nyz73 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/cersex?query=${aq}`)
			nyz74 = nyz73.result
			nyz75 = `[ *CERSEX* ]\n`,
			nyz75 += `${tz} *TITLE* : ${nyz74.title}\n`,
			nyz75 += `${tz} *URL* : ${nyz74.url}\n`,
			nyz75 += `${tz} *CATEGORY* : ${nyz74.category}\n`,
			nyz75 += `${tz} *POST* : ${nyz74.post}\n`
			reply(nyz75)
			break
			case 'ytsearch':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			if (args.length < 1) return random("jolowi")
			nyz76 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/ytsearch?query=${aq}`)
			nyz77 = nyz76.result
			nyz78 = `[ *YTSEARCH* ]\n`,
			nyz78 += `${tz} *TITLE* : ${nyz77.title}\n`,
			nyz78 += `${tz} *ID* : ${nyz77.id}\n`,
			nyz78 += `${tz} *TYPE* : ${nyz77.type}\n`,
			nyz78 += `${tz} *VIEWS* : ${nyz77.views}\n`,
			nyz78 += `${tz} *URL* : ${nyz77.url}\n`,
			nyz78 += `${tz} *DESC* : ${nyz77.desc}\n`
			reply(nyz78)
			break
			case 'rexdl':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			if (args.length < 1) return random("mobil")
			nyz79 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/rexdl?query=${aq}`)
			nyz80 = nyz79.result
			nyz81 = `[ *REXDL* ]\n`,
			nyz81 += `${tz} *TITLE* : ${nyz80.title}\n`,
			nyz81 += `${tz} *URL* : ${nyz80.url}\n`, 
			nyz81 += `${tz} *ON* : ${nyz80.on}\n`,
			nyz81 += `${tz} *DESC* : ${nyz80.desc}\n` 
			reply(nyz81)
			break
			case 'mod':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			if (args.length < 1) return random("pubg")
			nyz82 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/mod?query=${aq}`)
			nyz83 = nyz82.result
			nyz84 = `[ *MOD* ]\n`,
			nyz84 += `${tz} *TITLE* : ${nyz83.title}\n`, 
			nyz84 += `${tz} *URL* : ${nyz83.url}\n` 
			reply(nyz84)
			break
			case 'sfile':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			if (args.length < 1) return random("pubg")
			nyz85 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/sfile?query=${aq}`)
			nyz86 = nyz85.result
			nyz87 = `[ *SFILE* ]\n`,
			nyz87 += `${tz} *TITLE* : ${nyz86.title}\n`,
			nyz87 += `${tz} *SIZE* : ${nyz86.size}\n`,
			nyz87 += `${tz} *URL* : ${nyz86.url}\n`
			reply(nyz87)
			break
			case 'berita':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			nyz88 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/berita`)
			nyz89 = nyz88.result
			nyz90 = `[ *BERITA* ]\n`,
			nyz90 += `${tz} *TITLE* : ${nyz89.title}\n`,
			nyz90 += `${tz} *URL* : ${nyz89.url}\n`
			reply(nyz90)
			break
			case 'kompas':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			nyz91 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/kompas`)
			nyz92 = nyz91.result
			nyz93 = `[ *KOMPAS* ]\n`,
			nyz93 += `${tz} *TITLE* : ${nyz92.title}\n`,
			nyz93 += `${tz} *URL* : ${nyz92.url}\n`
			reply(nyz93)
			break
			case 'okezone':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			nyz94 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/okezone`)
			nyz95 = nyz94.result
			nyz96 = `[ *OKEZONE* ]\n`,
			nyz96 += `${tz} *TITLE* : ${nyz95.title}\n`,
			nyz96 += `${tz} *URL* : ${nyz95.url}\n`
			reply(nyz96)
			break
			case 'antara':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			nyz97 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/antara`)
			nyz98 = nyz97.result
			nyz99 = `[ *ANTARA* ]\n`,
			nyz99 += `${tz} *TITLE* : ${nyz98.title}\n`,
			nyz99 += `${tz} *URL* : ${nyz98.url}\n`
			reply(nyz99)
			break
			case 'jam':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
		    nyz100 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jam`)
		    nyz101 = nyz100.result
		    nyz102 = `[ *JAM* ]\n`,
		    nyz102 += `${tz} *WIB* : ${nyz101.wib}\n`,
		    nyz102 += `${tz} *WITA* : ${nyz101.wita}\n`,
		    nyz102 += `${tz} *WIT* : ${nyz101.wit}\n`
		    reply(nyz102)
		    break
		    case 'jamdunia':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
		    nyz103 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jamdunia`)
		    nyz104 = nyz103.result
		    nyz105 = `[ *JAM DUNIA* ]\n`,
		    nyz105 += `${tz} *WITA* : ${nyz104.wita}\n`,
		    nyz105 += `${tz} *WIT* : ${nyz104.wit}\n`,
		    nyz105 += `${tz} *WIB* : ${nyz104.wib}\n`,
		    nyz105 += `${tz} *MATAHARI* : ${nyz104.matahari}\n`,
		    nyz105 += `${tz} *TANGGAL* : ${nyz104.tanggal}\n`,
		    nyz105 += `${tz} *DETAIL* : ${nyz104.detail}\n`
		    reply(nyz105)
		    break
		    case 'jadwalbola':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
		    nyz106 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jadwalbola`)
		    nyz107 = nyz106.result
		    nyz108 = `[ *JADWAL BOLA* ]\n`,
		    nyz108 += `${tz} *WAKTU* : ${nyz107.waktu}\n`,
		    nyz108 += `${tz} *KICKOFF* : ${nyz107.kickoff}\n`,
		    nyz108 += `${tz} *CHANNEL* : ${nyz107.channel}\n`
		    reply(nyz108)
		    break
		    case 'infohoax':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
		    nyz109 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/infohoax`)
		    nyz110 = nyz109.result
		    nyz111 = `[ *INFO HOAX* ]\n`,
		    nyz111 += `${tz} *TITLE* : ${nyz110.title}\n`,
		    nyz111 += `${tz} *URL* : ${nyz110.URL}\n`,
		    nyz111 += `${tz} *TANGGAL* : ${nyz110.tanggal}\n`,
		    nyz111 += `${tz} *DESC* : ${nyz110.desc}\n`
		    reply(nyz111)
		    break 
		    case 'coronameninggal':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
		    nyz112 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/coronameninggal`)
		    nyz113 = `${tz} *MENINGGAL* : ${nyz112.result.meninggal}`
		    reply(nyz113)
		    break		     
            case 'caklontong': case 'tebakbendera': case 'tebakjenaka': case 'tebakkimia': case 'tebaklirik':  
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")           
            nyz114 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
            reply(`[ *GAMES* ]\n${tz} *SOAL* : ${nyz114.list.soal}\n[❗] WAKTU 30 DETIK`)
            timers(`${nyz114.list.jawaban}`)
            break
            case 'tebakgambar':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`) 
            nyz116 = await getBuffer(nyz115.list.soal)
            nayla.sendMessage(from, nyz116, image, {caption: "TEBAK INI APA, WAKTU 30 DETIK", quoted:nay})
            timers(`${nyz115.list.jawaban}`)
            break
            case 'hadist':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            nyz117 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/hadist`)
            nyz118 = `[ *HADIST* ]\n`,
            nyz118 += `${tz} *NAME* : ${nyz117.list.name}\n`,
            nyz118 += `${tz} *ID* : ${nyz117.list.id}\n`,
            nyz118 += `${tz} *AVAILABLE* : ${nyz117.list.available}\n`,
            nyz118 += `${tz} *NUMBER* : ${nyz117.list.number}\n`,
            nyz118 += `${tz} *ARAB* : ${nyz117.list.arab}\n`
            reply(nyz118)
            break
            case 'quran':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            nyz119 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/quran`)
            nyz120 = `[ *QURAN* ]\n`,
            nyz120 += `${tz} *QURAN* : ${nyz119.list.quran}\n`,
            nyz120 += `${tz} *SURAH* : ${nyz119.list.surah}\n`,
            nyz120 += `${tz} *JUZ* : ${nyz119.list.juz}\n`,
            nyz120 += `${tz} *ARAB* : ${nyz119.list.arab}\n`,
            nyz120 += `${tz} *SHORT* : ${nyz119.list.id_short}\n`,
            nyz120 += `${tz} *LONG* : ${nyz119.list.id_long}\n`
            reply(nyz120)
            break
            case 'asmaulhusna':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            nyz121 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/asmaulhusna`)
            nyz122 = `[ *ASMAULHUSNA* ]\n`,
            nyz122 += `${tz} *NUMBER* : ${nyz121.list.number}\n`,
            nyz122 += `${tz} *LATIN* : ${nyz121.list.latin}\n`,
            nyz122 += `${tz} *ARAB* : ${nyz121.list.arab}\n`,
            nyz122 += `${tz} *ID* : ${nyz121.list.id}\n`,
            nyz122 += `${tz} *EN* : ${nyz121.list.en}\n`
            reply(nyz122)
            break
            case 'kisahnabi':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            nyz125 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/kisahnabi`)
            nyz124 = `[ *KISAHNABI* ]\n`,
            nyz124 += `${tz} *NAME* : ${nyz125.list.name}\n`,
            nyz124 += `${tz} *KELAHIRAN* : ${nyz125.list.kelahiran}\n`,
            nyz124 += `${tz} *WAFAT USIA* : ${nyz125.list.wafat_usia}\n`,
            nyz124 += `${tz} *SINGGAH* : ${nyz125.list.singgah}\n`,
            nyz124 += `${tz} *KISAH* : ${nyz125.list.kisah}\n`
            reply(nyz124)
            break
            case 'speed':
            case 'ping':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (!isOwner) return reply(only.owner)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            const speed = require('performance-now')
			let timestampi = speed();
            let latensii = speed() - timestampi
			spd = `${tz} *SPEED* : ${latensii.toFixed(4)}`
			reply(spd)
			break
			case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri':	
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isPrem) return reply(only.premium)		    
		    nyz125 = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
		    reply("NIH KACKKK!!\n" + nyz125.result)		
		   // nyz126 = await getBuffer(nyz125.result)
		   // sendImage(nyz126, "NIH")		       
			break 
			case 'mygrub':
			case 'mygrup':
			myg = `⚯⚯[ *GRUB* ] <[ *1* ]>⚯⚯ 
${setting.linkgrub1} 
⚯⚯[ *GRUB* ] <[ *2* ]>⚯⚯
${setting.linkgrub2} 
⚯⚯[ *GRUB* ] <[ *3* ]>⚯⚯
${setting.linkgrub3}
⚯⚯⚯⚯⚯⚯⚯⚯⚯⚯⚯`
            reply(myg)
            break 				  
              
		    case 'menu': case 'help':
		    if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		  	menu5 = `${aart}\nMENAMPILKAN MENU ${namabot}`
			menu3 = `┏━━━━❲ *BOTZ V19.2* ❳━━━━━
┃ HALOO!! ${codename} <3
┗━━━━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *GROUP MENU* ❳═>
┃║⛇ *${prefix}hidetag*
┃║⛇ *${prefix}leave*
┃║⛇ *${prefix}tagtime*
┃║⛇ *${prefix}delete*
┃║⛇ *${prefix}tagall*
┃║⛇ *${prefix}tagall2*
┃║⛇ *${prefix}tagall3*
┃║⛇ *${prefix}tagall4*
┃║⛇ *${prefix}tagall5*
┃║⛇ *${prefix}linkgrub*
┃║⛇ *${prefix}setdesc*
┃║⛇ *${prefix}listadmin*
┃║⛇ *${prefix}setname*
┃║⛇ *${prefix}group*
┃║⛇ *${prefix}listonline*
┃║⛇ *${prefix}add*
┃║⛇ *${prefix}kick*
┃║⛇ *${prefix}antilink*
┃║⛇ *${prefix}antivirtex*
┃║⛇ *${prefix}antitag*
┃║⛇ *${prefix}antitoxic*
┃║⛇ *${prefix}kickrandom*
┃║⛇ *${prefix}sms*
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *WALLPAPER* ❳═>
┃║⛇ *${prefix}wallrandom* 
┃║⛇ *${prefix}wallcode*
┃║⛇ *${prefix}wallneon*
┃║⛇ *${prefix}wallhacker*
┃║⛇ *${prefix}wallpubg*
┃║⛇ *${prefix}wallml*
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *TEXTPRO* ❳═>
┃║⛇ *${prefix}halloween* <text>
┃║⛇ *${prefix}rainbow* <text>
┃║⛇ *${prefix}scfi* <text>
┃║⛇ *${prefix}blue* <text>
┃║⛇ *${prefix}juice* <text>
┃║⛇ *${prefix}purple* <text>
┃║⛇ *${prefix}toxic* <text>
┃║⛇ *${prefix}peridot* <text>
┃║⛇ *${prefix}metal* <text>
┃║⛇ *${prefix}realistic* <text>
┃║⛇ *${prefix}impressive* <text>
┃║⛇ *${prefix}cracked* <text>
┃║⛇ *${prefix}magma* <text>
┃║⛇ *${prefix}thunder* <text>
┃║⛇ *${prefix}berry* <text>
┃║⛇ *${prefix}transformer* <text>
┃║⛇ *${prefix}horror* <text>
┃║⛇ *${prefix}metallic* <text>
┃║⛇ *${prefix}circuit* <text>
┃║⛇ *${prefix}sketch* <text>
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *RANDOM* ❳═>
┃║⛇ *${prefix}mygrub* 
┃║⛇ *${prefix}ceklimit* <text>
┃║⛇ *${prefix}claim* <text>
┃║⛇ *${prefix}artinama* <text>
┃║⛇ *${prefix}artimimpi* <text>
┃║⛇ *${prefix}resepmasakan* <text>
┃║⛇ *${prefix}katajago* <text>
┃║⛇ *${prefix}besarkecil* <text>
┃║⛇ *${prefix}jumlahhuruf* <text>
┃║⛇ *${prefix}jumlahangka* <text>
┃║⛇ *${prefix}infogempa* 
┃║⛇ *${prefix}balikangka* <text>
┃║⛇ *${prefix}wikipedia* <text>
┃║⛇ *${prefix}balikhuruf* <text>
┃║⛇ *${prefix}bilangangka* <text>
┃║⛇ *${prefix}holoh* <text>
┃║⛇ *${prefix}heleh* <text>
┃║⛇ *${prefix}huluh* <text>
┃║⛇ *${prefix}hilih* <text>
┃║⛇ *${prefix}halah* <text>
┃║⛇ *${prefix}kapital* <text>
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *ANIME* ❳═>
┃║⛇ *${prefix}gon*
┃║⛇ *${prefix}killua*
┃║⛇ *${prefix}kakashi*
┃║⛇ *${prefix}tsunade*
┃║⛇ *${prefix}orochimaru*
┃║⛇ *${prefix}mitsuki*
┃║⛇ *${prefix}sarada*
┃║⛇ *${prefix}boruto*
┃║⛇ *${prefix}sakura*
┃║⛇ *${prefix}sasuke*
┃║⛇ *${prefix}minato*
┃║⛇ *${prefix}naruto*
┃║⛇ *${prefix}copper*
┃║⛇ *${prefix}nami*
┃║⛇ *${prefix}ussop*
┃║⛇ *${prefix}sanji*
┃║⛇ *${prefix}luffy*
┃║⛇ *${prefix}zoro*
┃║⛇ *${prefix}senku*
┃║⛇ *${prefix}nezuko*
┃║⛇ *${prefix}tanjirou*
┃║⛇ *${prefix}natsu*
┃║⛇ *${prefix}sagiri*
┃║⛇ *${prefix}rimuru*
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *DOWNLOAD* ❳═>
┃║⛇ *${prefix}ytmp3*
┃║⛇ *${prefix}ytmp4*
┃║⛇ *${prefix}playmp3* [ *ERR* ]
┃║⛇ *${prefix}playmp4* [ *ERR* ]
┃║⛇ *${prefix}tiktokmp4*
┃║⛇ *${prefix}tiktokmp3*
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *VRANDOM* ❳═>
┃║⛇ *${prefix}vsadboy*
┃║⛇ *${prefix}vpakboy*
┃║⛇ *${prefix}vbaik*
┃║⛇ *${prefix}vjago*
┃║⛇ *${prefix}vjelek*
┃║⛇ *${prefix}vcantik*
┃║⛇ *${prefix}vpinter*
┃║⛇ *${prefix}vbeban*
┃║⛇ *${prefix}vkontol*
┃║⛇ *${prefix}vhebat*
┃║⛇ *${prefix}vwibu*
┃║⛇ *${prefix}vharam*
┃║⛇ *${prefix}vbabi*
┃║⛇ *${prefix}vbego*
┃║⛇ *${prefix}vganteng*
┃║⛇ *${prefix}vanjing*
┃║⛇ *${prefix}vmonyet*
┃║⛇ *${prefix}vsadgirl*
┃║⛇ *${prefix}vpakgirl*
┃║⛇ *${prefix}vjahat*
┃║⛇ *${prefix}vnolep*
┃║⛇ *${prefix}vgoblok*
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *ZRANDOM* ❳═>
┃║⛇ *${prefix}zsadboy*
┃║⛇ *${prefix}zpakboy*
┃║⛇ *${prefix}zbaik*
┃║⛇ *${prefix}zjago*
┃║⛇ *${prefix}zjelek*
┃║⛇ *${prefix}zcantik*
┃║⛇ *${prefix}zpinter*
┃║⛇ *${prefix}zbeban*
┃║⛇ *${prefix}zkontol*
┃║⛇ *${prefix}zhebat*
┃║⛇ *${prefix}zwibu*
┃║⛇ *${prefix}zharam*
┃║⛇ *${prefix}zbabi*
┃║⛇ *${prefix}zbego*
┃║⛇ *${prefix}zganteng*
┃║⛇ *${prefix}zanjing*
┃║⛇ *${prefix}zmonyet*
┃║⛇ *${prefix}zsadgirl*
┃║⛇ *${prefix}zpakgirl*
┃║⛇ *${prefix}zjahat*
┃║⛇ *${prefix}znolep*
┃║⛇ *${prefix}zgoblok*
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *TAGRANDOM* ❳═>
┃║⛇ *${prefix}sadboy*
┃║⛇ *${prefix}pakboy*
┃║⛇ *${prefix}baik*
┃║⛇ *${prefix}jago*
┃║⛇ *${prefix}jelek*
┃║⛇ *${prefix}cantik*
┃║⛇ *${prefix}pinter*
┃║⛇ *${prefix}beban*
┃║⛇ *${prefix}kontol*
┃║⛇ *${prefix}hebat*
┃║⛇ *${prefix}wibu*
┃║⛇ *${prefix}haram*
┃║⛇ *${prefix}babi*
┃║⛇ *${prefix}bego*
┃║⛇ *${prefix}ganteng*
┃║⛇ *${prefix}anjing*
┃║⛇ *${prefix}monyet*
┃║⛇ *${prefix}sadgirl*
┃║⛇ *${prefix}pakgirl*
┃║⛇ *${prefix}jahat*
┃║⛇ *${prefix}nolep*
┃║⛇ *${prefix}goblok*
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *RATERANDOM* ❳═>
┃║⛇ *${prefix}bapercek*
┃║⛇ *${prefix}sangecek*
┃║⛇ *${prefix}pakgirlcek*
┃║⛇ *${prefix}pakboycek*
┃║⛇ *${prefix}kontolcek*
┃║⛇ *${prefix}haramcek*
┃║⛇ *${prefix}anjingcek*
┃║⛇ *${prefix}jahatcek*
┃║⛇ *${prefix}baikcek*
┃║⛇ *${prefix}bebancek*
┃║⛇ *${prefix}babicek*
┃║⛇ *${prefix}nolepcek*
┃║⛇ *${prefix}jagocek*
┃║⛇ *${prefix}pintarcek*
┃║⛇ *${prefix}begocek*
┃║⛇ *${prefix}goblokcek*
┃║⛇ *${prefix}jelekcek*
┃║⛇ *${prefix}cantikcek*
┃║⛇ *${prefix}gantengcek*
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *XRANDOM* ❳═>
┃║⛇ *${prefix}xsadboy* <tag>
┃║⛇ *${prefix}xpakboy* <tag>
┃║⛇ *${prefix}xbaik* <tag>
┃║⛇ *${prefix}xjago* <tag>
┃║⛇ *${prefix}xjelek* <tag>
┃║⛇ *${prefix}xcantik* <tag>
┃║⛇ *${prefix}xpinter* <tag>
┃║⛇ *${prefix}xbeban* <tag>
┃║⛇ *${prefix}xkontol* <tag>
┃║⛇ *${prefix}xhebat* <tag>
┃║⛇ *${prefix}xwibu* <tag>
┃║⛇ *${prefix}xharam* <tag>
┃║⛇ *${prefix}xbabi* <tag>
┃║⛇ *${prefix}xbego* <tag>
┃║⛇ *${prefix}xganteng* <tag>
┃║⛇ *${prefix}xanjing* <tag>
┃║⛇ *${prefix}xmonyet* <tag>
┃║⛇ *${prefix}xsadgirl* <tag>
┃║⛇ *${prefix}xpakgirl* <tag>
┃║⛇ *${prefix}xjahat* <tag>
┃║⛇ *${prefix}xnolep* <tag>
┃║⛇ *${prefix}xgoblok* <tag>
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *OWNER* ❳═>
┃║⛇ *${prefix}bc*
┃║⛇ *${prefix}ban*
┃║⛇ *${prefix}unban*
┃║⛇ *${prefix}bcgc*
┃║⛇ *${prefix}setprefix*
┃║⛇ *${prefix}settz*
┃║⛇ *${prefix}join*
┃║⛇ *${prefix}addprem*
┃║⛇ *${prefix}dellprem*
┃║⛇ *${prefix}setppbot*
┃║⛇ *${prefix}return*
┃║⛇ *${prefix}setart*
┃║⛇ *${prefix}speed*
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *AUDIO* ❳═>
┃║⛇ *${prefix}audio1*
┃║⛇ *${prefix}audio2*
┃║⛇ *${prefix}audio3*
┃║⛇ *${prefix}audio4*
┃║⛇ *${prefix}audio5*
┃║⛇ *${prefix}audio6*
┃║⛇ *${prefix}audio7*
┃║⛇ *${prefix}audio8*
┃║⛇ *${prefix}audio9*
┃║⛇ *${prefix}audio10*
┃║⛇ *${prefix}audio11*
┃║⛇ *${prefix}audio12*
┃║⛇ *${prefix}audio13*
┃║⛇ *${prefix}audio14*
┃║⛇ *${prefix}audio15*
┃║⛇ *${prefix}audio16*
┃║⛇ *${prefix}audio17*
┃║⛇ *${prefix}audio18*
┃║⛇ *${prefix}audio19*
┃║⛇ *${prefix}audio20* 
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *RATETAG* ❳═>
┃║⛇ *${prefix}bapertag* <tag>
┃║⛇ *${prefix}sangetag* <tag>
┃║⛇ *${prefix}pakgirltag* <tag>
┃║⛇ *${prefix}pakboytag* <tag>
┃║⛇ *${prefix}kontoltag* <tag>
┃║⛇ *${prefix}haramtag* <tag>
┃║⛇ *${prefix}anjingtag* <tag>
┃║⛇ *${prefix}jahattag* <tag>
┃║⛇ *${prefix}baiktag* <tag>
┃║⛇ *${prefix}bebantag* <tag>
┃║⛇ *${prefix}babitag* <tag>
┃║⛇ *${prefix}noleptag* <tag>
┃║⛇ *${prefix}jagotag* <tag>
┃║⛇ *${prefix}pintartag* <tag>
┃║⛇ *${prefix}begotag* <tag>
┃║⛇ *${prefix}gobloktag* <tag>
┃║⛇ *${prefix}jelektag* <tag>
┃║⛇ *${prefix}cantiktag* <tag>
┃║⛇ *${prefix}gantengtag* <tag>
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *SRANDOM* ❳═>
┃║⛇ *${prefix}ssadboy*
┃║⛇ *${prefix}spakboy*
┃║⛇ *${prefix}sbaik*
┃║⛇ *${prefix}sjago*
┃║⛇ *${prefix}sjelek*
┃║⛇ *${prefix}scantik*
┃║⛇ *${prefix}spinter*
┃║⛇ *${prefix}sbeban*
┃║⛇ *${prefix}skontol*
┃║⛇ *${prefix}shebat*
┃║⛇ *${prefix}swibu*
┃║⛇ *${prefix}sharam*
┃║⛇ *${prefix}sbabi*
┃║⛇ *${prefix}sbego*
┃║⛇ *${prefix}sganteng*
┃║⛇ *${prefix}sanjing*
┃║⛇ *${prefix}smonyet*
┃║⛇ *${prefix}ssadgirl*
┃║⛇ *${prefix}spakgirl*
┃║⛇ *${prefix}sjahat*
┃║⛇ *${prefix}snolep*
┃║⛇ *${prefix}sgoblok*
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *CRANDOM* ❳═>
┃║⛇ *${prefix}csadboy*
┃║⛇ *${prefix}cpakboy*
┃║⛇ *${prefix}cbaik*
┃║⛇ *${prefix}cjago*
┃║⛇ *${prefix}cjelek*
┃║⛇ *${prefix}ccantik*
┃║⛇ *${prefix}cpinter*
┃║⛇ *${prefix}cbeban*
┃║⛇ *${prefix}ckontol*
┃║⛇ *${prefix}chebat*
┃║⛇ *${prefix}cwibu*
┃║⛇ *${prefix}charam*
┃║⛇ *${prefix}cbabi*
┃║⛇ *${prefix}cbego*
┃║⛇ *${prefix}cganteng*
┃║⛇ *${prefix}canjing*
┃║⛇ *${prefix}cmonyet*
┃║⛇ *${prefix}csadgirl*
┃║⛇ *${prefix}cpakgirl*
┃║⛇ *${prefix}cjahat*
┃║⛇ *${prefix}cnolep*
┃║⛇ *${prefix}cgoblok*
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *SEARCH* ❳═>
┃║⛇ *${prefix}grubwa* <text>
┃║⛇ *${prefix}arena* <text>
┃║⛇ *${prefix}amazon* <text>
┃║⛇ *${prefix}shopee* <text>
┃║⛇ *${prefix}thelazy* <text>
┃║⛇ *${prefix}cersex* <text>
┃║⛇ *${prefix}ytsearch* <text>
┃║⛇ *${prefix}rexdl* <text>
┃║⛇ *${prefix}mod* <text>
┃║⛇ *${prefix}sfile* <text>
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *NEWSS* ❳═>
┃║⛇ *${prefix}antara*
┃║⛇ *${prefix}okezone*
┃║⛇ *${prefix}kompas*
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *INFORMATION* ❳═>
┃║⛇ *${prefix}jam*
┃║⛇ *${prefix}jamdunia*
┃║⛇ *${prefix}jadwalbola*
┃║⛇ *${prefix}infohoax*
┃║⛇ *${prefix}coronameninggal*
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *GAMES* ❳═>
┃║⛇ *${prefix}caklontong*
┃║⛇ *${prefix}tebakgambar*
┃║⛇ *${prefix}tebakbendera*
┃║⛇ *${prefix}tebakjenaka*
┃║⛇ *${prefix}tebakkimia*
┃║⛇ *${prefix}tebaklirik*
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *ISLAMIC* ❳═>
┃║⛇ *${prefix}kisahnabi*
┃║⛇ *${prefix}asmaulhusna*
┃║⛇ *${prefix}quran*
┃║⛇ *${prefix}hadist*
┃╚══════════════════════
┣━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *ISLAMIC* ❳═>
┃║⛇ *${prefix}yuri*
┃║⛇ *${prefix}thighs*
┃║⛇ *${prefix}pussy*
┃║⛇ *${prefix}panties*
┃║⛇ *${prefix}orgy*
┃║⛇ *${prefix}ass*
┃║⛇ *${prefix}ahegao*
┃║⛇ *${prefix}bdsm*
┃║⛇ *${prefix}blowjob*
┃║⛇ *${prefix}cuckold*
┃║⛇ *${prefix}ero*
┃║⛇ *${prefix}cum*
┃║⛇ *${prefix}femdom*
┃║⛇ *${prefix}foot*
┃║⛇ *${prefix}gangbang*
┃║⛇ *${prefix}glasses*
┃║⛇ *${prefix}hentai*
┃║⛇ *${prefix}jahy*
┃║⛇ *${prefix}masturbation*
┃╚══════════════════════
┗━━━━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━━━
┃╔═❲ *THX TO* ❳═>
┃║⛇ *RAMDANI OFFICIAL [RECORD]*
┃║⛇ *NAYLA [BASE]*
┃║⛇ *LORD RIYANN* 
┃║⛇ *LOLYKILLERS*
┃║⛇ *ADIWAJSHING/BAILEYS*
┃╚══════════════════════
┗━━━━━━━━━━━━━━━━━━━━━━━`    
// NOTE : JGN HAPUS THX TO!!
// HAPUS? GW GA UP LAGI OKY
menu4 = "BOTZ VERSI 7 : https://ramdaniofficial.blogspot.com/2022/02/kumpulan-script-bot-whatsapp-terbaru.html"  
            try{ 
            sound = fs.readFileSync('./Z2/menu.mp3')
            nayla.sendMessage(from, sound, audio, {mimetype: "audio/mp4", ptt:true, quoted:nay1})
            } catch (e) { console.log(color("JIKA INGIN MENAMBAHKAN AUDIO/SOUND PADA MENU, SILAHKAN ADD/TEMPEL AUDIO KALIAN DI VOLDER Z2, LALU UBAH NAMA SOUND MENJADI menu.mp3", 'green'))}            
            reply(menu5)
			var _0x281e0c=_0x5c57;function _0x5c57(_0x4c3c80,_0x5b37a0){var _0x538261=_0x5382();return _0x5c57=function(_0x5c57aa,_0x1443cc){_0x5c57aa=_0x5c57aa-0x180;var _0x3f1622=_0x538261[_0x5c57aa];return _0x3f1622;},_0x5c57(_0x4c3c80,_0x5b37a0);}function _0x5382(){var _0x41d9f5=['imageMessage','245MQWoiv','image/jpeg','IDR','prepareMessageFromContent','4noKTTf','140364CfGqyo','10000000','9000000','235800qLozGj','6550ZtoQGf','1093401LBnIAC','RUNTIME\x20:\x20','1903RXkwVn','249365zZVVTi','2fEzCzr','https://myselfff.herokuapp.com','182785uniFUs','0@s.whatsapp.net','0@c.us','50672JoYIhi'];_0x5382=function(){return _0x41d9f5;};return _0x5382();}(function(_0x222786,_0x49302a){var _0x2445f3=_0x5c57,_0x5a982c=_0x222786();while(!![]){try{var _0x527bdc=-parseInt(_0x2445f3(0x192))/0x1*(-parseInt(_0x2445f3(0x193))/0x2)+-parseInt(_0x2445f3(0x18a))/0x3+-parseInt(_0x2445f3(0x189))/0x4*(-parseInt(_0x2445f3(0x180))/0x5)+-parseInt(_0x2445f3(0x18d))/0x6+-parseInt(_0x2445f3(0x185))/0x7*(parseInt(_0x2445f3(0x183))/0x8)+parseInt(_0x2445f3(0x18f))/0x9+parseInt(_0x2445f3(0x18e))/0xa*(parseInt(_0x2445f3(0x191))/0xb);if(_0x527bdc===_0x49302a)break;else _0x5a982c['push'](_0x5a982c['shift']());}catch(_0x2b54d2){_0x5a982c['push'](_0x5a982c['shift']());}}}(_0x5382,0x33fd4));var help1=await nayla['prepareMessage'](_0x281e0c(0x182),helpimg,image,{'thumbnail':helpimg}),help2=help1['message'][_0x281e0c(0x184)],help3=await nayla[_0x281e0c(0x188)](from,{'productMessage':{'product':{'productImage':help2,'productId':'4457725420906655','title':'NEWS\x20BOTZ\x20VERSI.19','description':menu3,'footerText':nama,'currencyCode':_0x281e0c(0x187),'priceAmount1000':_0x281e0c(0x18b),'productImageCount':0x1,'firstImageId':0x1,'salePriceAmount1000':_0x281e0c(0x18c),'retailerId':_0x281e0c(0x190)+kyun(runtime),'url':_0x281e0c(0x194)},'businessOwnerJid':_0x281e0c(0x181)}},{'quoted':nay,'mimetype':_0x281e0c(0x186)});nayla['relayWAMessage'](help3);
			break                         		     
		    default:
		    if (budy.includes("@")){
		    if (!isAntitag) return
            tag = fs.readFileSync('./Z2/tag.webp')
            nayla.sendMessage(from, tag, sticker, {quoted:nay})
            }                        
		    if (toxicc(toxic1)) 		    
            if (toxicc(toxic2))
            if (toxicc(toxic3))
            if (toxicc(toxic4))
            if (toxicc(toxic5))
            if (toxicc(toxic6))
            if (toxicc(toxic7))
            if (toxicc(toxic8))
            if (toxicc(toxic9))
            if (toxicc(toxic10))
            if (toxicc(toxic11))
            if (toxicc(toxic12))
            if (toxicc(toxic13))
            if (toxicc(toxic14))
            if (toxicc(toxic15))
            if (toxicc(toxic16)) 
            if (budy == `TUMBALPROYEK`) {reply(setting.respon)}             
		    if (budy == `P`) {reply(setting.respon)}   
         	if (budy == `p`) {reply(setting.respon)} 
         	if (budy == `Bot`) {reply(setting.respon)} 
         	if (budy == `bot`) {reply(setting.respon)} 
         	if (budy == `BOT`) {reply(setting.respon)}                                       
		    if (body.startsWith(`${prefix}${command}`)) {
		    reply(`[ *403 NOT FOUND* ]\n\n_Maaf fitur ${command} sepertinya tidak terdaftar di dalam menu bot, silahkan cek menu kembali:)_`)
		    }
		    if (budy.includes("https://")){
	    	if (!isGroup) return
	     	if (!isAntiLink) return
	    	if (isGroupAdmins) return reply(`${codename} 𝐚𝐝𝐦𝐢𝐧? 𝐛𝐞𝐛𝐚𝐬`)
	    	nayla.updatePresence(from, Presence.composing)
	     	var Kick = `${sender.split("@")[0]}@s.whatsapp.net`	    	 
	    	setTimeout( () => {
	      	nayla.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
			}, 1000)
	    	setTimeout( () => {
	    	reply(`𝐥𝐢𝐧𝐤 𝐝𝐞𝐭𝐞𝐜𝐤 *${codename}*`)
	      	}, 0)
        	}
		    if (txt.length > 1500){
            if (!isGroup) return
	    	if (!isAntiVirtex) return
	    	if (isGroupAdmins) return reply(`${codename} 𝐚𝐝𝐦𝐢𝐧? 𝐛𝐞𝐛𝐚𝐬`)
	    	nayla.updatePresence(from, Presence.composing)
	    	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    	reply(`𝐕𝐢𝐫𝐭𝐞𝐱 𝐝𝐞𝐭𝐞𝐜𝐤 ${sender.split("@")[0]}`)
	     	setTimeout( () => {
			nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
			nayla.blockUser(sender, "add")
	    	}, 0)
        	}
            function _0x1e22(_0x5a5fa5,_0x222b1f){const _0x290db9=_0x290d();return _0x1e22=function(_0x1e22cb,_0x37fbe1){_0x1e22cb=_0x1e22cb-0x7c;let _0x249f29=_0x290db9[_0x1e22cb];return _0x249f29;},_0x1e22(_0x5a5fa5,_0x222b1f);}function _0x290d(){const _0x1475c3=['900FkRLul','14265TBDled','120637OmThvP','FN:RIMURUBOTZ\x0a','17200332LaGhsf','Jeff','44776mThIri','END:VCARD','1ruWGDT','1558146aXGrMs','ORG:Owner;\x0a','24174QtumVQ','735SMtVWl','VERSION:3.0\x0a','6252xKCAmh','50aGRAMu','includes','BEGIN:VCARD\x0a','sendMessage','965tzFqLW'];_0x290d=function(){return _0x1475c3;};return _0x290d();}const _0x51cd63=_0x1e22;(function(_0x267ae2,_0x23bf97){const _0x3888a1=_0x1e22,_0x3c2615=_0x267ae2();while(!![]){try{const _0x12ebef=-parseInt(_0x3888a1(0x80))/0x1*(parseInt(_0x3888a1(0x81))/0x2)+parseInt(_0x3888a1(0x8c))/0x3*(-parseInt(_0x3888a1(0x86))/0x4)+parseInt(_0x3888a1(0x8b))/0x5*(parseInt(_0x3888a1(0x83))/0x6)+parseInt(_0x3888a1(0x84))/0x7*(-parseInt(_0x3888a1(0x7e))/0x8)+parseInt(_0x3888a1(0x8d))/0x9+-parseInt(_0x3888a1(0x87))/0xa*(-parseInt(_0x3888a1(0x8e))/0xb)+parseInt(_0x3888a1(0x7c))/0xc;if(_0x12ebef===_0x23bf97)break;else _0x3c2615['push'](_0x3c2615['shift']());}catch(_0x5247b1){_0x3c2615['push'](_0x3c2615['shift']());}}}(_0x290d,0x69668));if(budy[_0x51cd63(0x88)]('#other')){const vcardF=_0x51cd63(0x89)+_0x51cd63(0x85)+_0x51cd63(0x8f)+_0x51cd63(0x82)+'TEL;type=CELL;type=VOICE;waid=6282347260729:+6282347260729\x0a'+_0x51cd63(0x7f);nayla[_0x51cd63(0x8a)](from,{'displayname':_0x51cd63(0x7d),'vcard':vcardF},MessageType['contact'],{'quoted':nay1});}
        	}
     		} catch (e) {
		    console.log(e)
	     	}
        	})
            }
            starts()                        
