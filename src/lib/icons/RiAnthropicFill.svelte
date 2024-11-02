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
class="remixicon ri-anthropic-fill {customClass}"
{...$$restProps}
>
<path d="M16.7645 5H13.4568L19.3799 20H22.6107L16.7645 5ZM7.22604 5L1.37988 20H4.68758L5.99527 16.8462H12.1491L13.3799 19.9231H16.6876L10.6876 5H7.30296H7.22604ZM6.91834 14.0769L8.91834 8.76923L10.9953 14.0769H6.99527H6.91834Z"></path>
</svg>
