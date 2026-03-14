# Xcode AI Proxy

🚀 **专为 Xcode 设计的多模型 AI 代理服务**

解决 Xcode 中添加其他模型Provider is not valid的问题，支持智谱 GLM、Kimi、OpenCode Zen 免费模型、OpenRouter、Google Gemini 等。

## ✨ 特性

- 🎯 **多模型支持**: 智谱 GLM、OpenCode Zen 免费模型、OpenRouter、Kimi、Google Gemini、通义千问
- 🔄 **流式响应**: 完整支持 SSE 流式输出
- 🇺🇸 **English优化**: 自动插入English交流指令
- ⚙️ **自定义提示**: 支持用户自定义系统提示
- 🛡️ **智能重试**: 自动重试机制，提高稳定性
- 📦 **TypeScript**: 完全重构，类型安全
- 🔧 **模块化**: 清晰的代码架构，易于扩展

## 🔧 支持的模型

### 1. 智谱 GLM Flash（推荐，免费）

| 模型 | 提供商 | 模型 ID | 说明 |
|------|-------|---------|------|
| GLM-4.5 | 智谱AI | `glm-4.5` | 智谱最新大语言模型 |
| GLM-4-Flash | 智谱AI | `glm-4-flash` | 免费高速模型 |
| GLM-4V-Flash | 智谱AI | `glm-4v-flash` | 免费视觉模型（支持图像） |

### 2. OpenCode Zen（免费，无需配置）

| 模型 | 提供商 | 模型 ID | 说明 |
|------|-------|---------|------|
| Big Pickle | OpenCode | `big-pickle` | OpenCode 旗舰免费模型 |
| GPT-5 Nano | OpenCode | `gpt-5-nano` | OpenAI 轻量级免费模型 |
| GLM-5 Free | OpenCode | `glm-5-free` | 智谱免费模型 |
| GLM-4.7 Free | OpenCode | `glm-4.7-free` | 智谱免费模型 |
| Kimi K2.5 Free | OpenCode | `kimi-k2.5-free` | 月之暗面免费模型 |
| MiniMax M2.5 Free | OpenCode | `minimax-m2.5-free` | MiniMax 免费模型 |
| MiniMax M2.1 Free | OpenCode | `minimax-m2.1-free` | MiniMax 免费模型 |
| MiMo V2 Flash Free | OpenCode | `mimo-v2-flash-free` | 小米免费模型 |
| Nemotron 3 Super Free | OpenCode | `nemotron-3-super-free` | NVIDIA 免费模型 |
| Grok Code Fast 1 | OpenCode | `grok-code` | xAI 免费编程模型 |
| Trinity Large Preview | OpenCode | `trinity-large-preview-free` | 免费预览模型 |

### 3. OpenRouter（多模型聚合，部分免费）

| 模型 | 提供商 | 模型 ID | 说明 |
|------|-------|---------|------|
| DeepSeek R1 Free | OpenRouter | `or-deepseek-r1-free` | DeepSeek 推理模型（免费） |
| DeepSeek V3 Free | OpenRouter | `or-deepseek-v3-free` | DeepSeek 对话模型（免费） |
| Llama 3.3 70B Free | OpenRouter | `or-llama-3.3-70b-free` | Meta 开源模型（免费） |
| Qwen 2.5 72B Free | OpenRouter | `or-qwen-2.5-72b-free` | 通义千问开源版（免费） |
| Gemma 3 27B Free | OpenRouter | `or-gemma-3-27b-free` | Google 开源模型（免费） |
| Mistral 7B Free | OpenRouter | `or-mistral-7b-free` | Mistral 开源模型（免费） |
| Claude 3.5 Sonnet | OpenRouter | `or-claude-3.5-sonnet` | Anthropic 旗舰模型 |
| GPT-4o | OpenRouter | `or-gpt-4o` | OpenAI 多模态模型 |
| GPT-4o Mini | OpenRouter | `or-gpt-4o-mini` | OpenAI 轻量模型 |
| Gemini 2.0 Flash | OpenRouter | `or-gemini-2.0-flash` | Google 快速模型 |

