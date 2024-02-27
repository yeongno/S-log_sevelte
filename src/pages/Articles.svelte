<script>
  // @ts-nocheck

  import ArticleHeader from "../components/ArticleHeader.svelte";
  import ArticleList from "../components/ArticleList.svelte";
  import ArticleAddForm from "../components/ArticleAddForm.svelte";
  import { isLogin } from "../stores";
  import Comments from "../pages/Comments.svelte";
  import { Route } from "tinro";
</script>

<ArticleHeader />
<main class="slog-main">
  {#if $isLogin}
    <ArticleAddForm />
  {/if}
  <ArticleList />
  <Route path="/comments/:id">
    <Comments />
  </Route>
</main>
