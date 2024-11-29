<!-- <script>
  import { page } from "$app/stores";

  export let data;

  let filter = $page.url.searchParams.getAll("categorie") || [];
  let isLoading = false;

  function applyFilter() {
    return function (event) {
      event.preventDefault();
      isLoading = true; // Start loading animation
      const formData = new FormData(event.target);
      const categorie = formData.getAll("categorie");
      const url = new URL(window.location);
      url.searchParams.delete("categorie");
      categorie.forEach((slug) => url.searchParams.append("categorie", slug));

      setTimeout(() => {
        window.location = url;
      }, 1000);
    };
  }
</script>

<section>
  <h2 id="methodes">Filter op categorie</h2>

  <form method="GET" action="/tekenmethodes#methodes" on:submit={applyFilter()}>
    {#each data.categories as category}
      <label for={category.slug}>
        <input
          type="checkbox"
          id={category.slug}
          value={category.slug}
          checked={filter.includes(category.slug)}
          name="categorie"
          tabindex="0"
        />
        {category.title}
      </label>
    {/each}
    {#if isLoading}
      <div class="loading-spinner"></div>
    {:else}
      <button type="submit"> Pas filters toe </button>
    {/if}
  </form>
</section>

<style>
  h2 {
    font-size: 1em;
  }

  #methodes {
    padding: 20px;
    background-color: var(--vtGrey-5);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  section form {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
  }

  label {
    display: flex;
    align-items: center;
    margin: 5px 0;
    padding: 0.3em;
    border-bottom: 0.3em solid transparent;
  }

  label:hover, label:focus-visible, label:active {
    background: var(--vtGrey-10);
    border-bottom: 0.3em solid #feb51e;
    transition: 0.05s;
  }

  section input[type="checkbox"] {
    margin-right: 8px;
  }

  section button {
    background-color: var(--vtYellow);
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }

  section button:hover {
    background-color: var(--vtYellow-80);
  }

  .loading-spinner {
    border: 4px solid var(--vtGrey-50);
    border-top: 4px solid var(--vtYellow);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
  }

  /* .filter-focus-hover {
    border-bottom: 0.3em solid red;
  } */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style> -->

<script>
  import { page } from "$app/stores";

  export let data;

  let filter = $page.url.searchParams.getAll("categorie") || [];
  let showFilters = false; // Controls visibility
  let isLoading = false; // Define the loading state

  const toggleFilters = () => {
    showFilters = !showFilters;
    console.log("Filters are now:", showFilters); // Debug toggle state
  };

  function applyFilter() {
    return function (event) {
      event.preventDefault();
      isLoading = true; // Start loading animation
      const formData = new FormData(event.target);
      const categorie = formData.getAll("categorie");
      const url = new URL(window.location);
      url.searchParams.delete("categorie");
      categorie.forEach((slug) => url.searchParams.append("categorie", slug));

      setTimeout(() => {
        window.location = url; // After 1 second, redirect to the new URL
      }, 1000);
    };
  }
</script>

<section>
  <h2 id="methodes">Filter op categorie</h2>

  <!-- Toggle Button -->
  <button class="filteroption" on:click={toggleFilters}>
    Filter
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"
      />
    </svg>
  </button> 

  <!-- Filter Form -->
  <form
    method="GET"
    action="/tekenmethodes#methodes"
    class:show={showFilters}
    on:submit={applyFilter()}>
    {#each data.categories as category}
      <label for={category.slug}>
        <input
          type="checkbox"
          id={category.slug}
          value={category.slug}
          checked={filter.includes(category.slug)}
          name="categorie"
          tabindex="0"
        />
        {category.title}
      </label>
    {/each}
    {#if isLoading}
      <div class="loading-spinner"></div>
    {:else}
      <button type="submit" class="submit-filter"> Pas filters toe </button>
    {/if}
  </form>
</section>

<style>
/* Filter Button */
.filteroption {
  height: 30px;
  width: 100px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: none;
}

.filteroption:hover {
  background-color: var(--vtYellow-80);
  cursor: pointer;
}

/* Form Visibility */
form {
  display: none; /* Hidden by default */
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  container-name: form-box;
  padding: 10px;
  /* width: fit-content; */
}

form.show {
   display: flex;  /*Shown when `show` class is added  */
  /* border: 2px solid red;  Debugging  */
}

/* Labels */
label {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.3em 0.6em 0.3em 0.3em;
  cursor: pointer;
  width: fit-content;
}

label:hover {
  background-color: var(--vtYellow-80);       
  font-weight: 600;
  letter-spacing: 0.05em;
}

input[type="checkbox"] {
  margin-right: 10px;
}

.submit-filter {
  background-color: var(--vtYellow-80);
  /* color: white; */
  color: var(--vtBlack);
  border: none;
  padding: 10px 20px;
  /* border-radius: 4px; */
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 160px;
}

.submit-filter:hover {
  background-color: var(--vtYellow-50); 
}

.submit-filter:active {
  transform: scale(0.95);
  opacity: 0.8;
  /* animation: disappear 0.5s forwards; */
  animation: disappear 0.75s ease-in-out forwards;
  animation-delay: 3s;
}

@keyframes disappear {
  0% {
    transform: scale(1); /* No scale change at start */
    opacity: 1;          /* Fully visible */
    width: 160px;        /* Initial width */
  }
  50% {
    opacity: 0.5;        /* Start fading text */
    width: 80px;         /* Shrink halfway */
  }
  90% {
    opacity: 0.25;        /* Start fading text */
    width: 40px;         /* Shrink halfway */
  }
  100% {
    opacity: 0;          /* Fully invisible */
    width: 0;            /* Collapse completely */
    transform: scale(0); /* Optional for shrinking further */
    visibility: hidden;  /* Hide from layout after animation */
  }
}

.loading-spinner {
    border: 4px solid var(--vtGrey-50);
    border-top: 4px solid #ffc933;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @container form-box (width > 200px) {
    form {
      width: 200px;
    }
    label {
      font-size: 18px;
      font-weight: 900;
    }
  }
</style>