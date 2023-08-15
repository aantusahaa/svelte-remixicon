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
class="remixicon ri-brush-4-line {customClass}"
{...$$restProps}
>
<path d="M9 4.99658V11.2693H7V4.99658H5V13.9966H19V4.99658H9ZM20 15.9966H4V17.9966H20V15.9966ZM3 13.9966V3.99658C3 3.4443 3.44772 2.99658 4 2.99658H20C20.5523 2.99658 21 3.4443 21 3.99658V13.9966H22V18.9966C22 19.5489 21.5523 19.9966 21 19.9966H13V22.9966H11V19.9966H3C2.44772 19.9966 2 19.5489 2 18.9966V13.9966H3Z"></path>
</svg>
