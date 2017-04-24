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
    des: "成都地铁是成都轨道交通的，全部翻，成都地铁快速发展，计划到2020年开通运营五百公里，线网的延伸，预计2030年开通，近三十条，地铁对人才的需求十分巨大，保守估计到2020年成都地铁需要2.5万高素质运营人员。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "目标",
    des: "培养具有城市轨道交通运营管理专业知识，有较高的综合素质和较强的城市轨道专业技能，从事城市轨道交通运营管理生产、经营与服务工作的高级技能型人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "岗位",
    des: "乘务员，乘警，安检，票务，站务。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "课程",
    des: "轨道交通概论，轨道交通工程制图，地铁消防与安保，票务管理与运营，轨道交通安全管理，铁路站场与枢纽，行车组织，货运组织等等",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "普通话等级证书，计算机操作证，城市轨道交通运营员，城市轨道交通票务，城市轨道交通站务员，铁路客运员，铁路乘务员，铁路安检员，铁路票务员，铁路餐服务员等",
    bg: "table table-danger",
    icon: "glyphicon glyphicon-book fontColor fontSize"
  },
  {
    title: "工资",
    des: "合格毕业生3500元～8000元／月",
    bg: "table table-info",
    icon: "glyphicon glyphicon-eur fontColor fontSize"
  },
]

@Component({
  selector: 'app-major2',
  templateUrl: './major2.component.html',
  styleUrls: ['./major2.component.css']
})
export class Major2Component implements OnInit {
  cards = Cards;
  constructor() { }

  ngOnInit() {
  }

}
