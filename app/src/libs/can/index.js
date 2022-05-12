import { useStore } from '@/src/contexts/store'

const rules = {
  admin: {
    rule: ['in', 'out']
  },

  user: {
    rule: ['in']
  }
}

const check = (props) => {

  const { state } = useStore()

  if (!state)
    return false

  const permissions = rules[state.profile?.role]

  if (!permissions)
    return false

  else if (permissions.rule.includes(props.rule))
    return true

  return false
}

const Can = (props) => {
  return check(props) ? props.yes() : props.no()
}

Can.defaultProps = {
  yes: () => null,
  no: () => null
}

export default Can