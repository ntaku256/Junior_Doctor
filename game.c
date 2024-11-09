#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define ALPHA 0.03  // 調整用の定数

// グローバル変数
int kn = 0, mn = 0, an = 0;  // 勝ち、負け、あいこのカウンタ
float r_GU = 1.0, r_CYOKI = 1.0, r_PA = 1.0;  // グー、チョキ、パーの確率調整用の変数

// 乱数生成関数
float frand(void) {
    return (float)rand() / RAND_MAX;
}

// AIの手を決める関数
int hand() {
    float gu, cyoki, pa;
    gu = r_GU * frand();
    cyoki = r_CYOKI * frand();
    pa = r_PA * frand();

    if (gu > cyoki) {
        if (gu > pa) return 0;  // グー
        else return 2;          // パー
    } else {
        if (cyoki > pa) return 1;  // チョキ
        else return 2;             // パー
    }
}

// 勝敗を判断して確率を調整する関数
void winlose(int AI_t, int G_t) {
    if (AI_t == 0) { // AIがグー
        if (G_t == 1) { r_GU += ALPHA * r_GU; kn++; }       // 勝ち
        else if (G_t == 2) { r_GU -= ALPHA * r_GU; mn++; }  // 負け
        else an++;                                          // あいこ
    }
    else if (AI_t == 1) { // AIがチョキ
        if (G_t == 2) { r_CYOKI += ALPHA * r_CYOKI; kn++; }
        else if (G_t == 0) { r_CYOKI -= ALPHA * r_CYOKI; mn++; }
        else an++;
    }
    else if (AI_t == 2) { // AIがパー
        if (G_t == 0) { r_PA += ALPHA * r_PA; kn++; }
        else if (G_t == 1) { r_PA -= ALPHA * r_PA; mn++; }
        else an++;
    }
}
