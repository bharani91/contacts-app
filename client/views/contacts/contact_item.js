Template.contact_item.events({
	"click .edit": function(e, t) {
		Session.set("currentlyEditing", t.data._id);
	},

	"click .cancel": function(e, t) {
		e.preventDefault();
		Session.set("currentlyEditing", false);
	},

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

		Contacts.update({ _id: t.data._id }, { $set: {
			name: name.value,
			email: email.value,
			phone: phone.value,
			twitter: twitter.value,
			userId: Meteor.userId()
		}});

		Session.set("currentlyEditing", false);
	},

	"click .delete": function(e, t) {
		var conf = confirm("Are you sure?");
		if(!conf) return false;
		
		Contacts.remove({ _id: t.data._id });
	}

});

Template.contact_item.isEditing = function() {
	return Session.equals("currentlyEditing", this._id);
}