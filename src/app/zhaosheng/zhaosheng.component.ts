import { ZhaoshengModel } from './zhaosheng.model';
import { Component, OnInit } from '@angular/core';

const Jihuas:ZhaoshengModel[]=[
  {
    leibie:"轨道交通",pro:"高铁运营与管理",plan:100,wenping:"中专／大专"
  },
  {
    leibie:"轨道交通",pro:"地铁运营与管理",plan:100,wenping:"中专／大专"
  },
  {
    leibie:"学前教育",pro:"艺术幼师",plan:100,wenping:"中专／大专"
  },
  {
    leibie:"学前教育",pro:"双语幼师",plan:100,wenping:"中专／大专"
  },
  {
    leibie:"汽车",pro:"汽车制造与装配",plan:100,wenping:"中专／大专"
  },
  {
    leibie:"汽车",pro:"汽车检测与维修",plan:50,wenping:"中专／大专"
  },
  {
    leibie:"汽车",pro:"汽车销售",plan:50,wenping:"中专／大专"
  },
  {
    leibie:"管理",pro:"连锁店运营与酒店管理",plan:50,wenping:"中专／大专"
  },
  {
    leibie:"管理",pro:"会计与统计核算",plan:50,wenping:"中专／大专"
  },
  {
    leibie:"环艺",pro:"环境艺术设计",plan:50,wenping:"中专／大专"
  },
  {
    leibie:"环艺",pro:"室内装饰设计",plan:50,wenping:"中专／大专"
  },
  {
    leibie:"工程",pro:"道路与桥梁工程",plan:100,wenping:"中专／大专"
  },
  {
    leibie:"工程",pro:"工程造价",plan:50,wenping:"中专／大专"
  },
  {
    leibie:"工程",pro:"建筑施工与管理",plan:50,wenping:"中专／大专"
  },
  {
    leibie:"信息技术",pro:"电子信息工程",plan:50,wenping:"中专／大专"
  },
  {
    leibie:"信息技术",pro:"数控技术",plan:50,wenping:"中专／大专"
  },
  {
    leibie:"信息技术",pro:"电子商务",plan:50,wenping:"中专／大专"
  },
  {
    leibie:"信息技术",pro:"网站建设与管理",plan:50,wenping:"中专／大专"
  },
  {
    leibie:"信息技术",pro:"网络信息系统管理（计算机应用技术）",plan:100,wenping:"中专／大专"
  },
  {
    leibie:"信息技术",pro:"动漫游戏制作与设计",plan:100,wenping:"中专／大专"
  },
]

@Component({
  selector: 'app-zhaosheng',
  templateUrl: './zhaosheng.component.html',
  styleUrls: ['./zhaosheng.component.css']
})
export class ZhaoshengComponent implements OnInit {
  jihuas=Jihuas;
  constructor() { }

  ngOnInit() {
  }

}
