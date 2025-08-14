// cardsData は cardsData.js でグローバルに定義されていると仮定

// ★所持カードの情報をローカルストレージに保存するためのキー★
const OWNED_CARDS_STORAGE_KEY = 'ownedCards';

let ownedCards = {}; // カード番号をキーとし、所持枚数を値とするオブジェクト

// ★HTML要素の取得★
const collectionTitleElement = document.getElementById('collectionTitle');
const completionRatesElement = document.getElementById('completionRates');
const overallCompletionCountElement = document.getElementById('overallCompletionCount');
const totalUniqueCardsElement = document.getElementById('totalUniqueCards');
const overallCompletionElement = document.getElementById('overallCompletion');
const cardCollectionDisplayArea = document.getElementById('cardCollectionDisplayArea');
const resetCollectionButton = document.getElementById('resetCollectionButton');

// ★★★ 機能追加で取得する要素 ★★★
const filterNameInput = document.getElementById('filterName');
const filterProductSelect = document.getElementById('filterProduct');
const filterTypeSelect = document.getElementById('filterType');
const resetFilterButton = document.getElementById('resetFilterButton');
const exportCsvButton = document.getElementById('exportCsvButton');
const csvFileInput = document.getElementById('csvFileInput');


// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
    loadOwnedCards();
    populateFilterOptions(); // ★フィルターの選択肢を生成
    applyFiltersAndDisplay(); // ★フィルターを適用して表示
    updateCompletionRates();

    // ★★★ イベントリスナーの登録 ★★★
    setupEventListeners();
});

/**
 * イベントリスナーをまとめて登録する関数
 */
function setupEventListeners() {
    // 所持カード枚数リセットボタン
    resetCollectionButton.addEventListener('click', () => {
        if (confirm('全ての所持カード枚数を0にリセットしてもよろしいですか？')) {
            ownedCards = {};
            saveOwnedCards();
            applyFiltersAndDisplay(); // フィルタリングされた状態で再描画
            updateCompletionRates();
            alert('全ての所持カード枚数がリセットされました。');
        }
    });

    // フィルタリング機能
    filterNameInput.addEventListener('input', applyFiltersAndDisplay);
    filterProductSelect.addEventListener('change', applyFiltersAndDisplay);
    filterTypeSelect.addEventListener('change', applyFiltersAndDisplay);

    // 絞り込みリセットボタン
    resetFilterButton.addEventListener('click', () => {
        filterNameInput.value = '';
        filterProductSelect.value = '';
        filterTypeSelect.value = '';
        applyFiltersAndDisplay();
    });

    // CSVエクスポートボタン
    exportCsvButton.addEventListener('click', exportOwnedCardsToCsv);

    // CSVインポート
    csvFileInput.addEventListener('change', importOwnedCardsFromCsv);
}


/**
 * ローカルストレージから所持カード情報を読み込む関数
 */
function loadOwnedCards() {
    try {
        const storedOwnedCards = localStorage.getItem(OWNED_CARDS_STORAGE_KEY);
        ownedCards = storedOwnedCards ? JSON.parse(storedOwnedCards) : {};
    } catch (e) {
        console.error("所持カード情報の読み込みに失敗しました:", e);
        ownedCards = {};
    }
}

/**
 * 所持カード情報をローカルストレージに保存する関数
 */
function saveOwnedCards() {
    try {
        localStorage.setItem(OWNED_CARDS_STORAGE_KEY, JSON.stringify(ownedCards));
    } catch (e) {
        console.error("所持カード情報の保存に失敗しました:", e);
        alert("所持カード情報の保存に失敗しました。ブラウザのストレージ容量を確認してください。");
    }
}

/**
 * ★★★ フィルターの選択肢を動的に生成する関数 ★★★
 */
function populateFilterOptions() {
    const products = new Set(cardsData.map(card => card.product));
    const types = new Set(cardsData.map(card => card.type));

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product;
        option.textContent = product;
        filterProductSelect.appendChild(option);
    });

    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        filterTypeSelect.appendChild(option);
    });
}

