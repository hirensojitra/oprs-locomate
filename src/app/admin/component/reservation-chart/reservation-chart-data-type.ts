export class ReservationChartDataType {
    public code?: string = '';
    public route?: string = '';
    public time?: string = '';
    public sourceStation?: string = '';
    public destinationStation?: string = '';
    public vehicleType?: string = '';
    public serviceType?: string = '';
    public seatType?: string = '';
    public vehicleNumber?: string = '';
    public depotName?: string = '';
    public action = '';
}
export class ReservationChartHistoryDataType {
    public code?: string = '';
    public route?: string = '';
    public vehicleType?: string = '';
    public serviceType?: string = '';
    public seatType?: string = '';
    public createdOn?: string = '';
    public createdBy?: string = '';
    public action = '';
}