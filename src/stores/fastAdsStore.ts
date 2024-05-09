import { makeAutoObservable, runInAction } from "mobx";
import { FastAd, FastAdsMainResponse } from "./specificTypes/fastAdsDataType";

export class FastAdsStore {
  fastAds: FastAd[] = [];
  showTheAds: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  getAllFastAds = async (locale: string) => {
    let response = await fetch(`/api/fast-ads?locale=${locale}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    });

    if (response.ok) {
      let data: FastAdsMainResponse = await response.json();
      runInAction(() => {
        this.fastAds = data.data;
      });
    }
  };

  toggleShowingAds = () => {
    runInAction(() => {
      this.showTheAds = !this.showTheAds;
    });
  };
}
