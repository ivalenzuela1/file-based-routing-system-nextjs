import list from "../contact_list";
import Link from "next/link";

export default function Contacts() {
  const contacts = list.map((contact, index) => (
    <div key={index}>
      <Link href={"/" + contact.id}>
        <div>{contact.name}</div>
      </Link>
    </div>
  ));
  return (
    <div>
      <Link href="/">
        <div>Home</div>
      </Link>
      <Link href="/">
        <div>Back</div>
      </Link>
      <div>{contacts}</div>
    </div>
  );
}
