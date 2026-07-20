// Tools Database
const tools = [
    // Ops Tools
    {
        id: "qa-sampling",
        title: "QA 案件抽樣工具",
        url: "https://gemini.google.com/share/5278b4230716",
        category: "ops",
        theme: "theme-blue",
        tag: "抽樣",
        description: "上傳「報表」以進行評比案件抽樣。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>`
    },
    {
        id: "hero-score-collector",
        title: "Hero 分數收集與分析",
        url: "https://share.gemini.google/hZOG0rQEDlaf",
        category: "ops",
        theme: "theme-green",
        tag: "分數收集",
        description: "1.上傳所有人的「個人成績單」(非歷史總表) 以製作每月QA信件內容<br>2.匯出當月各項分數的CSV以運用於HERO Score曲線圖分析工具",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>`
    },
    {
        id: "qa-advice-integration",
        title: "QA-Advice 整合工具",
        url: "https://gemini.google.com/share/b9553e4ba55d",
        category: "ops",
        theme: "theme-purple",
        tag: "整合",
        description: "上傳所有人的「個別分數表」已將所有QA-Advice整合與匯出。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.969 0 1.371 1.24.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.178 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 10.1c-.783-.57-.38-1.81.588-1.81h4.907a1 1 0 00.95-.69l1.519-4.674z" />
        </svg>`
    },
    {
        id: "hero-score-chart",
        title: "HERO Score 曲線圖分析工具",
        url: "https://gemini.google.com/share/2ede16c8d140",
        category: "ops",
        theme: "theme-red",
        tag: "圖表分析",
        description: "上傳「QA Score歷史分數紀錄表」（非個人成績單）以製作用於QA信件的月曲線圖。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>`
    },
    {
        id: "asurion-bonus-calculator",
        title: "Asurion 員工獎金計算工具",
        url: "https://share.gemini.google/Vyivc1nwza0J",
        category: "ops",
        theme: "theme-yellow",
        tag: "獎金計算",
        description: "上傳「Incentive Report 」以製作圖表與計算員工獎金。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>`
    },
    {
        id: "call-reason-analyzer",
        title: "來電原因、裝置、TCS 分析工具",
        url: "https://gemini.google.com/share/657be58a0ed4",
        category: "ops",
        theme: "theme-cyan",
        tag: "數據分析",
        description: "上傳「報表」以進行來電原因、裝置數量分析。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>`
    },
    {
        id: "shift-scheduler",
        title: "班表自動化工具",
        url: "https://ray83810.github.io/shift_schedule/",
        category: "ops",
        theme: "theme-orange",
        tag: "自動化",
        description: "上傳「班表數據」以生產各月班表。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>`
    },
    {
        id: "it-ticket-analyzer",
        title: "IT 問題回報單分析工具",
        url: "https://gemini.google.com/share/452784d389ce",
        category: "ops",
        theme: "theme-slate",
        tag: "問題分析",
        description: "上傳「IT問題回報單」以進行分析。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>`
    },
    {
        id: "he-abnormal-analyzer",
        title: "HE 異常操作分析工具",
        url: "https://ray83810.github.io/imposter_checking/",
        category: "ops",
        theme: "theme-pink",
        tag: "異常稽核",
        description: "上傳一段時間的報表進行分析。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c3.55 0 6.75 1.83 8.682 4.636a2.001 2.001 0 010 2.728C18.75 15.17 15.55 17 12 17c-4.477 0-8.268-2.943-9.542-7z" />
        </svg>`
    },
    {
        id: "allowance-statistics",
        title: "請假、加班、津貼總表統計工具",
        url: "https://ray83810.github.io/tw_allowance/",
        category: "ops",
        theme: "theme-teal",
        tag: "津貼計算",
        description: "上傳「當月班表」與「班表相關申請表單」進行分析。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>`
    },
    {
        id: "meeting-arrangement",
        title: "課程、會議安排工具",
        url: "https://ray83810.github.io/meeting_arrangement/",
        category: "ops",
        theme: "theme-indigo",
        tag: "會議安排",
        description: "上傳班表進行分析。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>`
    },
    {
        id: "draw-lots",
        title: "抽籤工具",
        url: "https://ray83810.github.io/draw-lots/",
        category: "ops",
        theme: "theme-yellow",
        tag: "抽籤活動",
        description: "隨機抽出名單或分配任務，支援名單輸入與公平機率抽選。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>`
    },
    {
        id: "monthly-faq",
        title: "每月問題整理",
        url: "https://ray83810.github.io/monthly_user_FAQ/",
        category: "ops",
        theme: "theme-teal",
        tag: "FAQ整理",
        description: "上傳報表以進行分析整理與 FAQ 自動歸納。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>`
    },
    {
        id: "softphone-trs-analyzer",
        title: "Softphone/TRS記錄分析工具",
        url: "https://ray83810.github.io/Softphone-Trs_Tool/",
        category: "ops",
        theme: "theme-blue",
        tag: "通話分析",
        description: "上傳並分析 Softphone 與 TRS 系統通話與登入紀錄，視覺化通話時長與座席狀態。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.554-5.147-3.877-6.699-6.699l1.293-.97a1.125 1.125 0 00.417-1.173L6.763 2.15a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 3v5.25m0 0H21m-5.25 0L21 3" />
        </svg>`
    },
    {
        id: "hero-scorecard",
        title: "HERO分數、曲線、信件工具",
        url: "https://ray83810.github.io/HERO_Scorecard/",
        category: "ops",
        theme: "theme-green",
        tag: "分數信件",
        description: "上傳所有人的「個別成績單」與「所有人的分數總表」以進行分析與信件產出。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>`
    },
    // General Tools
    {
        id: "pdf-converter",
        title: "PDF 轉檔工具",
        url: "https://gemini.google.com/share/26f43ddc0bb9",
        category: "general",
        theme: "theme-indigo",
        tag: "轉檔",
        description: "上傳 PDF 檔以進行 Word/PPT 轉檔與格式解析。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>`
    },
    {
        id: "file-minimizer",
        title: "各檔案瘦身工具",
        url: "https://gemini.google.com/share/ff8b92f61f97",
        category: "general",
        theme: "theme-pink",
        tag: "壓縮",
        description: "PDF, JPG, PNG, WEBP等檔案容量縮減與無損壓縮用。",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5" />
        </svg>`
    }
];

// App State
let currentTab = 'all'; // 'all', 'ops', 'general', 'starred'
let currentLevel = 1; // 1 = Categories list, 2 = Tools grid
let searchQuery = '';
let starredTools = JSON.parse(localStorage.getItem('starred_tools') || '[]');

// DOM Elements
const level1Categories = document.getElementById('level-1-categories');
const level2Tools = document.getElementById('level-2-tools');
const controlsPanel = document.getElementById('controls-panel');
const toolsContainer = document.getElementById('tools-container');
const backBtn = document.getElementById('back-btn');
const pageSubtitle = document.getElementById('page-subtitle');
const searchInput = document.getElementById('search-input');
const tabButtons = document.querySelectorAll('.tab-btn');
const toast = document.getElementById('toast');

// Stats Elements
const statTotal = document.getElementById('stat-total');
const statOps = document.getElementById('stat-ops');
const statGeneral = document.getElementById('stat-general');
const statStarred = document.getElementById('stat-starred');

// Initialize App
function init() {
    updateStats();
    renderLevel();
    setupEventListeners();
}

// Update Statistics Counters
function updateStats() {
    statTotal.textContent = tools.length;
    statOps.textContent = tools.filter(t => t.category === 'ops').length;
    statGeneral.textContent = tools.filter(t => t.category === 'general').length;
    statStarred.textContent = starredTools.length;
}

// Toggle Starred Tool
function toggleStar(toolId, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const index = starredTools.indexOf(toolId);
    if (index === -1) {
        starredTools.push(toolId);
        showToast("已加入常用釘選");
    } else {
        starredTools.splice(index, 1);
        showToast("已移除常用釘選");
    }
    
    localStorage.setItem('starred_tools', JSON.stringify(starredTools));
    updateStats();
    
    if (currentLevel === 2) {
        renderTools();
    } else if (currentTab === 'starred') {
        // If we're in Starred tab, force-render tools
        renderTools();
    }
}

// Show Alert Toast
function showToast(message) {
    const toastText = document.getElementById('toast-text');
    toastText.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// Copy URL to Clipboard
function copyLink(url, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    navigator.clipboard.writeText(url)
        .then(() => {
            showToast("工具連結已複製到剪貼簿！");
        })
        .catch(() => {
            // Fallback for older browsers or insecure environments
            const textArea = document.createElement("textarea");
            textArea.value = url;
            textArea.style.position = "fixed";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                showToast("工具連結已複製到剪貼簿！");
            } catch (err) {
                showToast("複製失敗，請手動複製連結");
            }
            document.body.removeChild(textArea);
        });
}

// Set Category Filter Tab
function setTab(tabId) {
    currentTab = tabId;
    tabButtons.forEach(btn => {
        if (btn.dataset.tab === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (tabId === 'all') {
        pageSubtitle.textContent = "所有可用工具總覽，點選以開啟頁面";
    } else if (tabId === 'ops') {
        pageSubtitle.textContent = "營運維護與自動化輔助工具";
    } else if (tabId === 'general') {
        pageSubtitle.textContent = "通用文件與檔案瘦身轉換工具";
    } else if (tabId === 'starred') {
        pageSubtitle.textContent = "您的常用釘選工具清單";
    }

    renderTools();
}

// Transition back to Level 1
function showLevel1() {
    currentLevel = 1;
    currentTab = 'all';
    searchQuery = '';
    searchInput.value = '';
    
    // UI state
    backBtn.classList.add('hidden');
    controlsPanel.classList.add('hidden');
    level2Tools.classList.add('hidden');
    level1Categories.classList.remove('hidden');
    
    pageSubtitle.textContent = "請選擇工具類別以開始使用";
    
    // Add fade animation
    level1Categories.classList.add('fade-in');
    setTimeout(() => {
        level1Categories.classList.remove('fade-in');
    }, 400);
}

// Transition to Level 2
function showCategory(categoryId) {
    currentLevel = 2;
    
    // Set matching tab
    setTab(categoryId);
    
    // UI state
    backBtn.classList.remove('hidden');
    controlsPanel.classList.remove('hidden');
    level1Categories.classList.add('hidden');
    level2Tools.classList.remove('hidden');
    
    // Add fade animation
    level2Tools.classList.add('fade-in');
    setTimeout(() => {
        level2Tools.classList.remove('fade-in');
    }, 400);
}

// Dynamic rendering of Tool Cards
function renderTools() {
    let filteredTools = tools;
    
    // 1. Filter by category tab
    if (currentTab === 'ops') {
        filteredTools = tools.filter(t => t.category === 'ops');
    } else if (currentTab === 'general') {
        filteredTools = tools.filter(t => t.category === 'general');
    } else if (currentTab === 'starred') {
        filteredTools = tools.filter(t => starredTools.includes(t.id));
    }
    
    // 2. Filter by search query
    if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        filteredTools = filteredTools.filter(t => 
            t.title.toLowerCase().includes(query) || 
            t.description.toLowerCase().includes(query) ||
            t.tag.toLowerCase().includes(query)
        );
    }
    
    // Render Empty State if no tools found
    if (filteredTools.length === 0) {
        toolsContainer.innerHTML = `
            <div class="empty-state fade-in col-span-full">
                <div class="empty-state-icon">🔍</div>
                <h3>找不到任何符合的工具</h3>
                <p>請嘗試使用其他關鍵字搜尋，或切換至不同工具分類。</p>
            </div>
        `;
        return;
    }
    
    // Order: Starred items first if we are in 'all', 'ops', or 'general' tabs
    if (currentTab !== 'starred') {
        filteredTools.sort((a, b) => {
            const aStarred = starredTools.includes(a.id) ? 1 : 0;
            const bStarred = starredTools.includes(b.id) ? 1 : 0;
            return bStarred - aStarred; // Starred first
        });
    }
    
    // Map tool properties to DOM structure
    toolsContainer.innerHTML = filteredTools.map((tool, idx) => {
        const isStarred = starredTools.includes(tool.id);
        const starClass = isStarred ? 'starred' : '';
        
        return `
            <div class="tool-card ${tool.theme} fade-in" style="animation-delay: ${idx * 0.05}s">
                <div class="card-header-row">
                    <div class="tool-icon-wrapper">
                        ${tool.icon}
                    </div>
                    <button class="star-btn ${starClass}" onclick="toggleStar('${tool.id}', event)" title="${isStarred ? '取消釘選' : '釘選至常用'}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="${isStarred ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499c.151-.312.592-.312.743 0l3.007 6.208 6.761.986c.343.05.48.474.232.718l-4.893 4.77 1.154 6.732c.059.345-.304.609-.611.446L12 20.08l-6.03 3.193c-.307.163-.67-.101-.611-.446l1.154-6.732-4.893-4.77c-.248-.244-.11-.669.232-.718l6.761-.986 3.007-6.208z" />
                        </svg>
                    </button>
                </div>
                
                <div class="tool-details">
                    <div>
                        <div class="tool-title-row">
                            <h3 class="tool-title">${tool.title}</h3>
                            <span class="tag-badge">${tool.tag}</span>
                        </div>
                        <p class="description-text">${tool.description}</p>
                    </div>
                    
                    <div class="tool-card-footer">
                        <button class="tool-action-btn action-icon-only" onclick="copyLink('${tool.url}', event)" title="複製連結">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4.5 h-4.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                            </svg>
                        </button>
                        <a class="tool-action-btn primary-btn" href="${tool.url}" target="_blank" rel="noopener noreferrer">
                            開啟工具
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Choose whether to render Level 1 or Level 2 based on initial routing (defaults to Level 1)
function renderLevel() {
    if (currentLevel === 1) {
        showLevel1();
    } else {
        showCategory(currentTab);
    }
}

// Bind event listeners to UI components
function setupEventListeners() {
    // Search input change
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderTools();
    });

    // Back button
    backBtn.addEventListener('click', showLevel1);

    // Tab buttons
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setTab(btn.dataset.tab);
        });
    });
}

// Run init on load
document.addEventListener('DOMContentLoaded', init);
