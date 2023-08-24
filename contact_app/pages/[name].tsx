import { useRouter } from "next/router";
import list from "../contact_list";
import Link from "next/link";

export default function Contacts() {
  const router = useRouter();
  const { name } = router.query;
  const contact = list.find((contact) => contact.id === name);
  const selectedName = contact?.name;

  return (
    <div>
      <Link href="/">
        <div>Back</div>
      </Link>
      <div>{selectedName}</div>
    </div>
  );
}
