export enum SafeAppAccessPolicyTypes {
  NoRestrictions = 'NO_RESTRICTIONS',
  DomainAllowlist = 'DOMAIN_ALLOWLIST',
}

export type SafeAppNoRestrictionsPolicy = {
  type: SafeAppAccessPolicyTypes.NoRestrictions
}

export type SafeAppDomainAllowlistPolicy = {
  type: SafeAppAccessPolicyTypes.DomainAllowlist
  value: string[]
}

export type SafeAppsAccessControlPolicies = SafeAppNoRestrictionsPolicy | SafeAppDomainAllowlistPolicy

export type SafeAppProvider = {
  url: string
  name: string
}

export enum SafeAppFeatures {
  BATCHED_TRANSACTIONS = 'BATCHED_TRANSACTIONS',
}

export type SafeAppData = {
  id: number
  url: string
  name: string
  iconUrl: string
  description: string
  chainIds: string[]
  provider?: SafeAppProvider
  accessControl: SafeAppsAccessControlPolicies
  tags: string[]
  features: SafeAppFeatures[]
}

export type SafeAppsResponse = SafeAppData[]
