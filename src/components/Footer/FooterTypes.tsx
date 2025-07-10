"use client";

import css from "./FooterTypes.module.css";

type ContactItem = {
  label: string;
  value?: string;
  url?: string;
};

type ContactsProps = {
  contacts: {
    connections: ContactItem;
    
    email: ContactItem;
    linkedin: ContactItem;
    gitHub: ContactItem;
    address: ContactItem;
  };
};

export default function FooterTypes({ contacts }: ContactsProps) {
  return (
    <div className={css.footerTypes}>
      {/* <h2>{contacts.connections.label}</h2> */}
      {/* або інше заголовкове поле, за потреби */}
      <ul className={css.footerList}>

        <li>
          {/* <strong>{contacts.email.label}:</strong> */}
          <a href={`mailto:${contacts.email.value}`}>{contacts.email.value}</a>
        </li>
        {/* <li>
          <strong>{contacts.linkedin.label}:</strong>
          <a
            href={contacts.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contacts.linkedin.label}
          </a>
        </li>
        <li>
          <strong>{contacts.gitHub.label}:</strong>
          <a
            href={contacts.gitHub.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contacts.gitHub.label}
          </a>
        </li> */}
        <li>
          {/* <strong>{contacts.address.label}:</strong> */}
          {contacts.address.value}
        </li>
      </ul>
    </div>
  );
}
