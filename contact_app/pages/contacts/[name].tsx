import { useRouter } from "next/router";
import list from "../../contact_list";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Contacts() {
  const router = useRouter();
  const { name } = router.query;
  const contact = list.find((contact) => contact.id === name);
  const selectedName = contact?.name;

  return (
    <Layout>
      <a href="#" onClick={() => router.back()}>
        Back
      </a>
      <div>{selectedName}</div>
    </Layout>
  );
}
