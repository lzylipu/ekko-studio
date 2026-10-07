// Keep every Agent picker in the same order as single chat.
export const AGENT_OPTIONS = [
  { label: 'Hermes', value: 'hermes' },
] as const

export const GROUP_AGENT_OPTIONS = AGENT_OPTIONS.map(option => ({
  label: option.label,
  value: option.value,
}))
