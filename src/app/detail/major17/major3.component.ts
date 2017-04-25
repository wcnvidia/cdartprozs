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
    des: "主要培养从事相关公司的电脑绘图，数控编程设计，加工中心操作，模具制作与设计，电火花及线切割，CAD/CAM，数控加工等高素质高技能应用型人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "课程",
    des: "机械制图，cad，数控编程，数控加工技术，机械制造，车工工艺，钳工工业，测量技术与公差配合热处理，电气控制与plc，数控机床故障与维修等。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "计算机操作证，维修电工车工证，数控证，编程员，钳工证。",
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
cards = Cards
  constructor() { }

  ngOnInit() {
  }

}
