<script lang="ts">
export let size = '1em';
export let color = 'currentColor';
export let label= '';
let customClass = '';
export { customClass as class };
</script>

<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
width={size}
height={size}
fill={color}
aria-label={label ? label : undefined}
aria-hidden={!label ? 'true' : undefined}
role={label ? 'img' : undefined}
class="remixicon ri-openbase-fill {customClass}"
{...$$restProps}
>
<path d="M12.0001 2.75977L21.9992 5.99576L21.1001 15.4638L12.0001 22.3232L2.90012 15.4598L2.01074 5.99977L12.0001 2.75977ZM12.0001 3.58511L3.18898 6.43476L12.0001 20.7929L20.8058 6.43476L12.0001 3.58511Z"></path>
</svg>
