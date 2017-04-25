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
    des: "主要培养具有会计，财务，审计，统计，管理等方面的知识和能力，从事会计，财务管理，审计管理等实际工作的高级应用型专业人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "课程",
    des: "基础会计学，统计学管理会计企业统计统计调查方法与应用，财务会计成本，会计电算化软件，数据库管理与应用，财务管理学，经济法，审计学，管理学原理等。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "普通话等级证书，计算机操作证，会计从业资格证，助理会计师，助理金融分析师，审计员等。",
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
