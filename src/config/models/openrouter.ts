import { ApiModelConfig } from '../../types';
import { BaseModelProvider, ModelProviderConfig } from './base';

/**
 * OpenRouter Provider
 * 
 * OpenRouter provides a unified API to access multiple AI models from different providers.
 * API Endpoint: https://openrouter.ai/api/v1 (OpenAI-compatible)
 * 
 * Features:
 * - Access to 200+ models from OpenAI, Anthropic, Google, Meta, etc.
 * - Pay-per-use pricing
 * - Some free models available (with rate limits)
 * 
 * Get API Key:
 * 1. Visit https://openrouter.ai/
 * 2. Sign in and go to Keys page
 * 3. Create a new API key
 * 4. Set OPENROUTER_API_KEY in .env
 * 
 * Documentation: https://openrouter.ai/docs
 */
export class OpenRouterProvider extends BaseModelProvider {
  private config: ModelProviderConfig;

  constructor(config: ModelProviderConfig) {
    super();
    this.config = config;
  }

  isAvailable(): boolean {
    return !!this.config.apiKey;
  }

  getProviderName(): string {
    return 'openrouter';
  }

  getModels(): Record<string, ApiModelConfig> {
    if (!this.isAvailable()) return {};

    const baseUrl = this.config.apiUrl || 'https://openrouter.ai/api/v1';
    const apiKey = this.config.apiKey!;

    return {
      'or-deepseek-r1-free': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'openrouter',
        name: 'DeepSeek R1 (Free)',
        model: 'deepseek/deepseek-r1:free'
      },
      'or-deepseek-v3-free': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'openrouter',
        name: 'DeepSeek V3 (Free)',
        model: 'deepseek/deepseek-chat:free'
      },
      'or-llama-3.3-70b-free': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'openrouter',
        name: 'Llama 3.3 70B (Free)',
        model: 'meta-llama/llama-3.3-70b-instruct:free'
      },
      'or-qwen-2.5-72b-free': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'openrouter',
        name: 'Qwen 2.5 72B (Free)',
        model: 'qwen/qwen-2.5-72b-instruct:free'
      },
      'or-gemma-3-27b-free': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'openrouter',
        name: 'Gemma 3 27B (Free)',
        model: 'google/gemma-3-27b-it:free'
      },
      'or-mistral-7b-free': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'openrouter',
        name: 'Mistral 7B (Free)',
        model: 'mistralai/mistral-7b-instruct:free'
      },
      'or-claude-3.5-sonnet': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'openrouter',
        name: 'Claude 3.5 Sonnet',
        model: 'anthropic/claude-3.5-sonnet'
      },
      'or-gpt-4o': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'openrouter',
        name: 'GPT-4o',
        model: 'openai/gpt-4o'
      },
      'or-gpt-4o-mini': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'openrouter',
        name: 'GPT-4o Mini',
        model: 'openai/gpt-4o-mini'
      },
      'or-gemini-2.0-flash': {
        type: 'api',
        apiUrl: baseUrl,
        apiKey: apiKey,
        provider: 'openrouter',
        name: 'Gemini 2.0 Flash',
        model: 'google/gemini-2.0-flash-001'
      }
    };
  }
}
