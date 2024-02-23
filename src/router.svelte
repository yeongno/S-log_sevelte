<script>
  // @ts-nocheck

  import { Route } from "tinro";

  import Articles from "./pages/Articles.svelte";
  import Login from "./pages/Login.svelte";
  import Register from "./pages/Register.svelte";
  import NotFound from "./pages/notFound.svelte";
</script>

<Route path="/" redirect="/articles" />
<Route path="/articles/*"><Articles /></Route>
<Route path="/login"><Login /></Route>
<Route path="/register"><Register /></Route>
<Route fallback><NotFound /></Route>
