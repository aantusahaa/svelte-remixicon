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
class="remixicon ri-expand-right-line {customClass}"
{...$$restProps}
>
<path d="M17.1718 11.0003L12.5149 6.34341L13.9291 4.9292L21.0002 12.0003L13.9291 19.0713L12.5149 17.6571L17.1718 13.0003L7.99995 13.0004L7.99993 11.0004L17.1718 11.0003ZM4 19.0002L4 5.00021H6V19.0002H4Z"></path>
</svg>
