import { getRandomEmoji, getRandomEmojiByUnicode } from "../type/model/propertyTypeCodeRef"

const array: Array<string> = new Array<string>()
while (true) {
    array.push('1')
    console.log(array.length, getRandomEmojiByUnicode(), getRandomEmojiByUnicode(), getRandomEmojiByUnicode(), getRandomEmojiByUnicode(), getRandomEmojiByUnicode())
}
