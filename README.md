# 农夫庄园 (Farmer's Manor)

优质农副产品电商平台移动应用

## 开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 移动应用打包

### 初始化 Capacitor

```bash
# 初始化 Capacitor 配置
npm run cap:init
```

### Android 应用

```bash
# 添加 Android 平台
npm run cap:add:android

# 构建 Web 应用并同步到 Android
npm run build:mobile

# 打开 Android Studio 项目
npm run cap:open:android
```

在 Android Studio 中，您可以构建和运行应用，或者生成 APK 文件。

### iOS 应用

```bash
# 添加 iOS 平台
npm run cap:add:ios

# 构建 Web 应用并同步到 iOS
npm run build:mobile

# 打开 Xcode 项目
npm run cap:open:ios
```

在 Xcode 中，您可以构建和运行应用，或者生成 IPA 文件。

## 注意事项

- Android 应用需要 Android Studio
- iOS 应用需要 Xcode 和 macOS
- 生成的应用包含完整的 Web 应用功能