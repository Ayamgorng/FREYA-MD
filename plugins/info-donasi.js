import fs from 'fs'
let handler = async (m, { conn }) => {
	let tqto = `
「 *DONASI* 」

╭─「 • *ᴘᴜʟꜱᴀ* • 」
│ • *TELKOM* 083849469400
╰─────

╭─「 • *ᴇ-ᴡᴀʟʟᴇᴛ* • 」
│ • 083849469400
╰─────

_◛˖ ᴛᴇʀɪᴍᴀᴋᴀꜱɪʜ ᴜɴᴛᴜᴋ ʏᴀɴɢ ꜱᴜᴅᴀʜ ʙᴇʀᴅᴏɴᴀꜱɪ_
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/d228acf87d28f59c187ac.jpg' }, caption: tqto }, m)
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|dns)$/i;

export default handler;