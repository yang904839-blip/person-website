import {
  Brain,
  Target,
  Layers,
  Zap,
} from 'lucide-react';
import { Principle, Milestone, Project } from './types';

export const NAV_ITEMS = [
  { label: '核心身份', href: '#identity' },
  { label: '思维体系', href: '#philosophy' },
  { label: '精选内容', href: '#content' },
  { label: '我的产品', href: '#products' },
  { label: '时间线', href: '#timeline' },
];

export const HERO_DATA = {
  title: "Code by Day, Creator by Night.",
  subtitle: "北京资深前端开发程序员 | Notion + AI 效率专家",
  description: "白天在互联网大厂写代码，晚上构建自动化变现系统。极度务实，拒绝虚荣指标，一切指向真实转化。123",
  cta: "获取我的 Notion-PARA 人生管理系统"
};

export const PRINCIPLES: Principle[] = [
  {
    title: "极度务实",
    description: "任何事情都要积极的行动起来 把主动权牢牢的掌握到自己手里面",
    quote: "你的人生需要你完全做主 需要你完全负责",
    icon: Target
  },
  {
    title: "系统化思维",
    description: "基于 PARA 体系管理人生，用框架对抗混乱。",
    quote: "只要我把安排写到 Notion 里，我就会专注把它做完。",
    icon: Layers
  },
  {
    title: "行动至上",
    description: "从过度思考转向疯狂行动，克服内耗。",
    quote: "我的脑子里变得无情和冷漠...只有两个字，行动。",
    icon: Zap
  },
  {
    title: "极简主义",
    description: "盘点现有资源，不再盲目做加法。",
    quote: "最贵的其实到最后一定是最便宜的。",
    icon: Brain
  }
];

export const TIMELINE: Milestone[] = [
  {
    year: "2018",
    title: "初入职场",
    description: "毕业进入互联网行业，面对高压快节奏，曾一度濒临崩溃边缘，开始寻求自我管理的解法。",
  },
  {
    year: "2020-2024",
    title: "技能沉淀",
    description: "深耕前端技术，同时在自我管理、Notion 系统构建上积累了大量实战经验。",
  },
  {
    year: "2025 (Now)",
    title: "双轨并行",
    description: "明确 Notion + AI 赛道。从长视频转型 3 分钟强变现短视频。目标：拿到真实付费反馈。",
    current: true
  },
  {
    year: "Future",
    title: "自由创作者",
    description: "目标月入 10W+，旅居杭州。形成「内容+产品+社群」闭环，实现时间与地点自由。",
  },
  {
    year: "碎碎念",
    title: "碎碎念",
    description: "这是一个在持续成长的频道，希望我们在自己的人生道路上都越来越精彩",
  }
];

export const PRODUCTS: Project[] = [
  {
    title: "LifeOS 个人管理系统",
    category: "Notion Template",
    description: "基于 PARA 方法论的终极人生管理后台，整合任务、知识与目标。",
    price: "¥ 39.9",
    tags: ["Notion", "Efficiency", "PARA"]
  },
  {
    title: "自媒体内容流水线",
    category: "Workflow",
    description: "从灵感到发布的标准化 SOP，专为兼职创作者设计。",
    price: "¥ 19.9",
    tags: ["SOP", "Content", "AI"]
  },
  {
    title: "前端工程师晋升指南",
    category: "Guide",
    description: "从初级到高级的硬核技术路径与软技能复盘。",
    price: "Free",
    tags: ["Career", "Frontend"]
  }
];

export const VIDEOS = [
  {
    id: "2kw-T-aoh7Q",
    title: "目標總是完不成？你缺的不是毅力，而是這個Notion高效執行系統！（內含PARA法介紹）",
    description: "深度解析 PARA 方法论，将混乱的人生整理得井井有条。这是我播放量最高的 Notion 系统实操视频，帮你解决执行力问题。"
  },
  {
    id: "XL8d6L85MSY",
    title: "Notion教程 ｜ 2025年notion快速入門指南，到底怎麽使用notion？｜ 附我的notion GTD系統免費模版",
    description: "2025年最新入门指南。从零开始掌握核心功能，附赠我个人使用的 GTD 系统模版，帮你快速上手，建立自己的效率系统。"
  },
  {
    id: "Xg8KzX7jTqs",
    title: "可能是全網最好的Notion基礎教程｜全程無廢話，無私貨，純幹貨｜10分鐘完全掌握Notion基礎用法",
    description: "全程无废话、无私货的纯干货基础教程。十分钟带你完全掌握 Notion 基础用法，享受纯净的学习体验。"
  }
];