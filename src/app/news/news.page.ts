import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any[] = [];


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNews().subscribe(news => {
      this.data = news;
    });

  }



}











