
export interface CovidStatsModel {
    city: String;
    confirmed: Number;
    country: String;
    deaths: Number;
    keyId: String;
    lastUpdate: String;
    province: String;
    recovered: Number;
}

export interface CovidInfoModel {
    covid19Stats: [CovidStatsModel];
}
