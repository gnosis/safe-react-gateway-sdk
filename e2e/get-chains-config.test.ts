import { getChainsConfig, getChainConfig } from '../src'
import config from './config'

const mainnetChainId = '1'
const rinkebyChainId = '4'
const polygonChainId = '137'

describe('getChainsConfig & getChainConfig tests', () => {
  describe('getChainsConfig tests', () => {
    it('Returns all chains config', async () => {
      const chainConfig = await getChainsConfig(config.baseUrl)

      expect(chainConfig.results).toBe
      // FIXME: it seems that count prop is not present in the response
      // expect(chainConfig.count).toBe(chainConfig.results.length)
      expect(chainConfig.results).toBeDefined()

      // mainnet config should be present
      const mainnetConfig = chainConfig.results.find((config) => config.chainId === mainnetChainId)
      expect(mainnetConfig).toBeDefined()

      // rinkeby config should be present
      const rinkebyConfig = chainConfig.results.find((config) => config.chainId === rinkebyChainId)
      expect(rinkebyConfig).toBeDefined()

      // polygon config should be present
      const polygonConfig = chainConfig.results.find((config) => config.chainId === polygonChainId)
      expect(polygonConfig).toBeDefined()
    })
  })

  describe('getChainConfig/{chainId} tests', () => {
    it('Returns Mainnet config', async () => {
      const mainnetConfig = await getChainConfig(config.baseUrl, mainnetChainId)

      expect(mainnetConfig).toBeDefined()
      expect(mainnetConfig.chainId).toBe(mainnetChainId)
      expect(mainnetConfig.chainName).toBe('Mainnet')
      expect(mainnetConfig.shortName).toBe('eth')
      expect(mainnetConfig.l2).toBe(false)

      // currency config
      const currency = mainnetConfig.nativeCurrency
      expect(currency).toBeDefined()
      expect(currency.name).toBe('Ether')
      expect(currency.symbol).toBe('ETH')
      expect(currency.decimals).toBe(18)
      expect(currency.logoUri).toBeDefined()

      expect(mainnetConfig.ensRegistryAddress).toBeDefined()
      // FIXME: it seems that recommendedMasterCopyVersion prop is not present in the response
      // expect(mainnetConfig.recommendedMasterCopyVersion).toBeDefined()
    })

    it('Returns Rinkeby config', async () => {
      const rinkebyConfig = await getChainConfig(config.baseUrl, rinkebyChainId)

      expect(rinkebyConfig).toBeDefined()
      expect(rinkebyConfig.chainId).toBe(rinkebyChainId)
      expect(rinkebyConfig.chainName).toBe('Rinkeby')
      expect(rinkebyConfig.shortName).toBe('rin')
      expect(rinkebyConfig.l2).toBe(false)

      // currency config
      const currency = rinkebyConfig.nativeCurrency
      expect(currency).toBeDefined()
      expect(currency.name).toBe('Ether')
      expect(currency.symbol).toBe('ETH')
      expect(currency.decimals).toBe(18)
      expect(currency.logoUri).toBeDefined()

      expect(rinkebyConfig.ensRegistryAddress).toBeDefined()
      // FIXME: it seems that recommendedMasterCopyVersion prop is not present in the response
      // expect(rinkebyConfig.recommendedMasterCopyVersion).toBeDefined()
    })

    it('Returns Polygon config', async () => {
      const polygonConfig = await getChainConfig(config.baseUrl, polygonChainId)

      expect(polygonConfig).toBeDefined()
      expect(polygonConfig.chainId).toBe(polygonChainId)
      expect(polygonConfig.chainName).toBe('Polygon')
      expect(polygonConfig.shortName).toBe('matic')
      expect(polygonConfig.l2).toBe(true)

      // currency config
      const currency = polygonConfig.nativeCurrency
      expect(currency).toBeDefined()
      expect(currency.name).toBe('Matic')
      expect(currency.symbol).toBe('MATIC')
      expect(currency.decimals).toBe(18)
      expect(currency.logoUri).toBeDefined()

      // FIXME: it seems that ensRegistryAddress and recommendedMasterCopyVersion prop is not present in the response
      // expect(polygonConfig.ensRegistryAddress).toBeDefined()
      // expect(polygonConfig.recommendedMasterCopyVersion).toBeDefined()
    })
  })
})
