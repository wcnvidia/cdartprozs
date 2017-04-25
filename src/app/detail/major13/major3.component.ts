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
    des: "主要培养具有艺术设计理论素养与设计技能，掌握环境艺术设计的基础知识和基本技能的应用型专业人才。毕业后能在房地产公司，园林设计公司，广告传媒公司，装饰工程公司以及企事业单位从事环境艺术规划，设计及管理工作。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "课程",
    des: "素描色彩，速写，平面构成，广告设计工程制图及几何画法，住宅与办公室设计，照明设计，装饰施工与监理，园林艺术立体构成，设计创业，photoshop软件，coreldraw软件，3ds max，indesign软件。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "普通话等级证书，计算机操作证，景观助理设计师，助理规划师，室内助理设计师。",
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
