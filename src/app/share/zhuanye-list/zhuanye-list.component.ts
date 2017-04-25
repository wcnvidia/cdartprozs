import { Component, OnInit } from '@angular/core';

export class List {
  name: string;
  badge: string;
  link: string;
}
const Lists: List[] = [
  { name: '高铁运营与管理', badge: '轨道交通', link: '/zhuanye/detail/major1' },
  { name: '地铁运营与管理', badge: '轨道交通', link: '/zhuanye/detail/major2' },
  { name: '汽车制造与装配', badge: '汽车', link: '/zhuanye/detail/major3' },
  { name: '艺术幼师', badge: '学前教育', link: '/zhuanye/detail/major4' },
  { name: '双语幼师', badge: '学前教育', link: '/zhuanye/detail/major5' },
  { name: '道路与桥梁工程', badge: '工程', link: '/zhuanye/detail/major6' },
  { name: '动漫游戏制作与设计', badge: '信息技术', link: '/zhuanye/detail/major7' },
  { name: '网络信息系统管理（计算机应用技术）', badge: '信息技术', link: '/zhuanye/detail/major8' },
  { name: '汽车检测与维修', badge: '汽车', link: '/zhuanye/detail/major9' },
  { name: '汽车销售', badge: '汽车', link: '/zhuanye/detail/major10' },
  { name: '连锁店运营与酒店管理', badge: '管理', link: '/zhuanye/detail/major11' },
  { name: '会计与统计核算', badge: '管理', link: '/zhuanye/detail/major12' },
  { name: '环境艺术设计', badge: '环艺', link: '/zhuanye/detail/major13' },
  { name: '室内装饰设计', badge: '环艺', link: '/zhuanye/detail/major14' },
  { name: '工程造价', badge: '工程', link: '/zhuanye/detail/major15' },
  { name: '建筑施工与管理', badge: '工程', link: '/zhuanye/detail/major16' },
  { name: '数控技术', badge: '信息技术', link: '/zhuanye/detail/major17' },
  { name: '电子商务', badge: '信息技术', link: '/zhuanye/detail/major18' },
  { name: '网站建设与管理', badge: '信息技术', link: '/zhuanye/detail/major19' },
  { name: '电子信息工程', badge: '信息技术', link: '/zhuanye/detail/major20' },
]

@Component({
  selector: 'app-zhuanye-list',
  templateUrl: './zhuanye-list.component.html',
  styleUrls: ['./zhuanye-list.component.css']
})
export class ZhuanyeListComponent implements OnInit {
  lists = Lists;
  public isCollapsed: boolean = false;

  public collapsed(event: any): void {
    console.log(event);
  }

  public expanded(event: any): void {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
