import { Layout } from "../ui/design-system/Layout";
import UserInfo from "../ui/features/UserInfo";

export default function UserProfile() {
  return (
    <Layout>
      <div className="flex flex-col gap-30">
        <UserInfo />
      </div>
    </Layout>
  );
}
