
export interface CovidStatsModel {
    city: string;
    confirmed: Number;
    country: string;
    deaths: Number;
    keyId: string;
    lastUpdate: string;
    province: string;
    recovered: Number;
}

export interface CovidInfoModel {
    covid19Stats: [CovidStatsModel];
    lastChecked: string;
}
