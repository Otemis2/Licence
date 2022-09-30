const modelForm = {
    formContact : [
        {
            label : "Saisissez l'objet du mail",
            name : "sujet",
            type: "input",
            MatError : ["required"]
        },
        {
            label : "Saisissez votre message",
            name : "message",
            type: "textarea",
            MatError : ["required","minLength"]
        }
    ],

    formMenu: [
        {
            label : "Nom du menu",
            name : "nMenu",
            type: "input",
            MatError : ["required"]
        },
        {
            label : "Entrée",
            name : "entree",
            type: "textarea",
            MatError : ["required"]
        },
        {
            label : "Plat",
            name : "plat",
            type: "textarea",
            MatError : ["required"]
        },
        {
            label : "Dessert",
            name : "dessert",
            type: "textarea",
            MatError : ["required"]
        }
    ]
}
export class ModelForm {
    public getForm(){
        return modelForm;
    }
}

