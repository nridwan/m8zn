<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="bg-base-100 rounded-2xl">{@render children()}</div>
