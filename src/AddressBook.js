function AddressBook() {
	this.contacts = [];
}

AddressBook.prototype.getInitialContacts = function(cb) {
	var self = this;

	setTimeout(function() {
		// Fake API call will run this when async action is complete
		self.initialComplete = true;
		if (cb) {
			return cb();
		}
	});
};

AddressBook.prototype.addContact = function(contact) {
	this.contacts.push(contact);
};

AddressBook.prototype.getContact = function(contactIndex) {
	return this.contacts[contactIndex];
};

AddressBook.prototype.deleteContact = function(contactIndex) {
	this.contacts.splice(contactIndex, 1);
};