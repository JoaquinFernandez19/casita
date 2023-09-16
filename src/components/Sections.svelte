<script>

    const sections = [
        {
            title: 'Section 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            title: 'Section 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            title: 'Section 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            title: 'Section 4',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
    ]
</script>

<div class="container">
    <h1>Sections</h1>
    {#each sections as {title}}
       <div>{title}</div>
    {/each}

</div>