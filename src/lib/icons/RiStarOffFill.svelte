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
class="remixicon ri-star-off-fill {customClass}"
{...$$restProps}
>
<path d="M23.4132 8.7918L18.0211 13.7783L9.70961 5.46678L12.0006 0.5L15.3862 7.84006L23.4132 8.7918ZM18.6224 20.0361L21.193 22.6067L22.6072 21.1925L2.80818 1.39348L1.39397 2.80769L6.65832 8.07205L0.587891 8.7918L6.52248 14.2799L4.94715 22.2082L12.0006 18.26L19.054 22.2082L18.6224 20.0361Z"></path>
</svg>
