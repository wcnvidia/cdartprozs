import { RemenModel } from './remen.model';
import { Component, OnInit } from '@angular/core';

const Remens: RemenModel[] = [
  {
    title: "高铁运营与管理", des: "培养具有高铁动车运营管理专业知识，有较高的综合素质和较强的铁路交通运输专业技能，从事高铁动车交通运营管理生产、经营与服务工作的高级技能型人才。", link: "/zhuanye/detail", img: "../../../assets/img/test235x200.jpg"
  },
  {
    title: "地铁运营与管理", des: "培养具有城市轨道交通运营管理专业知识，有较高的综合素质和较强的城市轨道专业技能，从事城市轨道交通运营管理生产、经营与服务工作的高级技能型人才。", link: "", img: "../../../assets/img/imgp2.png"
  },
  {
    title: "汽车制造与装配", des: "培养从事现代汽车整车和部件装配技术等相关工作，具有较强实践能力和良好职业道德和创新精神的高素质、高技能人才。", link: "", img: "../../../assets/img/imgp3.png"
  },
]
@Component({
  selector: 'app-remen',
  templateUrl: './remen.component.html',
  styleUrls: ['./remen.component.css']
})
export class RemenComponent implements OnInit {
  remens = Remens
  constructor() { }

  ngOnInit() {
  }

}
