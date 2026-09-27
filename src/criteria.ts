// The seven criteria every Technical Note is scored against, in display order.
export const CRITERIA = [
  { key: 'architecture', label: 'Architecture and model design' },
  { key: 'code_quality', label: 'Code quality and engineering practice' },
  { key: 'robustness', label: 'Robustness and adversarial resilience' },
  { key: 'efficiency', label: 'Efficiency and resource use' },
  { key: 'data_privacy', label: 'Data handling and privacy posture' },
  { key: 'documentation', label: 'Documentation and transparency' },
  { key: 'deployment', label: 'Deployment and production readiness' },
] as const;
