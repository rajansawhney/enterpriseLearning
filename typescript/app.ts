interface IEmailable {
    name: string,
    email: string
}

function sendEmail(contact: IEmailable) {
    console.log( `contact.name <${contact.email}>`);
}

sendEmail( { name: "Andrew Chalkley", email: "rsawhney@cbtnuggets.com" } );

class Company implements IEmailable{
    name: string;
    email: string;

    constructor(companyName: string, emailAddress: string){
        this.name = companyName;
        this.email = emailAddress;
    }
}

let cbtnuggets = new Company("CBT Nuggets", "enterprise@cbtnuggets.com");

sendEmail(cbtnuggets);