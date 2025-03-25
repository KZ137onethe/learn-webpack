import { getProvinces } from "@/util/areaService.js";

getProvinces().then((data) => {
  const ul = $(".provinces");
  // 对省份数组进行遍历
  for (const p of data) {
    // 对省份生成生成一个li，对每个li包含省份名字，以及指向详情的链接
    const li = $("<li>").appendTo(ul);
    const a = $("<a>").text(p.name).appendTo(li);
    a.prop("href", `detail.html?name=${p.name}&id=${p.id}`);
  }
});
