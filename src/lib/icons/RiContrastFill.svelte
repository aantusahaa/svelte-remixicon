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
class="remixicon ri-contrast-fill {customClass}"
{...$$restProps}
>
<path d="M12 21.9966C6.47715 21.9966 2 17.5194 2 11.9966C2 6.47373 6.47715 1.99658 12 1.99658C17.5228 1.99658 22 6.47373 22 11.9966C22 17.5194 17.5228 21.9966 12 21.9966ZM12 19.9966V3.99658C7.58172 3.99658 4 7.5783 4 11.9966C4 16.4149 7.58172 19.9966 12 19.9966Z"></path>
</svg>
