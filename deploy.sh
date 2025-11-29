#!/bin/bash

# 自动化部署脚本
# 使用方法: ./deploy.sh "commit message"

set -e

echo "🚀 开始自动化部署流程..."

# 1. 构建项目
echo "📦 构建项目..."
npm run build

# 2. 提交 dist 到 gh-pages
echo "📤 部署到 GitHub Pages..."
git push origin `git subtree split --prefix dist master`:gh-pages --force

echo "✅ 部署完成！"
echo "🌐 访问: https://yang904839-blip.github.io/person-website/"
