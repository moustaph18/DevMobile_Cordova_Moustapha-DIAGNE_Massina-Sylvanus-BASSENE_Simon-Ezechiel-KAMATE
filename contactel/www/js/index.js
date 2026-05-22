document.addEventListener("deviceready",loadContacts,false); 

function loadContacts(){
    let options = new ContactFindOptions();
    options.multiple = true;
    options.hasPhoneNumber = true;

    let fields = ['*'];

    navigator.contacts.find(fields, showContacts, onError,options);

}

function showContacts(contacts){
    let items = "";
    for (const contact of contacts) {
        items+=`
         <li>
            <a href="#detailsPage" onclick="showDetails(${contact.id})">
                <img src="img/logo.png" alt="image indisponible">
                <h1>${contact.displayName}</h1>
                <p>${contact.phoneNumbers[0].value}</p>
            </a>
         </li>
        `;
    }
    const contactsList = document.getElementById("contactlist");
    contactsList.innerHTML = items;
    $(contactsList).listview("refresh");
}

function showDetails(contactId){
    let options = new ContactFindOptions();
    options.filter = contactId;
    options.multiple = false;
    options.hasPhoneNumber = true;
    let fields = ['id'];
    navigator.contacts.find(fields, showContact, onError, options);
}
function showContact(contacts){
    if (!contacts || contacts.length === 0) {
        console.log("Aucun contact trouvé");
        return;
    }
    let contact = contacts[0];

    const phone = (contact.phoneNumbers && contact.phoneNumbers.length > 0)
        ? contact.phoneNumbers[0].value : "—";
    const email = (contact.emails && contact.emails.length > 0)
        ? contact.emails[0].value : "—";
    const adresse = (contact.addresses && contact.addresses.length > 0)
        ? contact.addresses[0].formatted : "—";

    const li = document.querySelectorAll("#contactDetails li");
    // li[0] = Numero, li[1] = Email, li[2] = Adresse
    li[0].querySelector("p").innerText = phone;
    li[1].querySelector("p").innerText = email;
    li[2].querySelector("p").innerText = adresse;

    $("#contactDetails").listview("refresh");
}
function onError(error){

}