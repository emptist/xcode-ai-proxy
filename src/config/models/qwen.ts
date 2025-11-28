import { ApiModelConfig } from '../../types';
import { BaseModelProvider, ModelProviderConfig } from './base';

export class QWenProvider extends BaseModelProvider {
  private config: ModelProviderConfig;

  constructor(config: ModelProviderConfig) {
    super();
    this.config = config;
  }

  isAvailable(): boolean {
    return !!(this.config.apiKey && this.config.enabled !== false);
  }

  getProviderName(): string {
    return 'qwen';
  }

  getModels(): Record<string, ApiModelConfig> {
    if (!this.isAvailable()) return {};

    return {
      'qwen-plus': {
        type: 'api',
        apiUrl: this.config.apiUrl || 'https://dashscope.aliyuncs.com/compatible-mode/v1',
        apiKey: this.config.apiKey!,
        provider: 'google',
        name: 'QWen Plus',
        model: 'qwen-plus'
      },
      'qwen-turbo': {
        type: 'api',
        apiUrl: this.config.apiUrl || 'https://dashscope.aliyuncs.com/compatible-mode/v1',
        apiKey: this.config.apiKey!,
        provider: 'google',
        name: 'QWen Turbo',
        model: 'qwen-turbo'
      },
      'qwen-max': {
        type: 'api',
        apiUrl: this.config.apiUrl || 'https://dashscope.aliyuncs.com/compatible-mode/v1',
        apiKey: this.config.apiKey!,
        provider: 'google',
        name: 'QWen Max',
        model: 'qwen-max'
      }
    };
  }
}