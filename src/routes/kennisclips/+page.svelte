<script>
import KnowledgeClips from "$lib/organisms/knowledgeClips.svelte";
import PageTransition from "$lib/atoms/pageTransition.svelte";

export let data
</script>


<KnowledgeClips data={data}/>
<PageTransition	x="var(--vtSec-Green)"/>