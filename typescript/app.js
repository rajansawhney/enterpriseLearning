function sendEmail(contact) {
    console.log("contact.name <" + contact.email + ">");
}
sendEmail({ name: "Andrew Chalkley", email: "rsawhney@cbtnuggets.com" });
var Company = /** @class */ (function () {
    function Company(companyName, emailAddress) {
        this.name = companyName;
        this.email = emailAddress;
    }
    return Company;
}());
var cbtnuggets = new Company("CBT Nuggets", "enterprise@cbtnuggets.com");
sendEmail(cbtnuggets);
