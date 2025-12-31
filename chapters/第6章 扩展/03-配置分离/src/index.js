import "./style.scss"

const uploadEl = document.querySelector("input#upload-input")
const uploadWrapper = document.querySelector("div.upload-wrapper")
const uploadBtn = uploadWrapper.querySelector("button.upload-btn")

uploadBtn.addEventListener("click", () => uploadEl.click())

uploadEl.addEventListener("change", (e) => {
  const file = e.target.files[0]
  // 1. 在 uploadWrapper 最后面插入 info
  // 2. 移除 uploadBtn
  const parent = buildFileInfoDom(file)
  uploadWrapper.append(parent)
  uploadBtn.remove()
})

function buildFileInfoDom(file) {
  console.log("💬 ⋮ buildFileInfoDom ⋮ file => ", file)
  const parent = document.createElement("div")
  parent.className = "upload-info"
  const textNodes = [
    `文件名称：${file.name}`,
    `文件类型：${transformFormat("fileType", file.type)}`,
    `文件大小：${transformFormat("bytes", file.size)}`,
    `最后修改日期：${transformFormat("date", file.lastModified)}`,
  ]
  for (let text of textNodes) {
    const el = document.createElement("div")
    el.innerText = text
    Object.assign(el.style, {
      width: "fit-content",
    })
    parent.append(el)
  }

  return parent
}

function transformFormat(type, val) {
  switch (type) {
    case "date": {
      if (!Number.isInteger(val)) throw new Error("传入的不是一个时间戳")
      const zhDate = new Date(val)
        .toLocaleDateString("zh-CN")
        .replace(/(\d+)\/(\d+)\/(\d+)/g, "$1年$2月$3日")
      return zhDate
    }
    case "bytes": {
      const digits = Math.log2(val)
      if (digits <= 10) {
        return `${val} bytes`
      } else if (digits <= 20) {
        return `${Number(val / Math.pow(2, 10)).toFixed(2)} KB`
      } else if (digits <= 30) {
        return `${Number(val / Math.pow(2, 20)).toFixed(2)} MB`
      } else {
        console.warn("1GB以上不做判断")
      }
    }
    case "fileType": {
      if (!val) {
        return "未知"
      }
      return val.split("/").slice(-1)
    }
  }
}