/**
 * ★★★ フィルターを適用し、カード図鑑を表示する関数 ★★★
 */
function applyFiltersAndDisplay() {
    const nameFilter = filterNameInput.value.toLowerCase().trim();
    const productFilter = filterProductSelect.value;
    const typeFilter = filterTypeSelect.value;

    const filteredCards = cardsData.filter(card => {
        const nameMatch = card.name.toLowerCase().includes(nameFilter);
        const productMatch = !productFilter || card.product === productFilter;
        const typeMatch = !typeFilter || card.type === typeFilter;
        return nameMatch && productMatch && typeMatch;
    });

    displayCardCollection(filteredCards);
}


/**
 * 所持カードリスト（カード図鑑）を表示する関数
 * @param {Array} cardsToDisplay - 表示するカードの配列
 */
function displayCardCollection(cardsToDisplay) {
    cardCollectionDisplayArea.innerHTML = '';

    if (cardsToDisplay.length === 0) {
        cardCollectionDisplayArea.innerHTML = '<p>該当するカードがありません。</p>';
        return;
    }

    // カード番号でソート
    cardsToDisplay.sort((a, b) => a.number.localeCompare(b.number));

    cardsToDisplay.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('collection-card');
        if (card.rarity) {
             const rarityClass = `rarity-${card.rarity.replace(/\+/g, 'plus')}`; // "+"を"plus"に置換
             cardElement.classList.add(rarityClass);
        }
        cardElement.dataset.cardNumber = card.number;

        const currentCount = ownedCards[card.number] || 0;
        if (currentCount === 0) {
            cardElement.classList.add('not-owned');
        }

        const cardImageWrapper = document.createElement('div');
        cardImageWrapper.classList.add('card-image-wrapper');
        const imagePath = `cards_images/${card.number}.png`;
        cardImageWrapper.style.backgroundImage = `url('${imagePath}')`;
        cardImageWrapper.onerror = function() {
            this.style.backgroundImage = `url('cards_images/default_card.png')`;
            console.warn(`画像が見つかりません (図鑑): ${imagePath}`);
        };
        cardElement.appendChild(cardImageWrapper);

        const cardName = document.createElement('p');
        cardName.classList.add('card-name');
        cardName.textContent = card.name;
        cardElement.appendChild(cardName);

        const cardNumber = document.createElement('p');
        cardNumber.classList.add('card-number');
        cardNumber.textContent = `No.: ${card.number}`;
        cardElement.appendChild(cardNumber);

        if (card.rarity) {
            const cardRarity = document.createElement('span');
            cardRarity.classList.add('card-rarity');
            cardRarity.textContent = card.rarity;
            cardElement.appendChild(cardRarity);
        }

        const ownedControls = document.createElement('div');
        ownedControls.classList.add('owned-controls');

        const minusButton = document.createElement('button');
        minusButton.classList.add('count-button', 'minus');
        minusButton.textContent = '-';
        minusButton.addEventListener('click', (e) => {
            e.stopPropagation(); // 親要素へのイベント伝播を停止
            updateOwnedCardCount(card.number, -1);
        });
        ownedControls.appendChild(minusButton);

        const countDisplay = document.createElement('span');
        countDisplay.classList.add('owned-count-display');
        countDisplay.textContent = currentCount;
        countDisplay.dataset.cardNumber = card.number;
        ownedControls.appendChild(countDisplay);

        const plusButton = document.createElement('button');
        plusButton.classList.add('count-button', 'plus');
        plusButton.textContent = '+';
        plusButton.addEventListener('click', (e) => {
            e.stopPropagation(); // 親要素へのイベント伝播を停止
            updateOwnedCardCount(card.number, 1);
        });
        ownedControls.appendChild(plusButton);

        cardElement.appendChild(ownedControls);

        cardCollectionDisplayArea.appendChild(cardElement);
    });
}

