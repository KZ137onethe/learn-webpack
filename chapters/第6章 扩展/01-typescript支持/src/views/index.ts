import "./style.css";
import { applyCss } from "@/utils/apply";

const appEl = document.querySelector<HTMLDivElement>("#app")!;

const personInfo: Person = {
  name: '张三',
  age: 18,
  birthDate: new Date('2000-09-05'),
  academicDegree: '高中'
}

const spanEl = document.createElement('span');
spanEl.innerText = `姓名：${personInfo.name}，年龄：${personInfo.age}，出生日期：${personInfo.birthDate.toLocaleDateString()}，学历：${personInfo.academicDegree}`;

applyCss(spanEl, {
  color: 'red',
  fontSize: '20px',
});

appEl.appendChild(spanEl);


console.log("hello world");