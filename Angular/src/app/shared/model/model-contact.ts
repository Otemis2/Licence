const contact = {
    listContact : [
        {
            titre : "User Id",
            column : "userId",
            value: "userId"
        },
        {
            titre : "Id",
            column : "id",
            value: "id"
        },
        {
            titre : "title",
            column : "title",
            value: "title"
        },
        {
            titre : "Corps",
            column : "body",
            value: "body"
        }
    ],
    listContact2 : [
        {
            titre : "Nomid",
            column : "nom",
            value: "nom"
        },
        {
            titre : "PrenomId",
            column : "prenom",
            value: "prenom"
        },
        {
            titre : "telID",
            column : "tel",
            value: "tel"
        },
        {
            titre : "Adresse",
            column : "adresse",
            value: "adresse"
        }
        ,
        {
            titre : "Email",
            column : "email",
            value: "email"
        }
    ]
}
export class ModelContact{

    public getContactModel(){
        return contact;
    }
}
