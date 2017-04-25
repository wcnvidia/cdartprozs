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
    des: "主要培养现代工程造价，建筑工程预算，安装工程预算，建筑工程招投标等工作的高级技术应用性人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "课程",
    des: "工程测量，工程制图，钢筋混凝土结构，施工组织设计，工程管理，建筑工程施工，建筑力学，建筑材料，建筑设备，地基基础，建筑施工技术，建筑cad，建筑工程项目管理，工程建设监理概论，建筑工程计量与计价，工程造价控制，工程预算基础等。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "普通话等级证书，计算机操作证，施工员，预算员测量员，造价员等。",
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
