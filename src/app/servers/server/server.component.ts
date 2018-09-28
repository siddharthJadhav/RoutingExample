import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    const serverId: number =  +this.route.snapshot.params['id'];
    console.log('serverId : ', serverId);
    this.server = this.serversService.getServer(serverId);
    console.log('serevr : ', this.server);
  }

}
