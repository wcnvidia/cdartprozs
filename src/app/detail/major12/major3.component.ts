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
    des: "科技的高度发展，社会竞争的加剧，二胎的推广，幼儿数量增加，使得各位家长对幼儿教育的培养发生了转变，从重视知识传授开始，转向重视人的全面发展，由于教师叫为中心转向注重儿童探索操作，又强调培养儿童学会生存进一步发展为，培养儿童学会关心，从热爱儿童到强调李小龙尊重儿童，由注重个别优秀儿童教育转向面向全体儿童，跨世纪幼儿园老师的能力和素质就有了更高的要求，建构以能力为核心的专业素质结构，尤其是在音乐，舞蹈，美术，手工制作游戏等方面，对幼儿教师有更高的要求。学校正努力打造幼儿教师，具有理性思想，又具有人文精神，由于儿童的主观性，创造性意志和人品人格的发展的高端实用型人才，高素质学前教育的毕业生拥有巨大的就业市场和人生舞台，其就业前景骤然跃居全国前茅。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "目标",
    des: "培养具有良好的思想道德素质和身体心理素质系统，系统掌握现代学前教育基础理论和专业知识，具有较强的从事学前教育教学与管理工作的业务能力，能适应现代学前教育事业发展与改革需要，胜任早期教育机构的教学工作和管理工作的应用型人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "岗位",
    des: "幼教单位，早教单位，青少年宫及培训机构担任任课教师，班主任，生活教师，培训教师，文员，管理人员等。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "课程",
    des: "音乐，舞蹈，琴法，美术，幼儿心理学，幼儿教育学，幼儿卫生学，幼儿园组织与管理，幼儿文学，幼儿卫生保健等。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "幼儿教师资格证，普通话等级证，计算机，等级证，钢琴等级证，舞蹈等级证，美术等级证等。",
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
  templateUrl: './major3.component.html',
  styleUrls: ['./major3.component.css']
})
export class Major2Component implements OnInit {
cards = Cards;
  constructor() { }

  ngOnInit() {
  }

}
