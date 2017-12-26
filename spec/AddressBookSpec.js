describe('Address Book', function() {

	// Declare variables in outer scope
	var addressBook,
		thisContact;

	// Code that each test will run before completing other tasks
	beforeEach(function() {
		addressBook = new AddressBook();
		thisContact = new Contact();
	});

	it('should be able to add a contact', function() {
		addressBook.addContact(thisContact);

		// If I were to get the first contact in my address book, addressBook.getContact(0)
		// should be the same as "thisContact."
		expect(addressBook.getContact(0)).toBe(thisContact);
	});

	it('should be able to delete a contact', function() {
		var addressBook = new AddressBook(),
			thisContact = new Contact();

		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);

		// Deleting the contact, then attempting to retrieve the contact, should
		// result in "undefined."
		expect(addressBook.getContact(0)).not.toBeDefined();
	});
});

describe('Async Address Book', function() {
	var addressBook = new AddressBook();

	// "Done" is passed to the callback because it has to wait on an async operation to complete.
	// Signal to the framework that our async function is done and we can continue testing.
	beforeEach(function(done) {
		addressBook.getInitialContacts(function() {
			done();
		});
	});

	it('should grab initial contacts', function() {
		addressBook.getInitialContacts();
		expect(addressBook.initialComplete).toBe(true);
	});
});