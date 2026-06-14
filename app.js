// Pokémon Boxes Data
const defaultInventory = [
  { id: '140', name: 'アビスアイ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/5b371f8b-95d5-4ec4-8465-d4da6e8909fa.webp?size=xl' },
  { id: '1', name: 'ニンジャスピナー', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/244b2a87-ebe1-41bb-a812-6daa8aaddc80.webp?size=l' },
  { id: '2', name: 'ムニキスゼロ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20260126035830-0.webp?size=l' },
  { id: '4', name: 'MEGAドリーム', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251128091038-0.webp?size=l' },
  { id: '5', name: 'インフェルノX', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20250926055512-0.webp?size=l' },
  { id: '6', name: 'メガシンフォニア', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20250805020822-5.webp?size=l' },
  { id: '7', name: 'メガブレイブ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20250805020822-2.webp?size=l' },
  { id: '9', name: 'ホワイトフレア', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022075913-0.webp?size=l' },
  { id: '991', name: 'DXホワイトフレア', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251211074651-0.webp?size=l' },
  { id: '992', name: 'DXブラックボルト', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251226022933-0.webp?size=l' },
  { id: '10', name: 'ブラックボルト', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022073859-0.webp?size=l' },
  { id: '12', name: 'ロケット団の栄光', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022074548-0.webp?size=l' },
  { id: '13', name: '熱風のアリーナ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022080309-0.webp?size=l' },
  { id: '15', name: 'バトルパートナーズ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022075717-0.webp?size=l' },
  { id: '16', name: 'テラスタルフェス', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20250813062440-0.webp?size=l' },
  { id: '18', name: '超電ブレイカー', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022073625-0.webp?size=l' },
  { id: '17', name: '楽園ドラゴーナ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251029024852-0.webp?size=l' },
  { id: '55', name: 'ステラミラクル', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022080114-0.webp?size=l' },
  { id: '65', name: 'ナイトワンダラー', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251023022522-0.webp?size=l' },
  { id: '993', name: '変幻の仮面', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251023022714-0.webp?size=l' },
  { id: '25', name: 'クリムゾンヘイズ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022074403-0.webp?size=l' },
  { id: '30', name: 'サイバージャッジ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022073745-0.webp?size=l' },
  { id: '31', name: 'ワイルドフォース', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022081228-0.webp?size=l' },
  { id: '40', name: 'シャイニートレジャーex', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022074908-0.webp?size=l' },
  { id: '51', name: '古代の咆哮', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251029025022-0.webp?size=l' },
  { id: '52', name: '未来の一閃', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022081321-0.webp?size=l' },
  { id: '54', name: 'レイジングサーフ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251112072120-0.webp?size=l' },
  { id: '49', name: '黒炎の支配者', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022080406-0.webp?size=l' },
  { id: '44', name: 'ポケモンカード151', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022073446-0.webp?size=l' },
  { id: '29', name: 'クレイバースト', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022081020-0.webp?size=l' },
  { id: '32', name: 'スノーハザード', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251209025030-0.webp?size=l' },
  { id: '33', name: 'トリプレットビート', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022074319-0.webp?size=l' },
  { id: '28', name: 'バイオレット', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022083149-0.webp?size=l' },
  { id: '39', name: 'スカーレット', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022081542-0.webp?size=l' },
  { id: '42', name: 'Vstarユニバース', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251112072422-0.webp?size=l' },
  { id: '994', name: 'パラダイムトリガー', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022081426-0.webp?size=l' },
  { id: '23', name: '白熱のアルカナ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251117092523-0.webp?size=l' },
  { id: '37', name: 'ロストアビス', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022073527-0.webp?size=l' },
  { id: '27', name: 'ポケモンGO', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20220620101014-0.webp?size=l' },
  { id: '61', name: 'ダークファンタズマ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251127033758-0.webp?size=l' },
  { id: '24', name: 'タイムゲイザー', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251117092617-0.webp?size=l' },
  { id: '53', name: 'スペースジャグラー', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251126011830-0.webp?size=l' },
  { id: '26', name: 'バトルリージョン', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251210063350-0.webp?size=l' },
  { id: '995', name: 'スターバース', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251209093105-0.webp?size=l' },
  { id: '57', name: 'vmax クライマックス', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251112071849-0.webp?size=l' },
  { id: '35', name: '25thアニバーサリーコレクション', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251127034422-0.webp?size=l' },
  { id: '38', name: 'フュージョンアーツ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251031060422-0.webp?size=l' },
  { id: '34', name: '摩天パーフェク卜', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251210063219-0.webp?size=l' },
  { id: '45', name: '蒼空ストリーム', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251120094943-0.webp?size=l' },
  { id: '47', name: 'イーブイヒーローズ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022074044-0.webp?size=l' },
  { id: '19', name: '漆黑のガイスト', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251117054429-0.webp?size=l' },
  { id: '20', name: '白銀のランス', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251031060150-0.webp?size=l' },
  { id: '3', name: '双璧のファイター', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251112072611-0.webp?size=l' },
  { id: '996', name: '一撃マスター', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251212074227-0.webp?size=l' },
  { id: '14', name: '連撃マスター', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251210063640-0.webp?size=l' },
  { id: '41', name: 'シャイニースターV', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/pkmn-1.webp?size=l' },
  { id: '998', name: '仰天のボルテッカー', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251022074817-0.webp?size=l' },
  { id: '50', name: '伝説の鼓動', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251031055943-0.webp?size=l' },
  { id: '8', name: 'ムゲンゾーン', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20221003101353-0.webp?size=l' },
  { id: '21', name: 'ソードV', count: 0, countUnsealed: 0, image: 'https://torecacamp-pokemon.com/cdn/shop/files/aHp4DayAOXqgS3QK4WHrjMq6TpNoVZPiUemGv2lq_700x.webp?v=1776937194' },
  { id: '48', name: 'GXタッグオールスターズ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20230821083148-0.webp?size=l' },
  { id: '36', name: 'オルタージェネシス', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251112072336-0.webp?size=l' },
  { id: '46', name: 'ドリームリーグ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251210063504-0.webp?size=l' },
  { id: '11', name: 'リミックスバウト', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251212091329-0.webp?size=l' },
  { id: '60', name: 'スカイレジェンド', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251212061911-0.webp?size=l' },
  { id: '110', name: 'ダブルブレイズ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251112072730-0.webp?size=l' },
  { id: '43', name: 'ナイトユニゾン', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251212062416-0.webp?size=l' },
  { id: '63', name: 'GXウルトラシャイニー', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/pkmn-19.webp?size=l' },
  { id: '22', name: '裂空のカリスマ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251212062235-0.webp?size=l' },
  { id: '58', name: 'ウルトラフォース', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20230112081907-0.webp?size=l' },
  { id: '64', name: 'ウルトラサン', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20251212075011-0.webp?size=l' },
  { id: '62', name: 'GXバトルブースト', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20220709061542-0.webp?size=l' },
  { id: '128', name: 'Limit Over Collection: The Rivals YGO　ザ ライバルズ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/4e8ece47-7ba6-4d3d-a7a0-2921e4ff9313.webp?size=l' },
  { id: '129', name: 'Limit Over Collection: The Heroes YGO　ザ ヒーローズ', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20260227120725-0.webp?size=l' },
  { id: '123', name: 'EGGHEAD CRISIS EB04', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20260130074117-0.webp?size=l' },
  { id: '124', name: '神の島の冒険 OP15', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20260227120811-0.webp?size=l' },
  { id: '125', name: '受け継がれる意志 OP13', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20250822063040-1.webp?size=l' },
  { id: '126', name: '神速の拳 OP11', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20250227074343-0.webp?size=l' },
  { id: '141', name: '新時代の主役 OP05', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20240303014653-0.webp?size=l' },
  { id: '142', name: '決戦の刻 OP16', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/86a6c903-d359-4905-bb20-2f5e64635db0.webp?size=l' },
  { id: '143', name: '二つの伝説 OP08', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20240523061358-0.webp?size=l' },
  { id: '144', name: '頂上決戦 OP02', count: 0, countUnsealed: 0, image: 'https://shop.r10s.jp/speedwagon/cabinet/toy/imgrc0122320287.jpg' },
  { id: '145', name: '双璧の覇者 OP06', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20240303014929-0.webp?size=l' },
  { id: '146', name: 'ROMANCE DAWN OP01', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20240520075219-0.webp?size=l' },
  { id: '127', name: '新たなる皇帝 OP09', count: 0, countUnsealed: 0, image: 'https://cdn.snkrdunk.com/upload_bg_removed/20240828053218-1.webp?size=l' }


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
const btnAudit = document.getElementById('btn-audit');

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

  // recore Audit
btnAudit.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx,.xls,.csv';
    input.onchange = e => {
      const file = e.target.files[0];
      if (file) {  
        auditRecore(file);
       }
    };
    input.click();
});

async function auditRecore(file) {

    alert(
        "Selected: " +
        file.name
    );

}

// Start the app
init();