### 4. 其他模型

| 模型 | 提供商 | 模型 ID | 说明 |
|------|-------|---------|------|
| Kimi K2 | Moonshot | `kimi-k2-0905-preview` | Kimi 长文本模型 |
| QWen Plus | 阿里通义千问 | `qwen-plus` | 阿里通义千问增强模型 |
| QWen Turbo | 阿里通义千问 | `qwen-turbo` | 阿里通义千问高速模型 |
| QWen Max | 阿里通义千问 | `qwen-max` | 阿里通义千问旗舰模型 |
| Gemini 2.5 Pro | Google | `gemini-2.5-pro` | Google 最新多模态模型 |

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env`，配置你的 API 密钥：

```bash
# 智谱AI配置（推荐，免费模型）
# 获取地址: https://open.bigmodel.cn/
ZHIPU_API_KEY=你的智谱API密钥
ZHIPU_API_URL=https://open.bigmodel.cn/api/paas/v4

# OpenCode Zen 免费模型配置
# 官方文档: https://opencode.ai/docs/zen/
# 免费使用（无需配置）: 默认使用 "public" 作为 API Key
# 限制: 约 8-10 次/分钟
# 获取更好配额: https://opencode.ai/auth 登录后获取 API Key
OPENCODE_API_KEY=your_opencode_api_key_here
OPENCODE_API_URL=https://opencode.ai/zen/v1

# OpenRouter 多模型聚合配置
# 官方文档: https://openrouter.ai/docs
# 统一 API 访问 200+ 模型，部分免费
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_API_URL=https://openrouter.ai/api/v1

# Kimi配置
KIMI_API_KEY=你的Kimi API密钥
KIMI_API_URL=https://api.moonshot.cn/v1

# Google Gemini配置
GEMINI_API_KEY=你的Gemini API密钥
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/openai

# 通义千问QWen配置
QWEN_API_KEY=你的QWen API密钥
QWEN_API_URL=https://dashscope.aliyuncs.com/compatible-mode/v1

# 自定义系统提示（可选）
# CUSTOM_SYSTEM_PROMPT=无论前置语言是什么都请使用English交流。

# 服务器配置
PORT=9988
HOST=0.0.0.0

# 重试配置
MAX_RETRIES=3
RETRY_DELAY=1000
REQUEST_TIMEOUT=60000
```

### 3. 启动服务

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build
npm start
```

### 4. 配置 Xcode

在 Xcode 中添加 AI 提供商：

- **Base URL**: `http://localhost:9988` （或你配置的端口）
- **Auth Token**: `any-string-works` （任意字符串即可）

🎉 现在可以在 Xcode 中使用所有支持的 AI 模型了！

## 📋 API 密钥获取

| 提供商 | 获取地址 | 说明 |
|--------|----------|------|
| 智谱AI | https://open.bigmodel.cn/ | 注册后在控制台获取 API Key，GLM-4-Flash 免费 |
| OpenCode Zen | https://opencode.ai/auth | 免费模型无需配置，登录可获更高配额 |
| OpenRouter | https://openrouter.ai/ | 多模型聚合，部分免费模型可用 |
| Kimi | https://platform.moonshot.cn/ | 注册后在 API 管理中获取 |
| Google Gemini | https://aistudio.google.com/app/apikey | 需要 Google 账号，可能需要梯子 |
| 通义千问 | https://dashscope.console.aliyun.com/ | 阿里云账号登录，在模型服务中获取 API Key |

## 🛠️ 配置说明

### 环境变量详解

- `PORT`: 服务运行端口，默认 9988
- `HOST`: 服务绑定地址，默认 0.0.0.0（所有接口）
- `MAX_RETRIES`: API 请求最大重试次数，默认 3
- `RETRY_DELAY`: 重试延迟基数（毫秒），默认 1000
- `REQUEST_TIMEOUT`: 请求超时时间（毫秒），默认 60000
- `CUSTOM_SYSTEM_PROMPT`: 自定义系统提示，会自动插入到对话中

### 模型优先级

