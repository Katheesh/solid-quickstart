import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>ZPULI</Title>
      <h1>ZPULI</h1>
      <h3>Coming soon!</h3>
      <Counter />
      <p>
        Powered by <a href="https://gitleaf.com" target="_blank">GitLeaf</a>
      </p>
    </main>
  );
}
