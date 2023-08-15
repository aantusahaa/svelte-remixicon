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
class="remixicon ri-git-commit-line {customClass}"
{...$$restProps}
>
<path d="M15.874 13C15.4299 14.7252 13.8638 16 12 16C10.1362 16 8.57006 14.7252 8.12602 13H3V11H8.12602C8.57006 9.27477 10.1362 8 12 8C13.8638 8 15.4299 9.27477 15.874 11H21V13H15.874ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"></path>
</svg>
