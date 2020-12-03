import { PrivateRoute } from "components/private-route";
import { Layout } from "components/app/layout";

function Dashboard() {
  return (
    <Layout>
      <div>
        <h1>Settings</h1>
      </div>
    </Layout>
  );
}

export default PrivateRoute(Dashboard);
