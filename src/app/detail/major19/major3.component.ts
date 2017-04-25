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
    des: "主要培养从事计算机网络系统的设计，实施，管理与维护工作的应用型高级专业人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "课程",
    des: "VB/NET程序开发与制作，数据库管理与开发，网页制作，计算机网络基础，图形图像处理，网站配置与布局，flash动画设计，javascript脚本特效，办公自动化，网站运营与维护，信息管理与信息系统，电子商务等。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "计算机等级证，信息系统项目管理员，系统分析员，软件设计员，多媒体应用设计员，嵌入式系统设计员，信息系统监理员，程序员。",
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
