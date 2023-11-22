function getRandomEmojiByUnicode() {
  const ranges = [
    [0x1f600, 0x1f64f], // 常用的 emoji
    [0x1f300, 0x1f5ff], // 符号和杂项符号
    [0x1f680, 0x1f6ff], // 交通和地图符号
    [0x1f900, 0x1f9ff], // 表情符号
    [0x2600, 0x26ff], // 杂项符号
  ];

  const usedEmojis = [];
  let randomCodePoint;
  let emoji;

  do {
    const randomRange = ranges[Math.floor(Math.random() * ranges.length)];
    const [start, end] = randomRange;
    const codePointRange = end - start + 1;
    randomCodePoint = start + Math.floor(Math.random() * codePointRange);
    emoji = String.fromCodePoint(randomCodePoint);
  } while (usedEmojis.includes(emoji));

  usedEmojis.push(emoji);
  return emoji;
}
const array = [];
while (true) {
  array.push("1");
  console.log(
    array.length,
    getRandomEmojiByUnicode(),
    getRandomEmojiByUnicode(),
    getRandomEmojiByUnicode(),
    getRandomEmojiByUnicode(),
    getRandomEmojiByUnicode()
  );
}
