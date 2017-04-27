import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

export class CampusLive {
  url: string;
}
export class Test {
  url: string;
}
export class CollegeNews{
  title:string;
  link:string;
}
export class CollegeDynamic{
  title:string;
  link:string;
}
const CampusLives: CampusLive[] = [
  { url: "http://i1.piimg.com/591259/ee2fa99ab95200e6.jpg" },
  { url: "http://i1.piimg.com/591259/a2e388ddf8adbad0.jpg" },
  { url: "http://i1.piimg.com/591259/93f3bf7736c209c5.jpg" },
  { url: "http://i1.piimg.com/591259/2a0004599ec27311.jpg" },
]
const Tests: Test[] = [
  { url: "http://i4.buimg.com/591259/78e1b14c56873af6.jpg" },
  { url: "http://i4.buimg.com/591259/937fa95b0c8beb44.jpg" },
  { url: "http://i4.buimg.com/591259/05d9df1113ed1d1c.jpg" },
]
const CollegeNewses:CollegeNews[]=[
  {title:"属于程序员的未来|终极揭秘web前端后端开发",link:"/wenzhang/article1"},
  {title:"高速无线网速是如何实现的？",link:"/wenzhang/article2"},
  {title:"“智能+医疗”=人工智能?|政府工作报告开启云平台云竞技",link:"/wenzhang/article3"},
  {title:"机器学习>网络开发？来看外国网友怎么说",link:"/wenzhang/article4"},
  {title:"为什么说现在是汽车销售的春天？来看看这些suv吧",link:"/wenzhang/article5"},
]
const CollegeDynamics:CollegeDynamic[]=[
  {title:"视觉传达学子在省第一届公益广告大赛中再创佳绩",link:""},
  {title:"2017届毕业生校园系列专场招聘会在青神校区陆续展开",link:""},
  {title:"管理系举办第一届酒店管理专业技能大赛",link:""},
  {title:"《立体 裁剪》课程展览",link:""},
  {title:"我院召开党建、思政和校园文化建设专题工作会",link:""},
]
@Component({
  selector: 'app-lunbo',
  templateUrl: './lunbo.component.html',
  styleUrls: ['./lunbo.component.css'],
  providers: [{ provide: CarouselConfig, useValue: { interval: 1500, noPause: true } }]
})
export class LunboComponent implements OnInit {
  campusLives = CampusLives;
  tests = Tests;
  collegeNewses = CollegeNewses;
  collegeDynamics = CollegeDynamics;
  constructor() { }

  ngOnInit() {
  }

}
