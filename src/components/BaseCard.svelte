<script lang="ts">
  import type { Snippet } from "svelte";

interface Props {
  className?: string;
  children: Snippet;
}

let { className = "p-4", children }: Props = $props();
</script>

<div class={"bg-base-100 rounded-2xl " + className}>{@render children()}</div>
