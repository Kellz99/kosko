import { Pod } from "npm:kubernetes-models@^4/v1/Pod";

const pod = new Pod({
  metadata: { name: "file-esm" }
});

export default pod;
