// Default Japanese Pokémon Boxes Data (Images point to simple placeholders so you can edit them later)
const defaultInventory = [
  { id: '1', name: 'ニンジャスピナー', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '2', name: 'ムニキロゼロ', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '3', name: '双璧のファイター', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '4', name: 'MEGAドリーム', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '5', name: 'インフェルノX', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '6', name: 'メガシンフォニヤ', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '7', name: 'メガブレイブ', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '8', name: 'ムゲンゾーン', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '9', name: 'ホワイトフレア', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/White-Flare-Booster-box-2025-300x300.jpeg' },
  { id: '10', name: 'ブラックボルト', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Black-Bolt-Booster-Box-–-2025-Japanese-Edition-300x300.jpeg' },
  { id: '11', name: 'リミックスバウト', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '12', name: 'ロケット団の栄光', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Glory-of-Team-Rocket-Booster-Box-Japanese-Pokemon-Card-300x300.jpeg' },
  { id: '13', name: '熱風のアリーナ', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Heat-Wave-Arena-12-boxes【With-PROMO】-300x300.jpeg' },
  { id: '14', name: '連撃マスター', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '15', name: 'バトルパートナーズ', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Battle-Partners-Scarlet-Violet-Expansion-Pack-–-【With-PROMO】-300x300.png' },
  { id: '16', name: 'テラスタルフェス', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '17', name: '楽園ドラゴーナ', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Japanese-Paradise-Dragona-Booster-Box-300x300.jpeg' },
  { id: '18', name: '超電ブレイカー', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Super-Electric-Breaker-Booster-Box-Scarlet-Violet-Expansion-Pack-300x300.jpeg' },
  { id: '19', name: '漆黑のガイスト', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Jet-Black-Spirit-s6K-Expansion-Pack-–-Pokemon-Card-Japanese-300x300.jpeg' },
  { id: '20', name: '白銀のランス', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Lance-Box-–-Pokemon-TCG-Japanese-Booster-Box-300x300.png' },
  { id: '21', name: 'ソードV', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '22', name: '裂空のカリスマ', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '23', name: '白熱のアルカナ', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '24', name: 'タイムゲイザー', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Time-Gazer-Booster-Box-–-Pokemon-Card-Japanese-300x300.jpeg' },
  { id: '25', name: 'クリムゾンヘイズ', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Crimson-Haze-Japanese-Booster-Box-300x300.jpeg' },
  { id: '26', name: 'バトルリージョン', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '27', name: 'ポケモンGO', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Pokemon-Go-Expansion-Pack-–-Pokemon-Card-Japanese-300x300.png' },
  { id: '28', name: 'バイオレット', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '29', name: 'クレイバースト', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Pokemon-Card-Game-Scarlet-Violet-Expansion-Pack-–-Clay-Burst-Box-300x300.png' },
  { id: '30', name: 'サイバージャッジ', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '31', name: 'ワイルドフォース', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Wild-Force-Booster-Box-–-Pokemon-Card-Game-Scarlet-Violet-Expansion-Pack-300x300.jpeg' },
  { id: '32', name: 'スノーハザード', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Pokemon-Card-Game-–-Snow-Hazard-Booster-Box-1-300x300.png' },
  { id: '33', name: 'トリプレットビート', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '34', name: '摩天パーフェク卜', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '35', name: '25thアニバーサリーコレクション', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '36', name: 'オルタージェネシス', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '37', name: 'ロストアビス', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '38', name: 'フュージョンアーツ', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '39', name: 'スカーレット', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Pokemon-Card-Game-Scarlet-ex-Booster-Box-300x300.png' },
  { id: '40', name: 'シャイニートレジャー', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/SV4a-Shiny-Treasure-ex-booster-box-Japanese-Pokemon-Card-300x300.webp' },
  { id: '41', name: 'シャイニースターV', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Shiny-Star-V-Expansion-Box-–-Pokemon-Card-Japanese-300x300.jpeg' },
  { id: '42', name: 'Vstarユニバース', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/VSTAR-Universe-Box-Japanese-Pokemon-Booster-Box-300x300.png' },
  { id: '43', name: 'ナイトユニゾン', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '44', name: '151', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/151-Japanese-Booster-Box-300x300.png' },
  { id: '45', name: '蒼空ストリーム', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '46', name: 'ドリームリーグ', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '47', name: 'イーブイヒーローズ', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Eevee-Heroes-Booster-Box-–-S6a-300x300.jpg' },
  { id: '48', name: 'GXタッグオールスターズ', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '49', name: '黒炎の支配者', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Ruler-Of-Black-Flame-Japanese-Booster-Box-300x300.png' },
  { id: '50', name: '伝説の鼓動', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=Box' },
  { id: '51', name: '古代の咆哮', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Ancient-Roar-Booster-Box-Pokemon-Card-Game-Scarlet-Violet-Expansion-Pack-300x300.jpeg' },
  { id: '52', name: '未来の一閃', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Future-Flash-Booster-Box-Pokemon-Card-Game-Scarlet-Violet-Expansion-Pack-300x300.jpeg' },
  { id: '53', name: 'スペースジャグラー', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Space-Juggler-Booster-Box-–-Pokemon-Card-Japanese-300x300.jpeg' },
  { id: '54', name: 'レイジングサーフ', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Raging-Surf-Booster-Box-Pokemon-Card-Game-Scarlet-Violet-Expansion-Pack-300x300.jpeg' },
  { id: '55', name: 'ステラミラクル', count: 0, image: 'https://pokemoncenterjapan.com/wp-content/uploads/2025/07/Stellar-Miracle-Booster-Box-Japanese-Scarlet-Violet-Expansion-Pack-300x300.png' },
  { id: '56', name: 'Yu-Gi-Oh Quick Rivals (遊戯王)', count: 0, image: 'https://placehold.co/150x150/fdfdfd/333333?text=YGO\nRivals' }
];

let inventory = [];

const i18n = {
  en: {
    titleMain: "Inventory",
    resetAll: "Reset All",
    finishCounting: "Finish Counting",
    titleSummary: "Summary",
    exportCsv: "Export CSV",
    exportExcel: "Export Excel",
    stock: "Stock",
    total: "Total",
    confirmReset: "Are you sure you want to reset all counts to 0?"
  },
  ja: {
    titleMain: "在庫管理",
    resetAll: "すべてリセット",
    finishCounting: "カウントを完了",
    titleSummary: "確認",
    exportCsv: "CSV出力",
    exportExcel: "Excel出力",
    stock: "在庫数",
    total: "合計",
    confirmReset: "すべてのカウントを0にリセットしてもよろしいですか？"
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

const btnReset = document.getElementById('btn-reset');
const btnFinish = document.getElementById('btn-finish');
const btnBack = document.getElementById('btn-back');
const btnExportCsv = document.getElementById('btn-export-csv');
const btnExportExcel = document.getElementById('btn-export-excel');

// Initialize
function init() {
  const saved = localStorage.getItem('inventoryCounterData');
  if (saved) {
    try {
      inventory = JSON.parse(saved);
      if (inventory.length !== defaultInventory.length) {
        inventory = [...defaultInventory];
        save();
      }
    } catch (e) {
      inventory = [...defaultInventory];
    }
  } else {
    inventory = [...defaultInventory];
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
  inventory.forEach(item => {
    const card = document.createElement('div');
    card.className = `item-card ${item.count === 0 ? 'zero-count' : ''}`;
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy">
      <div class="item-details">
        <div class="item-name">${item.name}</div>
        <div class="item-count-label">${i18n[currentLang].stock}</div>
      </div>
      <div class="counter-controls">
        <button class="control-btn minus-btn" data-id="${item.id}" ${item.count <= 0 ? 'disabled' : ''}>-</button>
        <input type="number" class="count-input" data-id="${item.id}" value="${item.count}" min="0">
        <button class="control-btn plus-btn" data-id="${item.id}">+</button>
      </div>
    `;
    inventoryListEl.appendChild(card);
  });
}

function renderSummaryList() {
  summaryListEl.innerHTML = '';
  let totalCount = 0;
  
  inventory.forEach(item => {
    totalCount += item.count;
    const div = document.createElement('div');
    div.className = `summary-item ${item.count === 0 ? 'zero' : ''}`;
    div.innerHTML = `
      <span class="summary-name">${item.name}</span>
      <span class="summary-count">${item.count}</span>
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
  totalDiv.innerHTML = `
    <span class="summary-name"><strong>${i18n[currentLang].total}</strong></span>
    <span class="summary-count"><strong>${totalCount}</strong></span>
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
    const newCount = Math.max(0, item.count + delta);
    if (item.count !== newCount) {
      item.count = newCount;
      save();
      renderMainList();
    }
  }
}

function setCount(id, val) {
  const item = inventory.find(i => i.id === id);
  if (item && item.count !== val) {
    item.count = val;
    save();
    renderMainList();
  }
}

// Navigation & Actions
btnReset.addEventListener('click', () => {
  if(confirm(i18n[currentLang].confirmReset)) {
    inventory.forEach(i => i.count = 0);
    save();
    renderMainList();
  }
});

btnFinish.addEventListener('click', () => {
  renderSummaryList();
  mainScreen.classList.add('hidden');
  summaryScreen.classList.remove('hidden');
  window.scrollTo(0, 0);
});

btnBack.addEventListener('click', () => {
  summaryScreen.classList.add('hidden');
  mainScreen.classList.remove('hidden');
});

// CSV Export
btnExportCsv.addEventListener('click', () => {
  const headers = ['Item Name', 'Count', 'Timestamp'];
  const now = new Date();
  
  // Create ISO string or readable format
  const datestamp = now.toISOString().replace('T', ' ').substring(0, 19);

  const csvRows = [headers.join(',')];
  
  inventory.forEach(item => {
    // Escape quotes in name
    const safeName = '"' + item.name.replace(/"/g, '""') + '"';
    csvRows.push([safeName, item.count, datestamp].join(','));
  });

  const csvString = csvRows.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  
  // Format filename with date
  const dateStr = now.toISOString().split('T')[0];
  link.setAttribute('download', `inventory_summary_${dateStr}.csv`);
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Excel Export
btnExportExcel.addEventListener('click', () => {
  const now = new Date();
  const dateStr = now.toISOString().replace('T', ' ').substring(0, 19);

  // Prepare data for SheetJS
  const data = inventory.map(item => ({
    'Item Name': item.name,
    'Count': item.count,
    'Timestamp': dateStr
  }));

  // Create a new workbook and worksheet
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(data);

  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(wb, ws, "Inventory");

  // Format filename with date
  const fileDateStr = now.toISOString().split('T')[0];
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
