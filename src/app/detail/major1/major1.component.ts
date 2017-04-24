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
    des: "近年来，我国高速铁路建设如火如荼，高速铁路营业里程数达到1.8万公里以上，快速铁路网将已经达到4万公里以上，中国已经拥有全世界最大规模和最高运营里程数的高速铁路网，整体运营里程数约占全世界高铁总运营里程的一半。举世瞩目的中国高速铁路正处于跨越式发展时期，高贵、典雅的高铁动车工作岗位尤为紧俏。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "目标",
    des: "培养具有高铁动车运营管理专业知识，有较高的综合素质和较强的铁路交通运输专业技能，从事高铁动车交通运营管理生产、经营与服务工作的高级技术型人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "岗位",
    des: "高铁动车高级乘务员，乘服员，安全员，安检，票务，站务。",
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
    des: "3500元～12000元／月",
    bg: "table table-info",
    icon: "glyphicon glyphicon-eur fontColor fontSize"
  },
]

@Component({
  selector: 'app-major1',
  templateUrl: './major1.component.html',
  styleUrls: ['./major1.component.css'],
})
export class Major1Component implements OnInit {
  cards = Cards;
  constructor() { }

  ngOnInit() {
  }

}