服务初始化时，模型按照以下顺序加载：
1. **智谱 GLM Flash**（免费、高速、推荐）
2. **OpenCode Zen**（免费、多模型、无需配置）
3. **OpenRouter**（多模型聚合、部分免费）
4. **Kimi**（长文本）
5. **通义千问 QWen**
6. **Google Gemini**

### 网络访问

服务启动后会显示多个访问地址：
- `http://localhost:9988` - 本机访问
- `http://你的局域网IP:9988` - 局域网其他设备访问

## 🔍 故障排除

### 常见问题

**Q: 服务启动失败？**
- 检查 Node.js 版本（建议 16+）
- 确认端口未被占用
- 检查 `.env` 文件配置

**Q: Xcode 连接失败？**
- 确认服务正在运行
- 检查防火墙设置
- 确认 Base URL 正确

**Q: API 请求失败？**
- 检查 API 密钥是否正确
- 确认网络连接正常
- 查看控制台日志排查具体错误

**Q: OpenCode 返回 429 错误？**
- OpenCode 免费层有速率限制（约 8-10 次/分钟）
- 访问 https://opencode.ai/auth 获取 API Key 可提高配额
- 或使用智谱 GLM-4-Flash 作为替代

**Q: 模型响应异常？**
- 检查模型 ID 是否正确
- 确认对应的 API 密钥已配置
- 查看服务日志获取详细信息

## 🏗️ 开发

### 项目结构

```
src/
├── config/          # 配置管理
│   ├── models/      # 模型配置（每个提供商一个文件）
│   └── config.ts    # 主配置管理器
├── handlers/        # 请求处理器
│   ├── base.ts      # 基础处理器
│   ├── api.ts       # API 请求处理
│   └── proxy.ts     # 代理请求处理
├── types/           # TypeScript 类型定义
├── utils/           # 工具函数
└── server.ts        # 服务器入口
```

### 添加新模型

1. 在 `src/config/models/` 创建新的提供商文件
2. 继承 `BaseModelProvider` 类
3. 在 `config.ts` 中注册新提供商
4. 更新环境变量类型定义

## 📄 更新日志

### v2.2.0 (最新)

- ✨ **新增 OpenRouter 支持**: 多模型聚合平台，支持 DeepSeek、Llama、Claude、GPT-4o 等
- ✨ **OpenRouter 免费模型**: DeepSeek R1/V3、Llama 3.3 70B、Qwen 2.5 72B 等 6 个免费模型
- 🔧 **优化模型顺序**: GLM Flash -> OpenCode -> OpenRouter -> 其他

### v2.1.0

- ✨ **新增 OpenCode Zen 支持**: 11 个免费模型，无需配置即可使用
- ✨ **新增 GLM-4-Flash 和 GLM-4V-Flash**: 智谱免费模型
- 🔧 **优化模型顺序**: GLM Flash -> OpenCode -> 其他
- 🛡️ **改进错误处理**: OpenCode 速率限制时显示友好提示
- 📝 **完善文档**: 更新 README 和 .env.example

### v2.0.2

- ��️ **修复 QWen API 错误**: 解决 QWen API 返回 400 Bad Request 的问题
- ✅ **类型安全优化**: 更新 ChatCompletionRequest 接口以支持 tools 参数

### v2.0.1

- 🛠️ **修复 QWen 实现**: 修正 QWen 模型的 provider 标识
- ⚙️ **调整模型优先级**: 将 QWen 模型优先级调整为高于 Gemini

### v2.0.0

- ✨ **重大重构**: 完全迁移到 TypeScript
- 🎯 **新增 Gemini 支持**: 使用官方 OpenAI 兼容端点
- 🏗️ **模块化架构**: 每个模型提供商独立配置文件
- 🇺🇸 **English优化**: 自动插入English交流指令
- ⚙️ **自定义提示**: 支持用户自定义系统提示

### v1.0.0

- 🎯 基础功能：支持智谱 GLM-4.5 和 Kimi 模型
- 🔄 流式响应支持
- ⚙️ 基础配置管理

## 📜 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**注意**: 请妥善保管你的 API 密钥，不要提交到版本控制系统中。
