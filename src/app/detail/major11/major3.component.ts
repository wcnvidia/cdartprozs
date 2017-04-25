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
    des: "主要培养星级酒店管理，国际旅游商务酒店管理，高级餐厅管理，大型商场管理，高尔夫球场管理，俱乐部管理等高素质应用型人才，毕业后可从事大堂经理，客服经理，前台经理，连锁店管理人员，酒店管理人员等工作岗位的人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "课程",
    des: "酒店营销酒店人力资源管理，餐饮服务技能与顾客交流能力，酒店前台事务操作，客房服务及酒店系统管理，市场营销学，酒店管理概论酒店餐饮管理，酒店前厅与客户管理，企业连锁经营，企业管理概论。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "普通话等级证书，计算机操作证，酒店管理服务员，英语四级，助理酒店管理师，人力资源管理师等。",
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
