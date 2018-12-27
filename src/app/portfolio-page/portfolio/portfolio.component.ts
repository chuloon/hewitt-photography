import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  category: string;
  testAlbums = [
    { id: "1", thumbnail: "https://cdn.zenfolio.net/cdn2/pub/dk1zvmdbwaok/0/null/m/03elshx7kjnujgmwxe29/s/v-3/p2392400097-6.jpg?ts=6VS&tk=MBESBEeOZkPTWVimo6PGkWWwFEjx_ku7NvjOQAq6sFBBwu-MZiDb8O92olQUM4Csvu5kS2-PGrjhxdgDiqAwCg==&v=2&visitor=1snxv9Sk0A5NWbzHQVgDpM6D0BYAAAAAcgJ2cppvGuC3&auth=exp=1546041599~acl=%2Fcdn2%2Fpub%2Fdk1zvmdbwaok%2F%2A~hmac=66496f5c06c29d82874a49499915cad4" },
    { id: "2", thumbnail: "https://cdn.zenfolio.net/cdn2/pub/dk1zvmdbwaok/0/null/m/03elshx7kjnujgmwxe29/s/v-3/p2392400097-6.jpg?ts=6VS&tk=MBESBEeOZkPTWVimo6PGkWWwFEjx_ku7NvjOQAq6sFBBwu-MZiDb8O92olQUM4Csvu5kS2-PGrjhxdgDiqAwCg==&v=2&visitor=1snxv9Sk0A5NWbzHQVgDpM6D0BYAAAAAcgJ2cppvGuC3&auth=exp=1546041599~acl=%2Fcdn2%2Fpub%2Fdk1zvmdbwaok%2F%2A~hmac=66496f5c06c29d82874a49499915cad4" },
    { id: "3", thumbnail: "https://cdn.zenfolio.net/cdn2/pub/dk1zvmdbwaok/0/null/m/03elshx7kjnujgmwxe29/s/v-3/p2392400097-6.jpg?ts=6VS&tk=MBESBEeOZkPTWVimo6PGkWWwFEjx_ku7NvjOQAq6sFBBwu-MZiDb8O92olQUM4Csvu5kS2-PGrjhxdgDiqAwCg==&v=2&visitor=1snxv9Sk0A5NWbzHQVgDpM6D0BYAAAAAcgJ2cppvGuC3&auth=exp=1546041599~acl=%2Fcdn2%2Fpub%2Fdk1zvmdbwaok%2F%2A~hmac=66496f5c06c29d82874a49499915cad4" },
    { id: "4", thumbnail: "https://cdn.zenfolio.net/cdn2/pub/dk1zvmdbwaok/0/null/m/03elshx7kjnujgmwxe29/s/v-3/p2392400097-6.jpg?ts=6VS&tk=MBESBEeOZkPTWVimo6PGkWWwFEjx_ku7NvjOQAq6sFBBwu-MZiDb8O92olQUM4Csvu5kS2-PGrjhxdgDiqAwCg==&v=2&visitor=1snxv9Sk0A5NWbzHQVgDpM6D0BYAAAAAcgJ2cppvGuC3&auth=exp=1546041599~acl=%2Fcdn2%2Fpub%2Fdk1zvmdbwaok%2F%2A~hmac=66496f5c06c29d82874a49499915cad4" },
  ];
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.category = params.category);
   }

  ngOnInit() {
  }

}
