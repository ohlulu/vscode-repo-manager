# VSCode Repository Manager

VSCode 擴展，用於簡化管理多個 Git 儲存庫。

## 功能

- 多目錄掃描：允許使用者選擇一個或多個根目錄進行掃描
- 深度掃描：支持掃描多層子目錄以發現所有 Git 儲存庫
- 儲存結果：保存掃描結果，便於快速載入和使用
- 結構化顯示：按照實際的目錄結構顯示已發現的 Git 儲存庫
- 快速開啟：支援在當前視窗或新視窗中開啟選定的儲存庫

## 需求

- VSCode ^1.74.0

## 使用方法

1. 點擊活動欄中的 Repository Manager 圖標
2. 點擊 "Add Root Folder" 按鈕選擇一個包含 Git 儲存庫的目錄
3. 瀏覽已掃描的儲存庫列表
4. 點擊或按 Enter 鍵在當前視窗中開啟選定的儲存庫
5. 按 Cmd+Enter (Mac) 或 Ctrl+Enter (Windows/Linux) 在新視窗中開啟儲存庫

## 開發

```bash
# 克隆儲存庫
git clone https://github.com/ohlulu/vscode-repo-manager.git

# 安裝依賴
npm install

# 開啟 VSCode
code .
```

## 授權

MIT
