try {
  /** node 11以下不支持 Array.prototype.flatMap()
   * 假设我们想要删除所有负数，并将奇数拆分成偶数和 1
   */
  const a = [5, 4, -3, 20, 17, -33, -4, 18];
  const result = a.flatMap((n) => {
    if (n < 0) {
      return [];
    }
    return n % 2 === 0 ? [n] : [n - 1, 1];
  });
  console.log("💬 ⋮ result => ", result); // [4, 1, 4, 20, 16, 1, 18]

  /** node 20以下不支持 Array.prototype.with()
   * 复制一个数组，在在索引处改变它
   */
  const b = [7, 2, , -9, -11, 17];
  const toResult = b.with(2, 3);
  console.log("💬 ⋮ toResult => ", toResult);

  /** node 21以下不支持 JSON.rawJSON()
   * 创建了一个包含JSON文本的“原始JSON”对象。当序列化为JSON时，原始JSON对象被视为已经是JSON的一部分。此文本必须是有效的JSON。
   */
  const rowJson_1 = JSON.rawJSON("12345678901234567890");
  const json_1 = JSON.stringify({ value: rowJson_1 }); // 不会造成精度缺失
  console.log(
    "💬 ⋮ json_1 => ",
    json_1,
    "造成精度缺失 => ",
    JSON.stringify({ value: 12345678901234567890 })
  );
  // 可以解析码点，比如：Unicode码点，UTF-16编码
  const json_2 = JSON.stringify({ value: "\u{1F98A}" }); // Unicode码点 🦊
  console.log("💬 ⋮ json_2 => ", json_2);
  const json_3 = JSON.stringify({ value: "\uD83E\uDD8A" }); // UTF-16编码 🦊
  console.log("💬 ⋮ json_3 => ", json_3)
} catch (e) {
  console.log("当前环境不支持 => ", e);
}
