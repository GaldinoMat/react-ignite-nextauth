import type { NextPage } from "next";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    await signIn(data);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.main}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Home;
