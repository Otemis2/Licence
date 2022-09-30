const reservation = {
    listReservation : [
        {
            titre : "Id",
            column : "id",
            value: "id"
        },
        {
            titre : "date",
            column : "date",
            value: "date"
        }
    ]
}
export class ModelReservation {

    public getReservationModel(){
        return reservation;
    }
}

