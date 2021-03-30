import React from 'react';
import ContactItem from '../components/ContactItem';
import Title from '../components/Title';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

function ContactsPage() {
  return (
    <>
      <div className="mb-5">
        <Title span="blogs" title="blogs" />
      </div>
      <div className="ContactsPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2zTG9uZG9uLCBCaXJsyZnFn21pxZ8gS3JhbGzEsXE!5e0!3m2!1saz!2s!4v1617045209536!5m2!1saz!2s"
            width="450"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contacts-sect">
          <ContactItem
            icon={phone}
            title={"Phone"}
            text1={"+345 07 923 45 77"}
            text2={"+543 70 329 77"}
          />
          <ContactItem
            icon={email}
            title={"Email"}
            text1={"loremipsum@hmail.com"}
            text2={"abcloremipsum@hmail.com"}
          />
          <ContactItem
            icon={location}
            title={"Location"}
            text1={"25 Paramount St, PN4 8H9 London"}
            text2={"United Kingdom"}
          />
        </div>
      </div>
    </>
  );
}

export default ContactsPage
