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
  { url: "http://i4.buimg.com/591259/d46c4f49f9563203.jpg" },
  { url: "http://i4.buimg.com/591259/6ab94195d6463890.jpg" },
  { url: "http://i4.buimg.com/591259/0df74baeba14890e.jpg" },
  { url: "http://i4.buimg.com/591259/0df74baeba14890e.jpg" },
]
const Tests: Test[] = [
  { url: "http://i4.buimg.com/591259/4afe8618eee5ee73.jpg" },
  { url: "http://i4.buimg.com/591259/4afe8618eee5ee73.jpg" },
  { url: "http://i4.buimg.com/591259/4afe8618eee5ee73.jpg" },
]
const CollegeNewses:CollegeNews[]=[
  {title:"属于程序员的未来|终极揭秘web前端后端开发",link:"/wenzhang/article1"},
  {title:"高速无线网速是如何实现的？",link:"/wenzhang/article2"},
  {title:"余开源：冀文化事业和文化产业成为四川国民经济新的支柱性产业",link:""},
  {title:"成都艺术职业学院建筑工程学院建筑材料检测实训中心简介",link:""},
  {title:"我院召开党建、思政和校园文化建设专题工作会",link:""},
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