/**
 * 所持カード枚数を更新し、UIとローカルストレージに反映する関数
 * @param {string} cardNumber - 更新するカードの番号
 * @param {number} delta - 変更量 (+1 または -1)
 */
function updateOwnedCardCount(cardNumber, delta) {
    let currentCount = ownedCards[cardNumber] || 0;
    currentCount += delta;
    if (currentCount < 0) currentCount = 0;

    ownedCards[cardNumber] = currentCount;
    saveOwnedCards();

    const countDisplay = document.querySelector(`.owned-count-display[data-card-number="${cardNumber}"]`);
    if (countDisplay) {
        countDisplay.textContent = currentCount;
        const cardElement = countDisplay.closest('.collection-card');
        if (cardElement) {
            if (currentCount === 0) {
                cardElement.classList.add('not-owned');
            } else {
                cardElement.classList.remove('not-owned');
            }
        }
    }

    updateCompletionRates();
}

/**
 * コンプリート率を計算し表示する関数
 */
function updateCompletionRates() {
    const allCards = cardsData;
    let ownedUniqueCards = 0;
    Object.values(ownedCards).forEach(count => {
        if (count > 0) {
            ownedUniqueCards++;
        }
    });
    
    // 正確な所持種類数を計算
    const ownedUniqueCardCount = Object.keys(ownedCards).filter(key => ownedCards[key] > 0).length;

    const totalUniqueCardsCount = allCards.length;
    const overallRate = (totalUniqueCardsCount > 0) ? ((ownedUniqueCardCount / totalUniqueCardsCount) * 100).toFixed(2) : 0;

    overallCompletionCountElement.textContent = ownedUniqueCardCount;
    totalUniqueCardsElement.textContent = totalUniqueCardsCount;
    overallCompletionElement.textContent = `${overallRate}%`;
}


/**
 * ★★★ 所持カードデータをCSV形式でエクスポートする関数 ★★★
 */
function exportOwnedCardsToCsv() {
    if (Object.keys(ownedCards).length === 0) {
        alert('エクスポートする所持カードデータがありません。');
        return;
    }
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "cardNumber,count\r\n"; // ヘッダー

    for (const [cardNumber, count] of Object.entries(ownedCards)) {
        if (count > 0) { // 所持枚数が1枚以上のものだけエクスポート
            csvContent += `${cardNumber},${count}\r\n`;
        }
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "owned_cards.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('所持カードデータをCSVファイルとして書き出しました。');
}

/**
 * ★★★ CSVファイルから所持カードデータをインポートする関数 ★★★
 * @param {Event} event - ファイル入力のイベントオブジェクト
 */
function importOwnedCardsFromCsv(event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }

    if (!confirm('CSVファイルを読み込むと、現在の所持データは上書きされます。よろしいですか？')) {
        csvFileInput.value = ''; // ファイル選択をリセット
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        const newOwnedCards = {};
        const rows = text.split('\n').slice(1); // ヘッダー行をスキップ

        let errorCount = 0;
        rows.forEach(row => {
            if (row.trim() === '') return;
            const columns = row.trim().split(',');
            if (columns.length === 2) {
                const cardNumber = columns[0].trim();
                const count = parseInt(columns[1].trim(), 10);
                
                // cardsDataに存在するカード番号か、念のためチェック
                if (cardsData.some(card => card.number === cardNumber) && !isNaN(count)) {
                    newOwnedCards[cardNumber] = count;
                } else {
                    errorCount++;
                }
            } else {
                errorCount++;
            }
        });

        if(errorCount > 0){
            alert(`${errorCount}行の無効なデータがあったため、スキップしました。`);
        }
        
        ownedCards = newOwnedCards;
        saveOwnedCards();
        applyFiltersAndDisplay();
        updateCompletionRates();
        alert('CSVファイルから所持データを読み込みました。');
        csvFileInput.value = ''; // ファイル選択をリセット
    };
    reader.onerror = function() {
        alert('ファイルの読み込みに失敗しました。');
        csvFileInput.value = ''; // ファイル選択をリセット
    };
    reader.readAsText(file);
}