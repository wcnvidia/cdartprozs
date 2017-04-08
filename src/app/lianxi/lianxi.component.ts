import { Component, OnInit } from '@angular/core';
import { BaiduMap, OfflineOptions, ControlAnchor, NavigationControlType } from 'angular2-baidu-map';

@Component({
  selector: 'app-lianxi',
  templateUrl: './lianxi.component.html',
  styleUrls: ['./lianxi.component.css'],

})
export class LianxiComponent implements OnInit {
  opts: any;
  offlineOpts: OfflineOptions;

  constructor() { }

  ngOnInit() {
    this.opts = {
      center: {
        longitude: 103.890724,
        latitude: 30.492527
      },
      zoom: 17,
      markers: [{
        longitude: 103.890724,
        latitude: 30.492527,
        title: '成都艺术职业学院',
        content: '花源镇白云大道115号',
        enableDragging: true
      }],
      geolocationCtrl: {
        anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT
      },
      scaleCtrl: {
        anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
      },
      overviewCtrl: {
        isOpen: true
      },
      navCtrl: {
        type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
      }
    }
    this.offlineOpts = {
      retryInterval: 5000,
      txt: '网络连接较慢，请刷新'
    };
  }
  loadMap(map: any) {
    console.log('map instance here', map);
  }

  clickMarker(marker: any) {
    console.log('The clicked marker is', marker);
  }
}

