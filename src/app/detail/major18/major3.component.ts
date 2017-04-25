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
    des: "主要培养掌握现代经贸理论和实务知识，具有一定的电子商务专业知识与应用能力，能熟练运用现代信息技术和管理方法从事中小企业网络营销(网络营销经理、网络推广、网络销售、网络客服等)网站运营，电子商务服务产品销售与客服和个人网上创业等工作的高素质应用型电子商务人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "课程",
    des: "电子商务概论，商品学，经济学，管理学基础，经济法，商务谈判，市场营销，网络技术，图像处理，数据库，电子商务物流配送，网页设计与制作，网店经营与管理，人力资源管理等。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "普通话证书，计算机操作证，市场营销员助理，物流师，会计证，英语等级证。",
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
