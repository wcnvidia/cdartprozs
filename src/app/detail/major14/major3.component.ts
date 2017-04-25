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
    des: "培养掌握室内外设计原理，制图与识图，预算与招投标等室内设计理论知识及Photoshop，3DSMAX，CAD等各种设计软件，掌握室内外效果图的设计方法及技巧，掌握建筑景观漫游动画制作技术，具备现代设计理念与制作能力等应用型高级专业人才",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "课程",
    des: "素描色彩，速写，平面构成，广告设计工程制图及几何画法，住宅与办公室设计，照明设计，装饰施工与监理，园林艺术立体构成，设计创业，photoshop软件，3ds max，coreldraw软件，indesign软件。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "普通话等级证书，计算机操作证，icad国际建筑装饰室内助理设计师，autodesk认证，autocad证书，discreet认证三维助理设计师。",
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
