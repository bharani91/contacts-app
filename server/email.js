Meteor.methods({
	"sendEmailToContact": function(to, from, subject, message) {
		Email.send({
			to: to,
			from: from,
			subject: subject,
			text: message
		})
	}
})