import { getCities } from "@/util/areaService";
import qs from "query-string";

const parsed = qs.parse(location.search);

$(".title").text(parsed.name);
const dl = $("dl");

getCities(parsed.id).then((data) => {
  for (const { id, name } of Object.values(data)) {
    $("<dd>").text(name).appendTo(dl);
  }
});
