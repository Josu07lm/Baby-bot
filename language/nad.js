exports.wait = () => {
	return`*「❗」ESPERA*`
}

exports.succes = () => {
	return`*「 EXITO 」*`
}

exports.lvlon = () => {
	return`*「❗」HABILITAR NIVEL*`
}

exports.lvloff = () => {
	return`*「❗」NIVELACIÓN DESACTIVADA*`
}

exports.lvlnul = () => {
	return`*「❗」TU NIVEL AÚN ESTÁ VACÍO*`
}

exports.lvlnoon = () => {
	return`*「❗」EL NIVEL DE GRUB TODAVÍA NO ESTÁ ACTIVADO*`
}

exports.noregis = () => {
	return`*「❗」TODAVÍA SIN VERIFICACIÓN「❗」*\n\nEJEMPLO : @verify`
}

exports.baned = () => {
	return`*「❗」LO SIENTO LO SIENTO AJA NIH BRO, PERO YA ESTA PROHIBIDO YAHAHAHA HAYUUU :V*`
}

exports.premium = (prefix) => {
	return`Lu ¿Quién? ¡Esta función es solo para usuarios premium!
	Mi jefe primero actualiza a premium
	Si está interesado, comuníquese con mi dueño
	Tipo: propietario de $ {prefix}`
}

exports.rediregis = () => {
	return`*Ah, has hecho la verificación -_-*`
}

exports.stikga = () => {
	return`*「 HA FALLADO 」Intenta responder o volver a etiquetar a hermana*`
}

exports.linkga = () => {
	return`*「❗」lo siento, el enlace no es válido sis*`
}

exports.groupo = () => {
	return`*「❗」SOLO EN GRUPOS*`
}

exports.ownerb = () => {
	return`*「❗」AOLO DUEÑO DEL BOT*`
}

exports.ownerg = () => {
	return`*「❗」SOLO DUEÑO DEL GRUPO*`
}

exports.admin = () => {
	return`*「❗」SOLO ADMIS DEL GRUPO*`
}

exports.badmin = () => {
	return`*「❗」BOT NECESITA SER ADMI, TRANQUI CON CONFIANZA NO ESTOY PROGRAMADO PARA ROBAR GRUPOS*`
}

exports.bug = () => {
	return`*Se han informado problemas al propietario del BOT, no se responderá a los informes falsos*`
}

exports.wrongf = () => {
	return`*「🗿」¿Dónde está el texto, hermana?*`
}

exports.clears = () => {
	return`*Exito*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
\`\`\`➸ Nombre : ${pushname}\`\`\`
\`\`\`➸ Numero : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ Xp : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ Level : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*maaf ${pushname} limit hari ini habis*
*Limit di reset setiap jam 24:00*

\`\`\`Upgrade Premium Bebas Limit\`\`\`
\`\`\`➸ 20K : 1 Bulan\`\`\`
\`\`\`Jika berminat silahkan hubungi owner\`\`\`
\`\`\`Kirim perintah : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${isPrem ? '9999' : `${limitCounts}`}

Upgrade premium bosku, biar bebas gunain bot`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ Nombre : ${pushname}
┃│➸ Numero : ${sender.split("@")[0]}
┃│➸ Dinero : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = () => {
return`*DONASI KAK*
Pulsa : 0812-1444-1027
Gopay : 0855-5924-0360
Dana : 0855-5924-0360
Saweria : https://saweria.co/ramlangans

Donasi supaya bot terus update & Aktif`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`🔰 -----[ 「 *IKLAN ${botName}* 」 ]----- 🔰
──────────────────────────────
◯ * ALQUILA LISTA Y CREA BOTS: *
◯ * ALQUILER: 25K / GRUPO (MES) *
◯ * CREAR: 100K (PUEDE SER DUEÑO) *
◯ * PUEDE PAGAR A TRAVÉS DE: *
◯ * OVO, GOPAY, DANA, PULSE + 10K *
──────────────────────────────
◯ * VENTAJAS DEL ALQUILER DE BOT: *
◯ * 1. PUEDE ENTRAR BOTS EN GRUPO *
◯ * 2. PUEDE UTILIZAR CARACTERÍSTICAS PREMIUM *
◯ * VENTAJAS PARA BOT: *
◯ * 1. PUEDE SER SU PROPIO DUEÑO DE BOT *
◯ * 2. PUEDE CAMBIAR EL PROPIO NOMBRE DEL BOT *
◯ * 3. PUEDE LLEVAR BOTS AL GRUPO *
◯ * 4. PUEDE UTILIZAR EL PROPIETARIO DEL COMANDO *
◯ * 5. PUEDE ALQUILAR LOS BOTS DE VUELTA *
──────────────────────────────
◯ *JIKA MINAT IKLAN DIATAS*
◯ *HARAP HUBUNGI NOMOR DIBAWAH :*
◯ *wa.me/${ownerNumbers}*
──────────────────────────────
🔰 -----[「 *POWERED BY ${ownerName}* 」]----- 🔰`
}