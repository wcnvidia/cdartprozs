import { RemenModel } from './remen.model';
import { Component, OnInit } from '@angular/core';

const Remens: RemenModel[] = [
  {
    title: "动漫设计与制作专业", des: "动漫设计是通过现代艺术之理念和现代艺术之能力实践的专业学习，培养学生的艺术美感、理性思维和创作鉴赏能力", link: "/jpzhuanye", img: "../../../assets/img/test235x200.jpg"
  },
  {
    title: "艺术设计", des: "本专业培养具备艺术设计与创作、教学和研究等方面的知识和能力，能在艺术设计教育、研究、设计、生产和管理单位从事艺术设计、", link: "", img: "../../../assets/img/test235x200.jpg"
  },
  {
    title: "建筑工程专业", des: "本专业培养适应工业与民用建筑等领域第一线需要，具有良好的职业道德，掌握工业与民用建筑的施工操作和基层技术管理知识，", link: "", img: "../../../assets/img/test235x200.jpg"
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
