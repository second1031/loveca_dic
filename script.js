// cardsData は cardsData.js でグローバルに定義されていると仮定

// ★所持カードの情報をローカルストレージに保存するためのキー★
const OWNED_CARDS_STORAGE_KEY = 'ownedCards';

let ownedCards = {}; // カード番号をキーとし、所持枚数を値とするオブジェクト

// ★HTML要素の取得（必要なものだけ残す）★
const collectionTitleElement = document.getElementById('collectionTitle');
const completionRatesElement = document.getElementById('completionRates');
const overallCompletionCountElement = document.getElementById('overallCompletionCount'); // 追加
const totalUniqueCardsElement = document.getElementById('totalUniqueCards'); // 追加
const overallCompletionElement = document.getElementById('overallCompletion');
const cardCollectionDisplayArea = document.getElementById('cardCollectionDisplayArea');
const resetCollectionButton = document.getElementById('resetCollectionButton'); // 新しいリセットボタン

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
    loadOwnedCards(); // 所持カードを読み込む
    displayCardCollection(); // カード図鑑を表示（引数なしで全カード対象）
    updateCompletionRates(); // コンプリート率を更新
});

// 所持カード枚数リセットボタンのイベントリスナー
resetCollectionButton.addEventListener('click', () => {
    if (confirm('全ての所持カード枚数を0にリセットしてもよろしいですか？')) {
        ownedCards = {}; // 所持カードを空にする
        saveOwnedCards(); // ローカルストレージに保存
        displayCardCollection(); // 図鑑を再描画して、0になったことを反映
        updateCompletionRates(); // コンプリート率を更新
        alert('全ての所持カード枚数がリセットされました。');
    }
});


/**
 * ローカルストレージから所持カード情報を読み込む関数
 */
function loadOwnedCards() {
    try {
        const storedOwnedCards = localStorage.getItem(OWNED_CARDS_STORAGE_KEY);
        ownedCards = storedOwnedCards ? JSON.parse(storedOwnedCards) : {};
    } catch (e) {
        console.error("所持カード情報の読み込みに失敗しました:", e);
        ownedCards = {}; // エラー時は初期化
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
 * 所持カードリスト（カード図鑑）を表示する関数
 * このバージョンでは、常に全てのカードを表示します。
 */
function displayCardCollection() {
    cardCollectionDisplayArea.innerHTML = ''; // 既存の表示をクリア

    // cardsData.js に定義されている全てのカードを対象にする
    const allCards = cardsData;

    if (allCards.length === 0) {
        cardCollectionDisplayArea.innerHTML = '<p>表示するカードがありません。</p>';
        return;
    }

    // カード番号でソート（任意）
    allCards.sort((a, b) => a.number.localeCompare(b.number));

    allCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('collection-card');
        // レアリティクラスを追加
        if (card.rarity) {
            cardElement.classList.add(`rarity-${card.rarity.replace('＋', 'plus')}`);
        }
        cardElement.dataset.cardNumber = card.number; // カード番号をカスタムデータ属性に保存

        // 所持枚数に応じてグレーアウト
        const currentCount = ownedCards[card.number] || 0;
        if (currentCount === 0) {
            cardElement.classList.add('not-owned');
        }

        // カード画像
        const cardImageWrapper = document.createElement('div');
        cardImageWrapper.classList.add('card-image-wrapper');
        const imagePath = `cards_images/${card.number}.png`; // 相対パス
        cardImageWrapper.style.backgroundImage = `url('${imagePath}')`;
        cardImageWrapper.onerror = function() { // Fallback for background-image
            this.style.backgroundImage = `url('cards_images/default_card.png')`; // デフォルト画像があれば
            console.warn(`画像が見つかりません (図鑑): ${imagePath}`);
        };
        cardElement.appendChild(cardImageWrapper);

        // カード名
        const cardName = document.createElement('p');
        cardName.classList.add('card-name');
        cardName.textContent = card.name;
        cardElement.appendChild(cardName);

        // カード番号
        const cardNumber = document.createElement('p');
        cardNumber.classList.add('card-number');
        cardNumber.textContent = `No.: ${card.number}`;
        cardElement.appendChild(cardNumber);

        // レアリティ表示
        if (card.rarity) {
            const cardRarity = document.createElement('span');
            cardRarity.classList.add('card-rarity');
            cardRarity.textContent = card.rarity;
            cardElement.appendChild(cardRarity);
        }

        // 所持枚数コントロール
        const ownedControls = document.createElement('div');
        ownedControls.classList.add('owned-controls');

        const minusButton = document.createElement('button');
        minusButton.classList.add('count-button', 'minus');
        minusButton.textContent = '-';
        minusButton.addEventListener('click', () => updateOwnedCardCount(card.number, -1));
        ownedControls.appendChild(minusButton);

        const countDisplay = document.createElement('span');
        countDisplay.classList.add('owned-count-display');
        countDisplay.textContent = currentCount;
        countDisplay.dataset.cardNumber = card.number; // 更新用にカード番号を保持
        ownedControls.appendChild(countDisplay);

        const plusButton = document.createElement('button');
        plusButton.classList.add('count-button', 'plus');
        plusButton.textContent = '+';
        plusButton.addEventListener('click', () => updateOwnedCardCount(card.number, 1));
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
    if (currentCount < 0) currentCount = 0; // 0未満にはならないように制限

    ownedCards[cardNumber] = currentCount;
    saveOwnedCards(); // ローカルストレージに保存

    // UIを更新
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

    updateCompletionRates(); // コンプリート率を更新
}

/**
 * コンプリート率を計算し表示する関数
 */
function updateCompletionRates() {
    const allCards = cardsData; // 全てのカードが対象

    let ownedUniqueCards = 0;
    allCards.forEach(card => {
        if (ownedCards[card.number] && ownedCards[card.number] > 0) {
            ownedUniqueCards++;
        }
    });

    const totalUniqueCardsCount = allCards.length;
    const overallRate = (totalUniqueCardsCount > 0) ? ((ownedUniqueCards / totalUniqueCardsCount) * 100).toFixed(2) : 0;

    overallCompletionCountElement.textContent = ownedUniqueCards; // 所持枚数を更新
    totalUniqueCardsElement.textContent = totalUniqueCardsCount; // 全カード数を更新
    overallCompletionElement.textContent = `${overallRate}%`; // コンプリート率を更新
}

// ----------------------------------------------------
// 不要になった旧開封シミュレーター関連の関数や定数は全て削除
// 例:
// const rarityWeights = { ... };
// const packCardCounts = { ... };
// const packPrices = { ... };
// const packGuaranteedRarities = { ... };
// function openPackSimulation() { ... }
// function loadAndDisplayHistory() { ... }
// function clearAllHistory() { ... }
// ----------------------------------------------------