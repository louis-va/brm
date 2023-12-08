import { Layout } from "../ui/design-system/Layout";
import UserInfo from "../ui/features/UserInfo";
import UserNewPassword from "../ui/features/UserNewPassword";

export default function UserProfile() {
  return (
    <Layout>
      <div className="flex flex-col gap-30 w-3/5">
        <UserInfo />
        <UserNewPassword />
      </div>
    </Layout>
  );
}
