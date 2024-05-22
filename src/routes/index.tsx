import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>zPULI</Title>
      <h1>zPULI</h1>
      <Counter />
      <small>
        Powered by <a href="https://gitleaf.com" target="_blank">GitLeaf</a>
      </small>
    </main>
  );
}
