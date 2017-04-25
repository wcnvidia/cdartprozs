import { Component, OnInit } from '@angular/core';
export class Card {
  title: string;
  des: string;
  bg: string;
  icon: string;
}
const Cards: Card[] = [
  {
    title: "目标",
    des: "培养具有较强的营销操作能力和营销管理素质，具有汽车营销，会展销售等专业知识与技能，懂经济，通营销，知法律的应用型高级专业人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "课程",
    des: "汽车构造，机械基础，汽车文化，汽车保险与理赔，市场营销，汽车销售，现代汽车变速器技术，现代汽车电控技术，现代汽车液压技术，汽车电器与电子技术，清洁能源汽车等。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "普通话证，计算机操作证，助理汽车评估师，助理营销师，电工上岗证，驾驶证。",
    bg: "table table-danger",
    icon: "glyphicon glyphicon-book fontColor fontSize"
  },
]
@Component({
  selector: 'app-major2',
  templateUrl: './major3.component.html',
  styleUrls: ['./major3.component.css']
})
export class Major2Component implements OnInit {
cards = Cards;
  constructor() { }

  ngOnInit() {
  }

}
