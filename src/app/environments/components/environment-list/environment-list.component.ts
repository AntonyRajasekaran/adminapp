import { Component, OnInit } from '@angular/core';
import { EnvironmentListService } from '../../services/environment-list.service';
import { EnvironmentListInterface } from '../../types/environmentListInterface';

@Component({
  selector: 'app-environment-list',
  templateUrl: './environment-list.component.html',
  styleUrls: ['./environment-list.component.css'],
})
export class EnvironmentListComponent implements OnInit {
  environmentList: EnvironmentListInterface[] = [];

  constructor(private environmentListService: EnvironmentListService) {}

  ngOnInit(): void {
    this.environmentListService
      .getEnvironments()
      .subscribe((envList: EnvironmentListInterface[]) => {
        this.environmentList = envList;
      });
  }
}
