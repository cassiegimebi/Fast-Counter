// Pokémon Boxes Data
const defaultInventory = [
  { id: '1', name: 'ニンジャスピナー', count: 0, countUnsealed: 0, image: 'https://www.pokemon-card.com/products/2026/images/m4pkg.jpg' },
  { id: '2', name: 'ムニキロゼロ', count: 0, countUnsealed: 0, image: 'https://www.pokemon-card.com/products/2025/images/m3.jpg' },
  { id: '4', name: 'MEGAドリーム', count: 0, countUnsealed: 0, image: 'https://www.pokemon-card.com/products/2025/images/m2a.jpg' },
  { id: '5', name: 'インフェルノX', count: 0, countUnsealed: 0, image: 'https://www.pokemon-card.com/products/2025/images/M2.jpg' },
  { id: '6', name: 'メガシンフォニヤ', count: 0, countUnsealed: 0, image: 'https://www.pokemon-card.com/products/2025/images/M1S.jpg' },
  { id: '7', name: 'メガブレイブ', count: 0, countUnsealed: 0, image: 'https://www.pokemon-card.com/products/2025/images/M1L.jpg' },
  { id: '9', name: 'ホワイトフレア', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/White-Flare-Booster-box-2025-300x300.jpeg' },
  { id: '991', name: '拡張ホワイトフレア', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '992', name: '拡張ブラックボルト', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '10', name: 'ブラックボルト', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Black-Bolt-Booster-Box-–-2025-Japanese-Edition-300x300.jpeg' },
  { id: '12', name: 'ロケット団の栄光', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Glory-of-Team-Rocket-Booster-Box-Japanese-Pokemon-Card-300x300.jpeg' },
  { id: '13', name: '熱風のアリーナ', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Heat-Wave-Arena-12-boxes【With-PROMO】-300x300.jpeg' },
  { id: '15', name: 'バトルパートナーズ', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Battle-Partners-Scarlet-Violet-Expansion-Pack-–-【With-PROMO】-300x300.png' },
  { id: '16', name: 'テラスタルフェス', count: 0, countUnsealed: 0, image: 'https://www.pokemon-card.com/products/2024/images/sv8a.jpg' },
  { id: '18', name: '超電ブレイカー', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Super-Electric-Breaker-Booster-Box-Scarlet-Violet-Expansion-Pack-300x300.jpeg' },
  { id: '17', name: '楽園ドラゴーナ', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Japanese-Paradise-Dragona-Booster-Box-300x300.jpeg' },
  { id: '55', name: 'ステラミラクル', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Stellar-Miracle-Booster-Box-Japanese-Scarlet-Violet-Expansion-Pack-300x300.png' },
  { id: '65', name: 'ナイトワンダラー', count: 0, countUnsealed: 0, image: 'https://www.pokemon-card.com/products/2024/images/sv6a.jpg' },
  { id: '993', name: '変幻の仮面', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '25', name: 'クリムゾンヘイズ', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Crimson-Haze-Japanese-Booster-Box-300x300.jpeg' },
  { id: '30', name: 'サイバージャッジ', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '31', name: 'ワイルドフォース', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Wild-Force-Booster-Box-–-Pokemon-Card-Game-Scarlet-Violet-Expansion-Pack-300x300.jpeg' },
  { id: '40', name: 'シャイニートレジャー', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/SV4a-Shiny-Treasure-ex-booster-box-Japanese-Pokemon-Card-300x300.webp' },
  { id: '51', name: '古代の咆哮', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Ancient-Roar-Booster-Box-Pokemon-Card-Game-Scarlet-Violet-Expansion-Pack-300x300.jpeg' },
  { id: '52', name: '未来の一閃', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Future-Flash-Booster-Box-Pokemon-Card-Game-Scarlet-Violet-Expansion-Pack-300x300.jpeg' },
  { id: '54', name: 'レイジングサーフ', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Raging-Surf-Booster-Box-Pokemon-Card-Game-Scarlet-Violet-Expansion-Pack-300x300.jpeg' },
  { id: '49', name: '黒炎の支配者', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Ruler-Of-Black-Flame-Japanese-Booster-Box-300x300.png' },
  { id: '44', name: '151', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/151-Japanese-Booster-Box-300x300.png' },
  { id: '29', name: 'クレイバースト', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Pokemon-Card-Game-Scarlet-Violet-Expansion-Pack-–-Clay-Burst-Box-300x300.png' },
  { id: '32', name: 'スノーハザード', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Pokemon-Card-Game-–-Snow-Hazard-Booster-Box-1-300x300.png' },
  { id: '33', name: 'トリプレットビート', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '28', name: 'バイオレット', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '39', name: 'スカーレット', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Pokemon-Card-Game-Scarlet-ex-Booster-Box-300x300.png' },
  { id: '42', name: 'Vstarユニバース', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/VSTAR-Universe-Box-Japanese-Pokemon-Booster-Box-300x300.png' },
  { id: '994', name: 'パラダイストリガー', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '23', name: '白熱のアルカナ', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '37', name: 'ロストアビス', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '27', name: 'ポケモンGO', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Pokemon-Go-Expansion-Pack-–-Pokemon-Card-Japanese-300x300.png' },
  { id: '61', name: 'ダークファンタズマ', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '24', name: 'タイムゲイザー', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Time-Gazer-Booster-Box-–-Pokemon-Card-Japanese-300x300.jpeg' },
  { id: '53', name: 'スペースジャグラー', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Space-Juggler-Booster-Box-–-Pokemon-Card-Japanese-300x300.jpeg' },
  { id: '26', name: 'バトルリージョン', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '995', name: 'スターバース', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '57', name: 'vmax クライマックス', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '35', name: '25thアニバーサリーコレクション', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '38', name: 'フュージョンアーツ', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '34', name: '摩天パーフェク卜', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '45', name: '蒼空ストリーム', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '47', name: 'イーブイヒーローズ', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Eevee-Heroes-Booster-Box-–-S6a-300x300.jpg' },
  { id: '19', name: '漆黑のガイスト', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Jet-Black-Spirit-s6K-Expansion-Pack-–-Pokemon-Card-Japanese-300x300.jpeg' },
  { id: '20', name: '白銀のランス', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Lance-Box-–-Pokemon-TCG-Japanese-Booster-Box-300x300.png' },
  { id: '3', name: '双璧のファイター', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '996', name: '一撃マスター', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '14', name: '連撃マスター', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '41', name: 'シャイニースターV', count: 0, countUnsealed: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Shiny-Star-V-Expansion-Box-–-Pokemon-Card-Japanese-300x300.jpeg' },
  { id: '50', name: '伝説の鼓動', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '8', name: 'ムゲンゾーン', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '21', name: 'ソードV', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '48', name: 'GXタッグオールスターズ', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '36', name: 'オルタージェネシス', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '46', name: 'ドリームリーグ', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '11', name: 'リミックスバウト', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '60', name: 'スカイレジェンド', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '43', name: 'ナイトユニゾン', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '63', name: 'GXウルトラシャイニー', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '22', name: '裂空のカリスマ', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '58', name: 'ウルトラフォース', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '64', name: 'ウルトラサン', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '62', name: 'GXバトルブースト', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '59', name: 'XY・XY BREAKシリーズ The best of XY LIMIT OVER COLLECTION', count: 0, countUnsealed: 0, image: 'https://www.pokemon-card.com/products/xy/best_of_xy/images/20170330/SM_XY_pillow_1221.jpg' },
  { id: '56', name: 'リミットオーバーコレクション ライバルズ', count: 0, countUnsealed: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=YGO\nRivals' }

];

let inventory = [];
let currentMode = 'sealed'; // 'sealed' | 'unsealed'

const i18n = {
  en: {
    titleMain: "Inventory",
    titleSealed: "Inventory (Sealed)",
    titleUnsealed: "Inventory (Unsealed)",
    proceedUnsealed: "Proceed to Unsealed",
    resetAll: "Reset All",
    finishCounting: "Finish Counting",
    titleSummary: "Summary",
    exportCsv: "Export CSV",
    exportExcel: "Export Excel",
    stock: "Stock",
    total: "Total",
    confirmReset: "Are you sure you want to reset all counts to 0?",
    searchPlaceholder: "Search items...",
    headerItemName: "Item Name",
    headerSealedCount: "Sealed Count",
    headerUnsealedCount: "Unsealed Count",
    headerCount: "Count",
    headerTimestamp: "Timestamp",
    labelSealed: "Sealed",
    labelUnsealed: "Unsealed"
  },
  ja: {
    titleMain: "在庫管理",
    titleSealed: "在庫管理 (シュリンクあり)",
    titleUnsealed: "在庫管理 (シュリンクなし)",
    proceedUnsealed: "シュリンクなしへ進む",
    resetAll: "すべてリセット",
    finishCounting: "完了",
    titleSummary: "確認",
    exportCsv: "CSV出力",
    exportExcel: "Excel出力",
    stock: "在庫数",
    total: "合計",
    confirmReset: "すべてのカウントを0にリセットしてもよろしいですか？",
    searchPlaceholder: "アイテムを検索...",
    headerItemName: "アイテム名",
    headerSealedCount: "在庫数 (シュリンクあり)",
    headerUnsealedCount: "在庫数 (シュリンクなし)",
    headerCount: "在庫数",
    headerTimestamp: "日時",
    labelSealed: "シュリンクあり",
    labelUnsealed: "シュリンクなし"
  }
};

let currentLang = localStorage.getItem('inventoryLang') || 'en';

function applyLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang][key]) {
      el.textContent = i18n[currentLang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[currentLang][key]) {
      el.placeholder = i18n[currentLang][key];
    }
  });
  const btnLang = document.getElementById('btn-lang');
  if (btnLang) {
    btnLang.textContent = currentLang === 'en' ? 'EN/JA' : 'JA/EN';
  }
}

// DOM Elements
const mainScreen = document.getElementById('main-screen');
const summaryScreen = document.getElementById('summary-screen');
const inventoryListEl = document.getElementById('inventory-list');
const summaryListEl = document.getElementById('summary-list');
const searchInput = document.getElementById('search-input');
const titleMain = document.getElementById('title-main');
const btnMainBack = document.getElementById('btn-main-back');

const btnReset = document.getElementById('btn-reset');
const btnFinish = document.getElementById('btn-finish');
const btnBack = document.getElementById('btn-back');
const btnExportCsv = document.getElementById('btn-export-csv');
const btnExportExcel = document.getElementById('btn-export-excel');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    renderMainList();
  });
}

// Initialize
function init() {
  const saved = localStorage.getItem('inventoryCounterData');
  if (saved) {
    try {
      inventory = JSON.parse(saved);
      if (inventory.length !== defaultInventory.length) {
        inventory = JSON.parse(JSON.stringify(defaultInventory));
        save();
      } else {
        let changed = false;
        inventory.forEach(i => {
          if (typeof i.countUnsealed === 'undefined') {
            i.countUnsealed = 0;
            changed = true;
          }
        });
        if (changed) save();
      }
    } catch (e) {
      inventory = JSON.parse(JSON.stringify(defaultInventory));
    }
  } else {
    inventory = JSON.parse(JSON.stringify(defaultInventory));
  }
  applyLanguage();
  renderMainList();
}

function save() {
  localStorage.setItem('inventoryCounterData', JSON.stringify(inventory));
}

// Renderers
function renderMainList() {
  inventoryListEl.innerHTML = '';
  const term = searchInput ? searchInput.value.toLowerCase() : '';

  if (currentMode === 'sealed') {
    titleMain.setAttribute('data-i18n', 'titleSealed');
    btnFinish.setAttribute('data-i18n', 'proceedUnsealed');
    if (btnMainBack) btnMainBack.classList.add('hidden');
  } else {
    titleMain.setAttribute('data-i18n', 'titleUnsealed');
    btnFinish.setAttribute('data-i18n', 'finishCounting');
    if (btnMainBack) btnMainBack.classList.remove('hidden');
  }
  applyLanguage();

  inventory.forEach(item => {
    if (term && !item.name.toLowerCase().includes(term)) return;

    const currentCount = currentMode === 'sealed' ? item.count : item.countUnsealed;

    const card = document.createElement('div');
    card.className = `item-card ${currentCount === 0 ? 'zero-count' : ''}`;
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy">
      <div class="item-details">
        <div class="item-name">${item.name}</div>
        <div class="item-count-label">${i18n[currentLang].stock}</div>
      </div>
      <div class="counter-controls">
        <button class="control-btn minus-btn" data-id="${item.id}" ${currentCount <= 0 ? 'disabled' : ''}>-</button>
        <input type="number" class="count-input" data-id="${item.id}" value="${currentCount}" min="0">
        <button class="control-btn plus-btn" data-id="${item.id}">+</button>
      </div>
    `;
    inventoryListEl.appendChild(card);
  });
}

function renderSummaryList() {
  summaryListEl.innerHTML = '';
  let totalSealed = 0;
  let totalUnsealed = 0;

  inventory.forEach(item => {
    totalSealed += item.count;
    totalUnsealed += item.countUnsealed;

    if (item.count === 0 && item.countUnsealed === 0) return;

    const div = document.createElement('div');
    div.className = `summary-item`;
    div.style.flexDirection = 'column';
    div.style.alignItems = 'flex-start';
    div.style.gap = '8px';

    div.innerHTML = `
      <div style="font-weight: 600;">${item.name}</div>
      <div style="display: flex; gap: 16px; width: 100%; color: var(--text-muted); font-size: 0.9rem;">
        <div>${i18n[currentLang].labelSealed}: <strong style="color:var(--text-main);">${item.count}</strong></div>
        <div>${i18n[currentLang].labelUnsealed}: <strong style="color:var(--text-main);">${item.countUnsealed}</strong></div>
      </div>
    `;
    summaryListEl.appendChild(div);
  });

  // Total Row
  const totalDiv = document.createElement('div');
  totalDiv.className = 'summary-item';
  totalDiv.style.marginTop = '8px';
  totalDiv.style.borderTop = '2px solid var(--border)';
  totalDiv.style.background = 'transparent';
  totalDiv.style.boxShadow = 'none';
  totalDiv.style.flexDirection = 'column';
  totalDiv.style.alignItems = 'flex-start';
  totalDiv.style.gap = '8px';
  totalDiv.innerHTML = `
    <div style="font-weight: 600;">${i18n[currentLang].total}</div>
    <div style="display: flex; gap: 16px; width: 100%;">
      <div>${i18n[currentLang].labelSealed}: <strong>${totalSealed}</strong></div>
      <div>${i18n[currentLang].labelUnsealed}: <strong>${totalUnsealed}</strong></div>
    </div>
  `;
  summaryListEl.appendChild(totalDiv);
}

// Event Listeners for Delegation
inventoryListEl.addEventListener('click', (e) => {
  if (e.target.classList.contains('plus-btn')) {
    const id = e.target.getAttribute('data-id');
    updateCount(id, 1);
  } else if (e.target.classList.contains('minus-btn')) {
    const id = e.target.getAttribute('data-id');
    updateCount(id, -1);
  }
});

inventoryListEl.addEventListener('input', (e) => {
  if (e.target.classList.contains('count-input')) {
    const id = e.target.getAttribute('data-id');
    let val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < 0) val = 0;
    setCount(id, val);
  }
});

function updateCount(id, delta) {
  const item = inventory.find(i => i.id === id);
  if (item) {
    const currentCount = currentMode === 'sealed' ? item.count : item.countUnsealed;
    const newCount = Math.max(0, currentCount + delta);
    if (currentCount !== newCount) {
      if (currentMode === 'sealed') item.count = newCount;
      else item.countUnsealed = newCount;
      save();
      renderMainList();
    }
  }
}

function setCount(id, val) {
  const item = inventory.find(i => i.id === id);
  if (item) {
    const currentCount = currentMode === 'sealed' ? item.count : item.countUnsealed;
    if (currentCount !== val) {
      if (currentMode === 'sealed') item.count = val;
      else item.countUnsealed = val;
      save();
      renderMainList();
    }
  }
}

// Navigation & Actions
btnReset.addEventListener('click', () => {
  if (confirm(i18n[currentLang].confirmReset)) {
    inventory.forEach(i => {
      i.count = 0;
      i.countUnsealed = 0;
    });
    save();
    renderMainList();
  }
});

btnFinish.addEventListener('click', () => {
  if (currentMode === 'sealed') {
    currentMode = 'unsealed';
    window.scrollTo(0, 0);
    if (searchInput) searchInput.value = ''; // clear search array
    renderMainList();
  } else {
    renderSummaryList();
    mainScreen.classList.add('hidden');
    summaryScreen.classList.remove('hidden');
    window.scrollTo(0, 0);
  }
});

if (btnMainBack) {
  btnMainBack.addEventListener('click', () => {
    if (currentMode === 'unsealed') {
      currentMode = 'sealed';
      window.scrollTo(0, 0);
      renderMainList();
    }
  });
}

btnBack.addEventListener('click', () => {
  summaryScreen.classList.add('hidden');
  mainScreen.classList.remove('hidden');
});

// CSV Export
btnExportCsv.addEventListener('click', () => {
  const t = i18n[currentLang];
  const headers = [t.headerItemName, t.headerSealedCount, t.headerUnsealedCount, t.headerTimestamp];
  const now = new Date();
  
  // Create JST string
  const jstTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const datestamp = jstTime.toISOString().replace('T', ' ').substring(0, 19);

  const csvRows = [headers.join(',')];

  inventory.forEach(item => {
    // Escape quotes in name
    const safeName = '"' + item.name.replace(/"/g, '""') + '"';
    csvRows.push([safeName, item.count, item.countUnsealed, datestamp].join(','));
  });

  const csvString = csvRows.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);

  // Format filename with date
  const dateStr = jstTime.toISOString().split('T')[0];
  link.setAttribute('download', `inventory_summary_${dateStr}.csv`);

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Excel Export
btnExportExcel.addEventListener('click', () => {
  const now = new Date();
  const jstTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const datestamp = jstTime.toISOString().replace('T', ' ').substring(0, 19);
  const t = i18n[currentLang];

  // Prepare data for SheetJS
  const dataSealed = inventory.map(item => ({
    [t.headerItemName]: item.name,
    [t.headerCount]: item.count,
    [t.headerTimestamp]: datestamp
  }));

  const dataUnsealed = inventory.map(item => ({
    [t.headerItemName]: item.name,
    [t.headerCount]: item.countUnsealed,
    [t.headerTimestamp]: datestamp
  }));

  // Create a new workbook and worksheets
  const wb = XLSX.utils.book_new();
  const wsSealed = XLSX.utils.json_to_sheet(dataSealed);
  const wsUnsealed = XLSX.utils.json_to_sheet(dataUnsealed);

  // Add worksheets to workbook
  XLSX.utils.book_append_sheet(wb, wsSealed, "Sealed (シュリンクあり)");
  XLSX.utils.book_append_sheet(wb, wsUnsealed, "Unsealed (シュリンクなし)");

  // Format filename with date
  const fileDateStr = jstTime.toISOString().split('T')[0];
  XLSX.writeFile(wb, `inventory_summary_${fileDateStr}.xlsx`);
});

const btnLang = document.getElementById('btn-lang');
if (btnLang) {
  btnLang.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ja' : 'en';
    localStorage.setItem('inventoryLang', currentLang);
    applyLanguage();
    renderMainList();
    if (!summaryScreen.classList.contains('hidden')) {
      renderSummaryList();
    }
  });
}

// Start the app
init();
