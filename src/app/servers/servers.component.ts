import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Press the button to create a server.';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created! Name is ' + this.serverName + '.';
    this.servers.push(this.serverName);
    this.serverCreated = true;

    setTimeout(() => {
      this.serverCreated = false;
    }, 3000);
  }
}



