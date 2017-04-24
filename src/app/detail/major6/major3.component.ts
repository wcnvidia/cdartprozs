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
    des: "随着我国十三五规划的实施，国家加大对基础设施的投入，同时国家，对道路桥梁建设的投入也逐渐加大，利用对基础建设的投入来带动其他相关产业的发展，这种带动作用，无疑会增加道路桥梁工程人才的需求，学校瞄准机遇，岳各庄本科院校合作共建道路桥梁专业教学平台，准确把握专业定位，明确人才培养目标，优化，专业课程体系采用较，学，做一体化教学模式，培养道路与桥梁工程，高端技能型人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "目标",
    des: "培养掌握道路与桥梁工程基本理论和知识，具备岗位职业能力，从事道路与桥梁工程生产技术与管理工作的高级技术应用型专业人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "岗位",
    des: "勘探设计，试验检测，测量，施工技术管理，质检，造价，工程养护，工程管理，资料整理，项目管理等。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "课程",
    des: "工程力学，工程制图，水利与水文，建筑材料，道桥工程计量与计价，道桥工程施工技术与施工组织，公路勘测技术等。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "计算机等级证，公路施工员证，施工员上岗证，测量员，测绘员。",
    bg: "table table-danger",
    icon: "glyphicon glyphicon-book fontColor fontSize"
  },
  {
    title: "工资",
    des: "合格毕业生3500元～12000元／月",
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
