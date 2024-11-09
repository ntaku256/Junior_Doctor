let kn = 0, mn = 0, an = 0; // Track wins, losses, and ties

// Initialize WebAssembly
Module.onRuntimeInitialized = () => {
    const hand = Module.cwrap('hand', 'number', []);
    const winlose = Module.cwrap('winlose', null, ['number', 'number']);
    
    window.play = (playerMove) => {
        const aiMove = hand();
        let next_kn,next_mn,next_an;
        next_kn,next_mn,next_an = winlose(aiMove, playerMove);
        
        let result;
        if (next_kn>kn){
            result = "AIの勝ち";
        }else if(next_mn>mn){
            result = "あなたの勝ち";
        }else if(next_an>an){
            result = "あいこ";
        }

        kn = next_kn
        mn = next_mn
        an = next_an

        document.getElementById("ai-choice").textContent = `AIの手: ${["グー", "チョキ", "パー"][aiMove]}`;
        document.getElementById("outcome").textContent = `結果: ${result}`;
        document.getElementById("counts").textContent = `勝ち: ${mn} | 負け: ${kn} | あいこ: ${an}`;
        document.getElementById("percent").textContent = `勝率: ${(mn / (mn + kn + an) * 100).toFixed(1)}%`;
    };
};
