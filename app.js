let kn = 0, mn = 0, an = 0; // Track wins, losses, and ties

// Initialize WebAssembly
Module.onRuntimeInitialized = () => {
    const hand = Module.cwrap('hand', 'number', []);
    const winlose = Module.cwrap('winlose', null, ['number', 'number']);
    
    window.play = (playerMove) => {
        const aiMove = hand();
        winlose(aiMove, playerMove);
        
        let result;
        if (aiMove === playerMove) {
            result = "あいこ";
            an++;
        } else if (
            (aiMove === 0 && playerMove === 1) || // AI: グー, Player: チョキ
            (aiMove === 1 && playerMove === 2) || // AI: チョキ, Player: パー
            (aiMove === 2 && playerMove === 0)    // AI: パー, Player: グー
        ) {
            result = "AIの勝ち";
            kn++;
        } else {
            result = "あなたの勝ち";
            mn++;
        }

        document.getElementById("ai-choice").textContent = `AIの手: ${["グー", "チョキ", "パー"][aiMove]}`;
        document.getElementById("outcome").textContent = `結果: ${result}`;
        document.getElementById("counts").textContent = `勝ち: ${kn} | 負け: ${mn} | あいこ: ${an}`;
    };
};
