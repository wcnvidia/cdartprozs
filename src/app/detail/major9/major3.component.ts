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
    des: "主要培养汽车维修，汽车保养，故障检测等工作岗位的人才，毕业后可从事汽车维修，汽车保养等工作。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "课程",
    des: "汽车构造，机械基础，汽车文化，汽车保险与理赔，现代汽车变速器技术，现代汽车电控技术，现代汽车液压技术，汽车电器与电子技术，清洁能源汽车等。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "汽车维修工，维修电工证，助理汽车评估师，汽车钣金工，特种电工等。",
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
