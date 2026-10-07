// Agent 管理 里只保留 hermes，其他全部屏蔽
// 其他所有 agent 相关代码已删除/屏蔽
export const AGENT_OPTIONS = [
  { label: 'Hermes', value: 'hermes' },
] as const

export const GROUP_AGENT_OPTIONS = AGENT_OPTIONS.map(option => ({
  label: option.label,
  value: option.value,
}))
