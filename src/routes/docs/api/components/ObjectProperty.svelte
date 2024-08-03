<script>
    export let property, type, description;
</script>

<div class="property">
    <p class="propertyName"><span class="bold">{property}</span>{type}</p>
    <p class="propertyDesc">{description}</p>
</div>

<style>
    .property{
        border-top: 1px solid rgba(255, 255, 255, 0.15);
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        padding: 15px;
        color: rgb(200, 200, 200);
    }

    .propertyName{
        font-size: 12px;
    }

    .bold{
        font-weight: bold;
        font-size: 16px;
        margin-right: 15px;
    }
</style>
