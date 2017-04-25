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
    des: "培养掌握工程力学，土力学，测量学，房屋建筑学和结构工程学的基础理论和基本知识，具备从事土木工程的项目规划，设计，研究开发，施工及管理的能力，能在房屋建筑，地下建筑，隧道，路桥，矿井等的设计，研究，施工，教育，管理，投资，开发部门从事技术或管理工作的高级工程技术人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "课程",
    des: "工程测量，工程制图，钢筋混凝土结构，施工组织设计，工程管理，建筑工程施工，建筑力学，建筑材料，建筑设备，地基基础，建筑施工技术，建筑cad，建筑工程项目管理，工程建设监理概论，建筑工程计量与计价。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "普通话等级证书，计算机操作证，施工员，建筑工程员，建筑项目工程员，监理助理师等。",
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
