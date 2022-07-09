import { Button } from "@acme/core";
import { useIsomorphicLayoutEffect } from "@acme/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("acme docs page");
  }, []);
  return (
    <div>
      <h1>ACME Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
