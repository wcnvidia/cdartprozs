import { Component, OnInit } from '@angular/core';
export class Card {
  title: string;
  des: string;
  bg: string;
  icon: string;
}
const Cards: Card[] = [
  {
    title: "概述",
    des: "动漫与游戏无论是作为一种艺术形式或是一种产业，都已经受到了世界各国的重视，美国动漫与游戏依靠先进的科学技术和来自世界各地的优秀动漫与游戏人才以及强大的经济基础为平台，创作出了大量制作精良的动漫与游戏，日本的动漫与游戏已经成为国家经济发展的重要支柱之一他们的动漫与游戏一起特有的成熟的艺术风格，在世界动漫与游戏发展中扮演着不可忽视的角色，与世界先进水平相比，我国动漫与游戏事业是新发展起来的热门产业，近年来，动漫与游戏教育正在以难以令人想象的速度在全国范围内迅速发展，外适应市场需求，学院正努力培养从事计算机动画设计数字生肖合成技术，具备计算机，二维和三维动画，原画的创意设计和编导，影视后期制作能力及创作理论研究方面的应用型高级技术型人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "目标",
    des: "培养具有良好的政治素质，艺术修养，以及正确的创意理念，具有较扎实的动漫设计理论基础，梦独立或参与设计和制作具有较高艺术水平的动画作品，具备较高的职业素质，具有一定的创新能力和市场营销策划能力，能适应社会需要，在生产，建设，管理，服务一线的高技能应用型人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "岗位",
    des: "影视动画制作助理师，影视动画助理设计师，动画绘制员，游戏美工员，多媒体作品制作员，数字视频，策划制作助理师，数字视频合成助理师，玩具设计助理师等",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "课程",
    des: "素描，色彩，速写，线描，手工漫画，flash，软件应用，3dmax，maya软件应用，动画镜头，动画文案，影视编辑等。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "计算机等级证，动画设计员，max证，maya证，photoshop证，flash证。",
    bg: "table table-danger",
    icon: "glyphicon glyphicon-book fontColor fontSize"
  },
  {
    title: "工资",
    des: "合格毕业生3500元～12000元／月",
    bg: "table table-info",
    icon: "glyphicon glyphicon-eur fontColor fontSize"
  },
]
@Component({
  selector: 'app-major2',
  templateUrl: './major3.component.html',
  styleUrls: ['./major3.component.css']
})
export class Major2Component implements OnInit {
cards = Cards;
  constructor() { }

  ngOnInit() {
  }

}
