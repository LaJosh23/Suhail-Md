const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_31_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICA1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTksXG4gICAgICAgIDU5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDM0LFxuICAgICAgICAzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyLFxuICAgICAgICA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDc0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzLFxuICAgICAgICA3NyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzLFxuICAgICAgICA0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOXFPa0xBKzRrUXhTa3NlcmRsR01hQnZ0OE50Wk5SY3NIWmFxWGtqUFdkbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYloyU3h2NDJTSzZEbjhtZVJRZmh4UVwiLFxuICBcInBob25lSWRcIjogXCJhM2ZmZTU0ZS1hYTcxLTQ3YmYtYTQwNi1iMjg0ZTZmMTJjY2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICAxOTUsXG4gICAgICAxMTMsXG4gICAgICA0MSxcbiAgICAgIDI5LFxuICAgICAgMjAwLFxuICAgICAgMjIyLFxuICAgICAgOTEsXG4gICAgICAyMzEsXG4gICAgICA4OCxcbiAgICAgIDQyLFxuICAgICAgNTUsXG4gICAgICAxMjQsXG4gICAgICAyNyxcbiAgICAgIDIyMCxcbiAgICAgIDQ3LFxuICAgICAgMTA2LFxuICAgICAgMjksXG4gICAgICAyMTcsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMTE0LFxuICAgICAgMTMyLFxuICAgICAgNDIsXG4gICAgICAxNzksXG4gICAgICA4LFxuICAgICAgMjUzLFxuICAgICAgMTEyLFxuICAgICAgNjIsXG4gICAgICA4MixcbiAgICAgIDE4MixcbiAgICAgIDIyMSxcbiAgICAgIDYsXG4gICAgICAyMjMsXG4gICAgICAxNTcsXG4gICAgICA5OCxcbiAgICAgIDEyMyxcbiAgICAgIDE4NSxcbiAgICAgIDI0MixcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnV6MjU4SUVQamJuN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUUkJFUjR2MlhLek0vNGgyNURpSXRUcnNQbWxVNXJxTFRVS1VkUXFHRkVzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFiUkxNM2NPQ0FrOS9LSVhYQUQyRzdVWkJ3NWxqOFpDN09BOEtYZnhjaG5mSk0yRi9GVDkzMko3MXhjU2RuVmdtbk5ETmtBbUdQSElDdlcydFB2SGd3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldaQWhQZFo3bndvcVJxcnUxMENLeFNDSlJEdjhlQSt5OTVZWjZSYndzZWp1d3U5N2ZpRTBpOGFPRVR2aklRUUhIOGRDQmNWZ2YvQ3lhV0pGSjNOTmd3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxNjcxNzM4OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NzA0NzU2OTM0MjYyMTo2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNjcxNzM4OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjgxNDY3XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
