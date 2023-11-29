import { protocol, cxzy, seq } from './excel2entityProtocol'
let preEntiy = protocol
protocol.objs[0].publishstatus = 2

type Coldef = [
    zh_name: string,
    en_name: string,
    type: string,
    desc: string
]
let temp = cxzy.split("\n")
let one = BigInt("1")
let start_code = BigInt(preEntiy.objs[0].properties[0].propertycode.toString()) + BigInt(seq)
console.log(preEntiy.objs[0].properties[0].propertycode.toString())
protocol.objs[0].properties.forEach((p) => {
    start_code += one
    p.propertycode = start_code.toString()
    //@ts-ignore
    p.publishstatus = 2
})
console.log(preEntiy.objs[0].properties[0].propertycode.toString())


//@ts-ignore
const fs = require('fs');
fs.writeFile('./demo/Entiy.json', JSON.stringify(preEntiy), (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('success')
    }
})


