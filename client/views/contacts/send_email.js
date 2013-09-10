Template.send_email.events({
	"click .show_email_form": function(e, t) {
		Session.set("currentlyEmailing", t.data._id);
	},

	"click .send_email": function(e, t) {
		var to = t.data.email,
			from = Meteor.user()["emails"][0]["address"],
			subject = t.find(".subject").value,
			message = t.find(".message").value;

		if(!message.length) {
			alert("Type something...");
			return false;
		}

		Meteor.call("sendEmailToContact", to, from, subject, message, function(err, result) {
			if(err) {
				alert("There was some error while sending the email. Please try again.");
			} else {
				console.log("Email sent.");
			}
		});
		Session.set("currentlyEmailing", false);
	},

	"click .hide_email_form": function(e, t) {
		Session.set("currentlyEmailing", false);
	}
});


Template.send_email.isEmailing = function() {
	return Session.equals("currentlyEmailing", this._id);
}