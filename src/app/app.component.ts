import { Component } from '@angular/core';

export class Footer {
  title: string;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  class: string;
}
export class Nav {
  name: string;
  link: string;
}
const Footers: Footer[] = [
  {
    title: '联系我们',
    content1: '学校地址：成都市新津县花源镇白云大道115号',
    content2: '咨询电话：15680601897(李老师)',
    content3: '联系QQ：1484656667（李老师）',
    content4: '邮编：611433',
    class: 'col-md-6',
  },
  {
    title: '快速导航',
    content1: '联系我们',
    content2: '专业设置',
    content3: '乘车路线',
    content4: '在线报名',
    class: 'col-md-3',
  },
]

const Navs: Nav[] = [
  { name: '校园首页', link: '/home' },
  { name: '学院概况', link: '/gaikuang' },
  { name: '专业设置', link: '/zhuanye' },
  { name: '新闻动态', link: '/dongtai' },
  { name: '招生就业', link: '/zhaosheng' },
  { name: '在线报名', link: '/baoming' },
  { name: '联系我们', link: '/lianxi' },
]
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  footers = Footers;
  navs = Navs;
  public isCollapsed: boolean = false;
  public collapsed(event: any): void {
    console.log(event);
  };
  public expanded(event: any): void {
    console.log(event);
  };
}
