import { Component, OnInit } from '@angular/core';
export class Image{
  url:string
}
const Images:Image[]=[
  {url:"http://i1.piimg.com/591259/93f3bf7736c209c5.jpg"},
  {url:"http://i1.piimg.com/591259/a2e388ddf8adbad0.jpg"},
  {url:"http://i1.piimg.com/591259/b2d46f4e4de5e4d6.jpg"},
  {url:"http://i1.piimg.com/591259/7c399cff957a7938.jpg"},
  {url:"http://i1.piimg.com/591259/ee2fa99ab95200e6.jpg"},
  {url:"http://i1.piimg.com/591259/bedace11322399c2.jpg"},
  {url:"http://i1.piimg.com/591259/8700bee043311e19.jpg"},
  {url:"http://i1.piimg.com/591259/2ab96f3dc791d6f7.jpg"},
  {url:"http://i1.piimg.com/591259/4110df568a01405e.jpg"},
  {url:"http://i1.piimg.com/591259/2a0004599ec27311.jpg"},
  {url:"http://i1.piimg.com/591259/5a480805f65c1e39.jpg"},
  {url:"http://i1.piimg.com/591259/323ec6a249c7090e.jpg"},
]

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
images=Images;
  constructor() { }

  ngOnInit() {
  }

}
