import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundImageService {
  url: string = "https://cdn.zenfolio.net/cdn2/pub/mwxzbr1lvckq/0/null/m/s1osbgu4uzlw4nbragjn/s/v-3/p2392400128-6.jpg?ts=6VS&tk=33qGEKF9SbIDzyyCmHQ6JoWTaT6tTsfXBzl4EyebJnLUP5hrxEPznuLzTmIhFf3Jocv9J-0VXugRQ2JtPPm48Q==&v=2&visitor=Su-a5h6BmZll8wUdZVQpKkPaZdZJgLJFZquMpM9enEkn&auth=exp=1545955199~acl=%2Fcdn2%2Fpub%2Fmwxzbr1lvckq%2F%2A~hmac=5ea3ffc5bf99a7e9451fc1b0c7ba48d9";
  carouselItems = [
    "https://cdn.zenfolio.net/cdn2/pub/mwxzbr1lvckq/0/null/m/s1osbgu4uzlw4nbragjn/s/v-3/p2392400128-6.jpg?ts=6VS&tk=33qGEKF9SbIDzyyCmHQ6JoWTaT6tTsfXBzl4EyebJnLUP5hrxEPznuLzTmIhFf3Jocv9J-0VXugRQ2JtPPm48Q==&v=2&visitor=Su-a5h6BmZll8wUdZVQpKkPaZdZJgLJFZquMpM9enEkn&auth=exp=1545955199~acl=%2Fcdn2%2Fpub%2Fmwxzbr1lvckq%2F%2A~hmac=5ea3ffc5bf99a7e9451fc1b0c7ba48d9",
    "https://cdn.zenfolio.net/cdn2/pub/mwxzbr1lvckq/0/null/m/wxhfqi3m3v5w8kg4lztx/s/v-3/p1929953578-6.jpg?ts=2YN&tk=yUy4i-_pPmYlrPk03IrewIOaQ_9eeMMZMmkP0OSS7OzMRmwo4WTpknvAcrI-eHCX&v=2&visitor=Su-a5h6BmZll8wUdZVQpKkPaZdZJgLJFZquMpM9enEkn&auth=exp=1545955199~acl=%2Fcdn2%2Fpub%2Fmwxzbr1lvckq%2F%2A~hmac=5ea3ffc5bf99a7e9451fc1b0c7ba48d9",
    "https://cdn.zenfolio.net/cdn2/pub/mwxzbr1lvckq/0/null/m/bfrhhbmnydwtxws67onx/s/v-3/p2077402775-6.jpg?ts=2YN&tk=mKWfJntA-Xs6v3U4S6HfWGJYz0JvHaphUArvi7zI6HGPvBEydSV5LDSbe1jBOnlx&v=2&visitor=Su-a5h6BmZll8wUdZVQpKkPaZdZJgLJFZquMpM9enEkn&auth=exp=1545955199~acl=%2Fcdn2%2Fpub%2Fmwxzbr1lvckq%2F%2A~hmac=5ea3ffc5bf99a7e9451fc1b0c7ba48d9",
    "https://cdn.zenfolio.net/cdn2/pub/mwxzbr1lvckq/0/null/m/6i90nf0im8fw11ddeppe/s/v-3/p2410568524-6.jpg?ts=6VH&tk=QPsPiKpFVryhO9iO2E0M5v04djq2Lj356ogCC9MrC2kIXQn8jyyHPmUcdMoP_a0RWzl3XyKFWPHjG0U-DAPuEA==&v=2&visitor=Su-a5h6BmZll8wUdZVQpKkPaZdZJgLJFZquMpM9enEkn&auth=exp=1545955199~acl=%2Fcdn2%2Fpub%2Fmwxzbr1lvckq%2F%2A~hmac=5ea3ffc5bf99a7e9451fc1b0c7ba48d9",
    "https://cdn.zenfolio.net/cdn2/pub/mwxzbr1lvckq/0/null/m/rcmgnyobghmqv8zf3cn9/s/v-3/p2410628768-6.jpg?ts=6VH&tk=-6oC2BWuMw1fcgWVdlT_z13vd6WeDe5NBGPwFhgzoNFxe4LYOjBHqbPvu3f5zdrkFb68cU_8DbhvPhgat8XOgQ==&v=2&visitor=Su-a5h6BmZll8wUdZVQpKkPaZdZJgLJFZquMpM9enEkn&auth=exp=1545955199~acl=%2Fcdn2%2Fpub%2Fmwxzbr1lvckq%2F%2A~hmac=5ea3ffc5bf99a7e9451fc1b0c7ba48d9",
    "https://cdn.zenfolio.net/cdn2/pub/mwxzbr1lvckq/0/null/m/i45dvxhxvkkcaswkhr1l/s/v-3/p2410629694-6.jpg?ts=6VH&tk=Qpj54-BhljtGho2MGcZ7nRx-5e-ECgTXpMGCqYv-UReV6yoi0C9Z_kLaxEVGhjpO9zdii47cwLYNdKGja-pC0A==&v=2&visitor=Su-a5h6BmZll8wUdZVQpKkPaZdZJgLJFZquMpM9enEkn&auth=exp=1545955199~acl=%2Fcdn2%2Fpub%2Fmwxzbr1lvckq%2F%2A~hmac=5ea3ffc5bf99a7e9451fc1b0c7ba48d9",
    "https://cdn.zenfolio.net/cdn2/pub/mwxzbr1lvckq/0/null/m/ot0vop6gwzs_u-hycays/s/v-3/p2410606659-6.jpg?ts=6VH&tk=nw9HtkGtAqAio388tYapdjdV09rc_TaDSlrJR2Zm7dXQIKAq-x_HA17XEiua1kkjvDdmDkuB3V63H_PKd688qQ==&v=2&visitor=Su-a5h6BmZll8wUdZVQpKkPaZdZJgLJFZquMpM9enEkn&auth=exp=1545955199~acl=%2Fcdn2%2Fpub%2Fmwxzbr1lvckq%2F%2A~hmac=5ea3ffc5bf99a7e9451fc1b0c7ba48d9",
    "https://cdn.zenfolio.net/cdn2/pub/mwxzbr1lvckq/0/null/m/ushuxmyk0raepx7z6acq/s/v-3/p2392381682-6.jpg?ts=6VH&tk=z408McGrL2GxUFfuBOl-wy1U8-mwX3sgW2ixmp8Q8h84dhARGQpPEdfIS0IBQ3sGI4LkV-r7Jw1pelFwzJabUg==&v=2&visitor=Su-a5h6BmZll8wUdZVQpKkPaZdZJgLJFZquMpM9enEkn&auth=exp=1545955199~acl=%2Fcdn2%2Fpub%2Fmwxzbr1lvckq%2F%2A~hmac=5ea3ffc5bf99a7e9451fc1b0c7ba48d9",
    "https://cdn.zenfolio.net/cdn2/pub/mwxzbr1lvckq/0/null/m/qzts7lxoarj4ptldvpeu/s/v-3/p2392397174-6.jpg?ts=6VS&tk=31V5i4dMAZ607KNK9eJncomJb613BHjKRLO7n9pzb1xWGShu_-UWjow0DanlHrI7S1pZpv6fgN0kK04OTy89ow==&v=2&visitor=Su-a5h6BmZll8wUdZVQpKkPaZdZJgLJFZquMpM9enEkn&auth=exp=1545955199~acl=%2Fcdn2%2Fpub%2Fmwxzbr1lvckq%2F%2A~hmac=5ea3ffc5bf99a7e9451fc1b0c7ba48d9",
    "https://cdn.zenfolio.net/cdn2/pub/mwxzbr1lvckq/0/null/m/ipih7ei3pk1gx4vhkbxt/s/v-3/p2410581252-6.jpg?ts=6VH&tk=TDOuPlT2_d5icBFOgj2_Zrgpc0z08X8A9OKcq3ipSI6PSUcDsU-2UA6VSuPeYCZLfckM_D9B63tCFQzmE7rtxQ==&v=2&visitor=Su-a5h6BmZll8wUdZVQpKkPaZdZJgLJFZquMpM9enEkn&auth=exp=1545955199~acl=%2Fcdn2%2Fpub%2Fmwxzbr1lvckq%2F%2A~hmac=5ea3ffc5bf99a7e9451fc1b0c7ba48d9",
  ];
  changeTimer;
  private index = 0;

  constructor() { }

  changeBackgroundImage = () => {
    this.changeTimer = setTimeout(() => {
      if((this.index + 1) > (this.carouselItems.length - 1)) {
        this.index = 0;
      }
      else {
        this.index++;
      }

      this.url = this.carouselItems[this.index];

      this.changeBackgroundImage();
    }, 10000);
  }
}
