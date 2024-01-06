import type { IconAliases, IconSet } from 'vuetify'
import { h } from 'vue'
import { Icon } from '@iconify/vue'

const aliases = <IconAliases>{
  /* custom ones */
  email: 'mdi:email',
  /* vuetify aliases */
  collapse: 'mdi:chevron-up',
  complete: 'mdi:check',
  cancel: 'mdi:close-circle',
  close: 'mdi:close',
  delete: 'mdi:close-circle',
  // delete (e.g. v-chip close)
  clear: 'mdi:close-circle',
  success: 'mdi:check-circle',
  info: 'mdi:information',
  warning: 'mdi:alert-circle',
  error: 'mdi:close-circle',
  prev: 'mdi:chevron-left',
  next: 'mdi:chevron-right',
  checkboxOn: 'mdi-checkbox-marked',
  checkboxOff: 'mdi-checkbox-blank-outline',
  checkboxIndeterminate: 'mdi:minus-box',
  delimiter: 'mdi:circle',
  // for carousel
  sortAsc: 'mdi:arrow-up',
  sortDesc: 'mdi:arrow-down',
  expand: 'mdi:chevron-down',
  menu: 'mdi:menu',
  subgroup: 'mdi:menu-down',
  dropdown: 'mdi-menu-down',
  radioOn: 'mdi-radiobox-marked',
  radioOff: 'mdi-radiobox-blank',
  edit: 'mdi:pencil',
  ratingEmpty: 'mdi:star-outline',
  ratingFull: 'mdi:star',
  ratingHalf: 'mdi:star-half-full',
  loading: 'mdi:cached',
  first: 'mdi:page-first',
  last: 'mdi:page-last',
  unfold: 'mdi:unfold-more-horizontal',
  file: 'mdi:paperclip',
  plus: 'mdi:plus',
  minus: 'mdi:minus',
  calendar: 'mdi:calendar',
  $checkboxOn: 'mdi-checkbox-marked',
  $checkboxOff: 'mdi-checkbox-blank-outline',
}

const iconify = <IconSet>{
  component: (props) => {
    // eslint-disable-next-line no-console
    console.log(props)
    const { icon, tag, ...rest } = props
    const stringIcon = icon as string
    return h(tag, rest, [
      h(Icon, {
        key: stringIcon,
        icon: aliases[icon as string] ?? icon,
        ...rest,
      }),
    ])
  },
}

export { aliases, iconify }
