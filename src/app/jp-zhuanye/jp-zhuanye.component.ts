import { Component, OnInit } from '@angular/core';

export class JpZhuanye {
  id: number;
  name: string;
  img: string;
  des: string;
  aim: string;
  job: string;
  salary: string;
  course: string;
  credential: string;
}
const JpZhuanyes: JpZhuanye[] = [
  {
    id: null,
    name: "",
    img: "",
    des: "",
    aim: "",
    job: "",
    salary: "",
    course: "",
    credential: "",
  }
]
@Component({
  selector: 'app-jp-zhuanye',
  templateUrl: './jp-zhuanye.component.html',
  styleUrls: ['./jp-zhuanye.component.css']
})
export class JpZhuanyeComponent implements OnInit {
  jpZhuanyes = JpZhuanyes;
  constructor() {

  }

  ngOnInit() {
  }

}
