// 得到所有省份
export async function getProvinces() {
  const url = "/api/china";
  return await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());
}

// 根据省份id得到所有城市
export async function getCities(id) {
  const url = `/api/china/${id}`;
  return await fetch(url).then((resp) => resp.json());
}
