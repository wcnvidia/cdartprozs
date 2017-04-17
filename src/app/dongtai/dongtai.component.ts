import { Component, OnInit } from '@angular/core';
import {DongtaiModel} from './dongtai.model';
const ArticleLists : DongtaiModel[] = [
  {id:11,link:'/wenzhang/article1',title:'属于程序员的未来|终极揭秘web前端后端开发',des:'日常生活中，很多网页呈现出来的简洁布局、精心设计以及各种灵动效果总是让我们赞叹不已，而创造这些酷炫体验的，正是背后的web开发者。早在3年前，互联网就囊括了六亿八千多万的页面，这个数字还在持续快速增长。据估计，该方向人才需求在未来十年内会稳定增长，前景非常广阔。',image:'../../assets/img/test235x115.jpg'},
  {id:12,link:'/wenzhang/article2',title:'余开源：冀文化事业和文化产业成为四川国民经济新的支柱性产业',des:'香港商报网记者金山报道：3月5日下午，十二届全国人大五次会议四川代表团在驻地举行全体会议，集中审议李克强总理所作的政府工作报告。',image:'../../assets/img/test235x115.jpg'},
  {id:13,link:'/wenzhang/article3',title:'我院召开党建、思政和校园文化建设专题工作会 ——落实中央精神 部署我院工作',des:'3月8日，学院召开加强党建、思想政治工作和校园文化建设专题会议，就贯彻落实全国高校思想政治工作会议精神和《关于加强民办学校党的建设工作的意见（试行）》进行部署.',image:'../../assets/img/test235x115.jpg'},
  {id:14,link:'/wenzhang/article4',title:'余开源代表在人大四川代表团发言：推动四川文化走出去',des:'两会期间，作为全国人大代表的我院院长余开源，他的发言主要围绕四川文化事业和产业的发展进行，建议国家支持培养非遗技艺传承人，推动四川特色的文化产品“走出去”，就像今年央视春晚凉山分会场一样红红火火。',image:'../../assets/img/test235x115.jpg'},
  {id:15,link:'/wenzhang/article5',title:'我院春季开学第一天巡礼',des:'2月27日，乍暖还寒，伴随着窸窸窣窣的脚步声，沉静了一个寒假的校园，迎来了2017年春季开学的第一个早晨。校园里不停地穿梭着同学们的身影，他们大都抱着课本，交谈之间，笑出声来。',image:'../../assets/img/test235x115.jpg'},
  {id:16,link:'/wenzhang/article6',title:'我院召开2017年春季开学教职工大会',des:'2月21日上午，我院在演播厅召开全院教职工大会，学院领导余开元、余天翔、陈小林等参加了会议，副院长熊殿华主持了大会。',image:'../../assets/img/test235x115.jpg'},
  {id:17,link:'/wenzhang/article7',title:'不忘初心 继续前进——我院召开2016年秋季学期总结大会',des:'2017年1月12日，连续数日的阴霾细雨，今日放晴，和煦的阳光照耀在花源校区的每一个角落。上午九点，全院教职员工在演播厅参加了2016年秋季学期期末总结大会，学院副院长熊殿华主持大会流程。',image:'../../assets/img/test235x115.jpg'},
  {id:18,link:'/wenzhang/article8',title:'学院召开期末考试考务工作会',des:'12月29日下午2：30，由学院教务处组织全体期末考试监考老师在老阶梯教室召开了花源校区期末考务工作会。全院各行政处室、院系所有监巡考人员都参加了本次会议。',image:'../../assets/img/test235x115.jpg'},
  {id:19,link:'/wenzhang/article9',title:'等你，看“视界” ——数字媒体学院成功举办2017届毕业设计作品展',des:'2016年12月20日数字媒体学院于我校中心教学楼大厅举办了2017届毕业设计作品展--视界。本次毕业展分别是计算机多媒体技术和艺术设计（产品三维模型设计）两大专业的集体展示.',image:'../../assets/img/test235x115.jpg'},
  {id:20,link:'/wenzhang/article10',title:'全国人大代表一行来我院视察指导工作 ——学院隆重举行2017元旦晚会',des:'12月23日，部分全国人大代表和省人大代表来到我院视察指导，学院院长余开源、党委书记、执行院长刁纯志等向代表们汇报了学院近期的工作。',image:'../../assets/img/test235x115.jpg'},
];

@Component({
  selector: 'app-dongtai',
  templateUrl: './dongtai.component.html',
  styleUrls: ['./dongtai.component.css']
})
export class DongtaiComponent implements OnInit {
  articleLists=ArticleLists;
  constructor() { }

  ngOnInit() {
  }

}
