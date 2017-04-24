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
    des: "中国汽车数量以每年13%的速度递增，汽车制造，装配，检测，维修，装饰与美容，保养，等复合型人才极度缺乏，中国汽车人才，将有50-60万的缺口，尤其是汽车制造产业发展的人才，千亿大单投向成都国际汽车城，成都正迅速崛起，成为中国乃至世界新的汽车产业高地，成都将改变中国汽车产业的格局。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "目标",
    des: "培养从事现代汽车整车和部件装配技术等相关工作，具有较强实践能力和良好职业道德和创新精神的高素质、高技能人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "岗位",
    des: "汽车整车和部件装调工，汽车制造装配企业的汽车装，调技师，汽车制造装配企业的车身匹配工，汽车制造装配企业的班组长，工段长，汽车制造装配企业的质量检验员。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "课程",
    des: "机械学，设计工程学，机车车辆工程学，汽车构造，汽车理论，汽车设计，汽车试验学，汽车保险与理赔，汽车文化，汽车电器等",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "执业资格证或技能等级证，计算机操作证，维修电工证，汽车装配工，钳工",
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
