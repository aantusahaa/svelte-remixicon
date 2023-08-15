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
class="remixicon ri-forbid-2-fill {customClass}"
{...$$restProps}
>
<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM16.8911 8.52313C16.6997 8.25459 16.4836 7.99828 16.2426 7.75736C16.0017 7.51644 15.7454 7.30029 15.4769 7.10891L7.10891 15.4769C7.30029 15.7454 7.51644 16.0017 7.75736 16.2426C7.99828 16.4836 8.25459 16.6997 8.52313 16.8911L16.8911 8.52313Z"></path>
</svg>
