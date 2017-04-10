import { Component, OnInit } from '@angular/core';

declare var AMap: any;
@Component({
  selector: 'app-lianxi',
  templateUrl: './lianxi.component.html',
  styleUrls: ['./lianxi.component.css'],

})
export class LianxiComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    let map = new AMap.Map('gaodemap-container', {
      zoom: 15,
      center: [103.885863, 30.487819],
      mapStyle: 'fresh'
    });
    map.plugin(['AMap.OverView', 'AMap.Scale', 'AMap.ToolBar'], () => {
      let toolbar = new AMap.ToolBar();
      let overview = new AMap.OverView({ isOpen: true });
      let scale = new AMap.Scale();
      map.addControl(toolbar);
      map.addControl(overview);
      map.addControl(scale)
    });
    let marker = new AMap.Marker({
      position: [103.885863, 30.487819]
    });
    marker.setMap(map);
    let info = new AMap.InfoWindow({
      content: "<h4>成都艺术职业学院</h4><p>新津县花源镇白云大道115号</p>"
    })
    info.open(map, marker.getPosition())
  }

}

