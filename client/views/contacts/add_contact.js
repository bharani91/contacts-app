Template.add_contact.events({
  "submit form": function(e, t) {
    e.preventDefault();
    var name = t.find(".name"),
    phone = t.find(".phone"),
    email = t.find(".email"),
    twitter = t.find(".twitter"),
    form = t.find("form"); 


    if(!name.value.length || !email.value.length) {
      alert("Please enter a valid name and email address.");
      return false;
    }

    Contacts.insert({
      name: name.value,
      email: email.value,
      phone: phone.value,
      twitter: twitter.value,
      userId: Meteor.userId()
    });

    form.reset();

  }
});