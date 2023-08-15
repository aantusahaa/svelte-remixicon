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
class="remixicon ri-suitcase-3-fill {customClass}"
{...$$restProps}
>
<path d="M15 1C15.5523 1 16 1.44772 16 2V7H17V6H19V7H20C20.5523 7 21 7.44772 21 8V20C21 20.5523 20.5523 21 20 21H19V22H17V21H7V22H5V21H4C3.44772 21 3 20.5523 3 20V8C3 7.44772 3.44772 7 4 7H5V6H7V7H8V2C8 1.44772 8.44772 1 9 1H15ZM9 10H7V18H9V10ZM13 10H11V18H13V10ZM17 10H15V18H17V10ZM14 3H10V7H14V3Z"></path>
</svg>
