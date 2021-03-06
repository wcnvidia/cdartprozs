import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
export class Zhuanye {
  name: string;
  des: string;
  link: string;
  img: string;
}
const Zhuanyes: Zhuanye[] = [
  { name: "高铁运营与管理", des: "培养具有高铁动车运营管理专业知识，有较高的综合素质和较强的铁路交通运输专业技能，从事高铁动车交通运营管理生产、经营与服务工作的高级技能型人才。", link: "detail/major1", img: "../../assets/img/test235x200.jpg" },
  { name: "地铁运营与管理", des: "培养具有城市轨道交通运营管理专业知识，有较高的综合素质和较强的城市轨道专业技能，从事城市轨道交通运营管理生产、经营与服务工作的高级技能型人才。", link: "detail/major2", img: "../../assets/img/imgp2.png" },
  { name: "汽车制造与装配", des: "培养从事现代汽车整车和部件装配技术等相关工作，具有较强实践能力和良好职业道德和创新精神的高素质、高技能人才。", link: "detail/major3", img: "../../assets/img/imgp3.png" },
  { name: "艺术幼师", des: "培养具有良好的思想道德素质和身体心理素质系统，系统掌握现代学前教育基础理论和专业知识，具有较强的从事学前教育教学与管理工作的业务能力，能适应现代学前教育事业发展与改革需要，胜任早期教育机构的教学工作和管理工作的应用型人才。", link: "detail/major4", img: "../../assets/img/imgp4.png" },
  { name: "双语幼师", des: "培养具有良好的思想道德素质和身体心理素质系统，系统掌握现代学前教育基础理论和专业知识，具有较强的从事学前教育教学与管理工作的业务能力，能适应现代学前教育事业发展与改革需要，胜任早期教育机构的教学工作和管理工作的应用型人才。", link: "detail/major5", img: "../../assets/img/imgp5.png" },
  { name: "道路与桥梁工程", des: "培养掌握道路与桥梁工程基本理论和知识，具备岗位职业能力，从事道路与桥梁工程生产技术与管理工作的高级技术应用型专业人才。", link: "detail/major6", img: "../../assets/img/imgp6.png" },
  { name: "动漫游戏设计与制作", des: "培养具有良好的政治素质，艺术修养，以及正确的创意理念，具有较扎实的动漫设计理论基础，梦独立或参与设计和制作具有较高艺术水平的动画作品，具备较高的职业素质，具有一定的创新能力和市场营销策划能力，能适应社会需要，在生产，建设，管理，服务一线的高技能应用型人才。", link: "detail/major7", img: "../../assets/img/imgp7.png" },
  { name: "网络信息系统管理", des: "培养具备经济，法律，现代管理学理论基础，计算机科学技术知识及应用能力，掌握系统思想和信息系统分析与设计方法，以及信息传播与电子商务等方面的知识和能力，能在各级行政管理部门，企事业单位从事信息管理与信息系统管理工作应用型高级专业人才。", link: "detail/major8", img: "../../assets/img/imgp8.png" },
  { name: "汽车检测与维修", des: "主要培养汽车维修，汽车保养，故障检测等工作岗位的人才，毕业后可从事汽车维修，汽车保养等工作。", link: "detail/major9", img: "../../assets/img/imgp9.png" },
  { name: "汽车销售", des: "培养具有较强的营销操作能力和营销管理素质，具有汽车营销，会展销售等专业知识与技能，懂经济，通营销，知法律的应用型高级专业人才。", link: "detail/major10", img: "../../assets/img/imgp10.png" },
  { name: "连锁经营与酒店管理", des: "主要培养星级酒店管理，国际旅游商务酒店管理，高级餐厅管理，大型商场管理，高尔夫球场管理，俱乐部管理等高素质应用型人才，毕业后可从事大堂经理，客服经理，前台经理，连锁店管理人员，酒店管理人员等工作岗位的人才。", link: "detail/major11", img: "../../assets/img/imgp11.png" },
  { name: "会计与统计核算", des: "主要培养具有会计，财务，审计，统计，管理等方面的知识和能力，从事会计，财务管理，审计管理等实际工作的高级应用型专业人才。", link: "detail/major12", img: "../../assets/img/imgp12.png" },
  { name: "环境艺术设计", des: "主要培养具有艺术设计理论素养与设计技能，掌握环境艺术设计的基础知识和基本技能的应用型专业人才。毕业后能在房地产公司，园林设计公司，广告传媒公司，装饰工程公司以及企事业单位从事环境艺术规划，设计及管理工作。",link: "detail/major13", img: "../../assets/img/imgp13.png" },
  { name: "室内装饰设计", des: "培养掌握室内外设计原理，制图与识图，预算与招投标等室内设计理论知识及Photoshop，3DSMAX，CAD等各种设计软件，掌握室内外效果图的设计方法及技巧，掌握建筑景观漫游动画制作技术，具备现代设计理念与制作能力等应用型高级专业人才。", link: "detail/major14", img: "../../assets/img/imgp14.png" },
  { name: "工程造价", des: "主要培养现代工程造价，建筑工程预算，安装工程预算，建筑工程招投标等工作的高级技术应用性人才。", link: "detail/major15", img: "../../assets/img/imgp15.png" },
  { name: "建筑施工与管理", des: "​培养掌握工程力学，土力学，测量学，房屋建筑学和结构工程学的基础理论和基本知识，具备从事土木工程的项目规划，设计，研究开发，施工及管理的能力，能在房屋建筑，地下建筑，隧道，路桥，矿井等的设计，研究，施工，教育，管理，投资，开发部门从事技术或管理工作的高级工程技术人才。", link: "detail/major16", img: "../../assets/img/imgp16.png" },
  { name: "数控技术", des: "主要培养从事相关公司的电脑绘图，数控编程设计，加工中心操作，模具制作与设计，电火花及线切割，CAD/CAM，数控加工等高素质高技能应用型人才。", link: "detail/major17", img: "../../assets/img/imgp17.png" },
  { name: "电子商务", des: "主要培养掌握现代经贸理论和实务知识，具有一定的电子商务专业知识与应用能力，能熟练运用现代信息技术和管理方法从事中小企业网络营销(网络营销经理、网络推广、网络销售、网络客服等)网站运营，电子商务服务产品销售与客服和个人网上创业等工作的高素质应用型电子商务人才。", link: "detail/major18", img: "../../assets/img/imgp18.png" },
  { name: "网站建设与管理", des: "主要培养从事计算机网络系统的设计，实施，管理与维护工作的应用型高级专业人才。", link: "detail/major19", img: "../../assets/img/imgp19.png" },
  { name: "电子信息工程", des: "主要培养具有电子信息技术基础知识与能力，电子产品的装置，调试及设计的基本能力，对办公自动化设备，家用电子产品电路图的阅读分析与安装，调试，维护能力，对机电设备进行智能控制的设计和组织能力，具有阅读英语资料和计算机应用能力的高素质技能型人才。", link: "detail/major20", img: "../../assets/img/imgp20.png" },
]
@Component({
  selector: 'app-zhuanye',
  templateUrl: './zhuanye.component.html',
  styleUrls: ['./zhuanye.component.css'],
})
export class ZhuanyeComponent implements OnInit {
  zhuanyes = Zhuanyes;
  constructor() { }

  ngOnInit() {
  }

}
