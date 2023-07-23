Feature('Contact Form');

Scenario('Fill out and submit the contact form', async ({ I }) => {
  const url = 'https://bluescapeqainterview.wordpress.com/contact/';
  const name = 'Kumar';
  const email = 'kgourav@example.com';
  const website = 'https://example.com';
  const date = 'July 23, 2023';
  const submitButton = 'input[type="submit"]';

  I.amOnPage(url);
  I.fillField('input[name="g7-name"]', name);
  I.fillField('input[name="g7-email"]', email);
  I.fillField('input[name="g7-website"]', website);
  I.click('input[type="submit"]');
  I.see('Your message has been sent');
  I.waitForVisible('Your message has been sent', 10);
});
