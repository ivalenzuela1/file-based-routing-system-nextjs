import list from "../../contact_list";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Contacts() {
  const contacts = list.map((contact, index) => (
    <div key={index}>
      <Link href={`contacts/${contact.id}`}>
        <div>{contact.name}</div>
      </Link>
    </div>
  ));
  return (
    <Layout>
      <div>{contacts}</div>
    </Layout>
  );
}
