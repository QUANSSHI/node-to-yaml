# Node to YAML Converter

一个简单而强大的 Node.js 数据结构转 YAML 格式的转换工具。

## 功能特点

- 支持将 JavaScript 对象转换为 YAML 格式
- 支持复杂的嵌套数据结构
- 易于使用和集成
- 保持数据结构的完整性

## 安装

\\\ash
npm install node-to-yaml
\\\

## 使用方法

\\\javascript
const nodeToYaml = require('node-to-yaml');

// 示例数据
const data = {
  name: 'example',
  version: '1.0.0',
  config: {
    port: 3000,
    host: 'localhost'
  }
};

// 转换为 YAML
const yaml = nodeToYaml.convert(data);
\\\

## 贡献

欢迎提交 Issues 和 Pull Requests 来帮助改进这个项目。

## 许可证

MIT License
