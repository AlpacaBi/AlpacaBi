import * as ink from 'https://deno.land/x/ink/mod.ts'
import { sleep } from "https://x.nest.land/sleep@1.0.0/mod.ts";
import qrcode from 'https://deno.land/x/qrcode_terminal/mod.js'


let text = ink.html(`\n\nHi, I am <ink style='color: rgb(255,153,0);font:bold;'>Alpaca Bi</ink>, A Web Full Stack Developer From China\n`)

await sleep(1.5)

console.log(text)

await sleep(1.5)

let text2 = "👇 Hit in your terminal to connect with me."
let text3 = ink.colorize('<yellow>*******************</yellow>')
let text4 = ink.colorize('<yellow>*  npx alpaca-bi  *</yellow>')
let text5 = ink.colorize('<yellow>*******************</yellow>\n\n')
console.log(text2)
console.log(text3)
console.log(text4)
console.log(text5)

await sleep(1.5)

let text6 = ink.colorize('👇If you want to connect with me, Scan the WeChat qrcode to add my <green>WeChat</green>!!\n')
console.log(text6)
qrcode.generate("wxp://f2f0KtjBVNpOFTX96GYJRZSYJGwMoOnJtIYm", {small: true})

await sleep(1.5)

let text7 = ink.colorize('\n👇Or send me a <blue>Email</blue>!!\n')
let text8 = ink.colorize('<blue>***************************</blue>')
let text9 = ink.colorize('<blue>*  biguokang@outlook.com  *</blue>')
let text10 = ink.colorize('<blue>***************************</blue>\n\n')

console.log(text7)
console.log(text8)
console.log(text9)
console.log(text10)

await sleep(1.5)

