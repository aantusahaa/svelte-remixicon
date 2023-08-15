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
class="remixicon ri-arrow-right-up-fill {customClass}"
{...$$restProps}
>
<path d="M13.0506 12.361L7.39371 18.0179L5.97949 16.6037L11.6363 10.9468L6.6866 5.99707H18.0003V17.3108L13.0506 12.361Z"></path>
</svg>
