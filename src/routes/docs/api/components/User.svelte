<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
</script>

<h1>User</h1>
<p>The user is the data for individuals who have signed up for CoSphere, whether verified/paid/etc. or not. Users may be standard users or office users.</p>

<slot/>
