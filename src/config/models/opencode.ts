import { ApiModelConfig } from '../../types';
import { BaseModelProvider, ModelProviderConfig } from './base';

/**
 * OpenCode Zen Provider
 * 
 * OpenCode Zen provides a curated list of models that have been tested and verified.
 * API Endpoint: https://opencode.ai/zen/v1 (OpenAI-compatible)
 * 
 * Free Tier:
 * - Uses "public" as API key by default
 * - Rate limited (~8-10 requests per minute)
 * - No authentication required
 * 
 * For better rate limits:
 * 1. Visit https://opencode.ai/auth
 * 2. Sign in and add billing details
 * 3. Copy your API key
 * 4. Set OPENCODE_API_KEY in .env
 * 
 * Documentation: https://opencode.ai/docs/zen/
 */
export class OpenCodeProvider extends BaseModelProvider {
  private config: ModelProviderConfig;

  constructor(config: ModelProviderConfig) {
    super();
    this.config = config;
  }

  isAvailable(): boolean {
    return this.config.enabled !== false;
  }

  getProviderName(): string {
    return 'opencode';
  }

  getModels(): Record<string, ApiModelConfig> {
    if (!this.isAvailable()) return {};

    const baseUrl = this.config.apiUrl || 'https://opencode.ai/zen/v1';
    const apiKey = this.config.apiKey || 'public';

    return {
      'big-pickle': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'opencode',
        name: 'Big Pickle',
        model: 'big-pickle'
      },
      'gpt-5-nano': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'opencode',
        name: 'GPT-5 Nano',
        model: 'gpt-5-nano'
      },
      'glm-5-free': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'opencode',
        name: 'GLM-5 Free',
        model: 'glm-5-free'
      },
      'glm-4.7-free': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'opencode',
        name: 'GLM-4.7 Free',
        model: 'glm-4.7-free'
      },
      'kimi-k2.5-free': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'opencode',
        name: 'Kimi K2.5 Free',
        model: 'kimi-k2.5-free'
      },
      'minimax-m2.5-free': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'opencode',
        name: 'MiniMax M2.5 Free',
        model: 'minimax-m2.5-free'
      },
      'minimax-m2.1-free': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'opencode',
        name: 'MiniMax M2.1 Free',
        model: 'minimax-m2.1-free'
      },
      'mimo-v2-flash-free': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'opencode',
        name: 'MiMo V2 Flash Free',
        model: 'mimo-v2-flash-free'
      },
      'nemotron-3-super-free': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'opencode',
        name: 'Nemotron 3 Super Free',
        model: 'nemotron-3-super-free'
      },
      'grok-code': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'opencode',
        name: 'Grok Code Fast 1',
        model: 'grok-code'
      },
      'trinity-large-preview-free': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'opencode',
        name: 'Trinity Large Preview',
        model: 'trinity-large-preview-free'
      }
    };
  }
}
