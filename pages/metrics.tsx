import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

const Metrics = () => {
  return (
    <>
      <h1>Metrics</h1>
    </>
  );
};

export default Metrics;

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = setupApiClient(ctx);
    const response = await apiClient.get("/me");

    return {
      props: {},
    };
  },
  {
    permissions: ["metrics.list"],
    roles: ["administrator"],
  }
);
