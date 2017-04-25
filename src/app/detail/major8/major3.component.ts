import { Component, OnInit } from '@angular/core';
export class Card {
  title: string;
  des: string;
  bg: string;
  icon: string;
}
const Cards: Card[] = [
  {
    title: "概述",
    des: "几乎所有的，IT企业，都需要，计算机网络技术人才，帮助用户设计和建设计算机信息系统，几乎所有拥有计算机信息系统的爱妻客户，都需要计算机网络技术人员，负责运行和维护工作计算机网络技术人才供不应求且薪资，待遇远高于其他行业计算机网络技术人才将在相当长的时间内成为十大行业，最紧俏的人才之一。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "目标",
    des: "培养具备经济，法律，现代管理学理论基础，计算机科学技术知识及应用能力，掌握系统思想和信息系统分析与设计方法，以及信息传播与电子商务等方面的知识和能力，能在各级行政管理部门，企事业单位从事信息管理与信息系统管理工作应用型高级专业人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "岗位",
    des: "网络管理员，网络信息安全管理员，网站开发工程师，毕业后可到IT公司或相关技术单位从事计算机网络基础设施设计与组建，网络系统集成，网络运行管理，网站开发等技术设计工作，或到大型网络运营单位从事网络设计与优化，信息安全与维护等技术工作，也可以到政府机构，企事业等单位从事网络管理，优化，和信息安全维护的技术管理工作。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "课程",
    des: "数据库管理和开发网页制作，计算机网络基础，图形图像处理flash动画设计，javascript脚本特效，办公自动化，信息管理与信息系统，电子商务等",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "计算机等级证，动画设计员，max证，maya证，photoshop证，flash证。",
    bg: "table table-danger",
    icon: "glyphicon glyphicon-book fontColor fontSize"
  },
  {
    title: "工资",
    des: "合格毕业生3500元～10000元／月",
    bg: "table table-info",
    icon: "glyphicon glyphicon-eur fontColor fontSize"
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
