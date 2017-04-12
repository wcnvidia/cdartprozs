import { JpZhuanyeModel } from './jp-zhuanye.model';
import { Component, OnInit } from '@angular/core';


export class JpName {
  name: string;
  badge: string;
  link:string;
}
const JpNames: JpName[] = [
  { name: '高铁运营与管理', badge: '轨道交通',link:'' },
  { name: '地铁运营与管理', badge: '轨道交通',link:'' },
  { name: '艺术幼师', badge: '学前教育',link:'' },
  { name: '双语幼师', badge: '学前教育',link:'' },
  { name: '汽车制造与装配', badge: '汽车',link:'' },
  { name: '汽车检测与维修', badge: '汽车',link:'' },
  { name: '汽车销售', badge: '汽车',link:'' },
  { name: '连锁店运营与酒店管理', badge: '管理',link:'' },
  { name: '会计与统计核算', badge: '管理',link:'' },
  { name: '环境艺术设计', badge: '环艺',link:'' },
  { name: '室内装饰设计', badge: '环艺',link:'' },
  { name: '道路与桥梁工程', badge: '工程',link:'' },
  { name: '工程造价', badge: '工程',link:'' },
  { name: '建筑施工与管理', badge: '工程',link:'' },
  { name: '电子信息工程', badge: '信息技术',link:'' },
  { name: '数控技术', badge: '信息技术',link:'' },
  { name: '电子商务', badge: '信息技术',link:'' },
  { name: '网站建设与管理', badge: '信息技术',link:'' },
  { name: '网络信息系统管理（计算机应用技术）', badge: '信息技术',link:'' },
  { name: '动漫游戏制作与设计', badge: '信息技术',link:'' },
]

@Component({
  selector: 'app-jp-zhuanye',
  templateUrl: './jp-zhuanye.component.html',
  styleUrls: ['./jp-zhuanye.component.css']
})
export class JpZhuanyeComponent implements OnInit {
  jpNames=JpNames;
  public isCollapsed:boolean = false;
 
  public collapsed(event:any):void {
    console.log(event);
  }
 
  public expanded(event:any):void {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
