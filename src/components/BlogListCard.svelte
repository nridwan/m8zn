<script lang="ts">
  import type { BlogContent } from "src/types/blog";
  import BaseCard from "./BaseCard.svelte";

  interface Props {
    post: BlogContent;
  }
  let { post }: Props = $props();
</script>

<a href={"/blog/" + post.slug}>
  <BaseCard>{post.data.title}</BaseCard>
</a>
