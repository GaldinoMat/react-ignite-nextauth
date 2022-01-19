import { useContext, useEffect } from "react";
import { Can } from "../components/Can";
import { AuthContext, signOut } from "../contexts/AuthContext";
import { setupApiClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

const Dashboard = () => {
  const { user, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("/me")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

      <button onClick={signOut}>Sign Out</button>

      <Can permissions={["metrics.list"]}>
        <div>Metricas</div>
      </Can>
    </>
  );
};

export default Dashboard;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  const response = await apiClient.get("/me");

  return {
    props: {},
  };
});
