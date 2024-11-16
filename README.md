# Junior_Doctor

### キーボードから数値を入力
```C
#include <stdio.h>

int main() 
{
    int a;

    printf("データを入力しなさい\n");
    scanf("%d", &a);

    printf("入力した値は%dです\n", a);

    return 0;
}

```

<br>

### 勉強時間が２時間以上ならば、「ゲームを1時間する」と表示するプログラム
```C
#include <stdio.h>

int main() 
{
    int h;

    printf("勉強時間を入力\n");
    scanf("%d", &h);

    if (h >= 2) {
        printf("ゲームを1時間\n");
    }

    return 0;
}

```

<br>

### テストの点数が60点以上ならば、「合格」を表示し、​そうでなければ、「不合格」を表示するプログラム​
```C
#include <stdio.h>

int main() 
{
    int t;

    printf("点数を入力\n");
    scanf("%d", &t);

    if (t >= 60) {
        printf("合格\n");
    } 
    else {
        printf("不合格\n");
    }

    return 0;
}

```

<br>

### for文​-1
```C
#include <stdio.h>

int main() 
{
    int i;

    for (i = 1; i <= 10; i++) {
        printf("こんにちは\n");
    }

    return 0;
}

```

<br>

### for文​-2
```C
#include <stdio.h>

int main() 
{
    int i;

    for (i = 1; i <= 10; i++) {
        printf("%d\n", i);
    }

    return 0;
}

```

<br>

### while文
```C
#include <stdio.h>

int main() 
{
    int n;

    printf("整数nを入力してください ---> ");
    scanf("%d", &n);

    while (n > 0) {
        printf("入力した数は%dです。\n", n);
        printf("整数nを入力してください ---> ");
        scanf("%d", &n);
    }

    printf("終了します\n");

    return 0;
}


```

<br>

### AIエキスパートシステム（性格診断）
```C
#include <stdio.h>

int main() {
    int h, s, r;

    printf("人の話を素直に聞くか? Yes=1, No=2\n");
    scanf("%d", &h);

    if (h == 1) {
        printf("寂しがり屋ですか? Yes=1, No=2\n");
        scanf("%d", &s);

        printf("診断結果：");
        if (s == 1) {
            printf("ハムスター\n");
        } else {
            printf("犬\n");
        }
    } else {
        printf("リーダシップを持つか? Yes=1, No=2\n");
        scanf("%d", &r);

        printf("診断結果：");
        if (r == 1) {
            printf("ゴリラ\n");
        } else {
            printf("猫\n");
        }
    }

    return 0;
}

```

<br>

### G-1
```C
#include<stdio.h> 
#define GU 0
#define CYOKI 1
#define PA 2

int main(){
      int G_t;

      printf("ゴリラの手を入力しなさい：GU =0  CYO =1  PA=2 \n");

      scanf("%d", &G_t);

      printf("ゴリラの手は%dです\n",G_t);

      return 0;
}
```

<br>


### G-2
```C
#include<stdio.h> 
#define GU 0
#define CYOKI 1
#define PA 2
int  main(){
    int AI_t,G_t, i;
    printf("AIの手を入力しなさい：GU =0  CYOKI =1  PA=2 \n");
    scanf("%d", &AI_t);
    printf("ゴリラの手を入力しなさい：GU =0  CYOKI =1  PA=2 \n");
    scanf("%d", &G_t);
    if(AI_t ==0 && G_t==1 || AI_t==1 && G_t==2 || AI_t==2 && G_t==0)
        printf("\nAI=%dです、ゴリラ=%dです。AI勝\n",AI_t,G_t);
    else if(AI_t==1 && G_t==0 || AI_t==2 && G_t==1  || AI_t==0 && G_t==2)
        printf("\nAIの手は%dです、ゴリラの手は%dです。ゴリラ勝\n",AI_t,G_t);
    else
        printf("\nあいこ\n\n");
    return 0; 
}

```

<br>

### G-3
```C
#include<stdio.h> 

int  main(){
    int AI_t,G_t;
    printf("ゴリラの手を入力しなさい：GU =0  CYOKI =1  PA=2 \n");
    scanf("%d", &G_t);
    if(G_t ==0){
        AI_t=  2;
        printf("AIの手は%dです、ゴリラの手は%dです。AI勝\n",AI_t,G_t); }
    if(G_t ==1){
        AI_t=  0;
        printf("AIの手は%dです、ゴリラの手は%dです。AI勝\n",AI_t,G_t); }
    if(G_t ==2){
        AI_t=  1;
        printf("AIの手は%dです、ゴリラの手は%dです。AI勝\n",AI_t,G_t); }
    return 0; 
}

```

<br>

### G-4
```C
#include<stdio.h> 
#include<stdlib.h> 
#include<time.h> 
#define ALPHA 0.03 

int kn=0,mn=0,an=0; 
float r_GU=1.0, r_CYOKI=1.0, r_PA=1.0; 

float frand(void){ 
    return (float)rand()/RAND_MAX;
} 

int hand(){ 
    float gu, cyoki, pa; 

    gu=r_GU*frand(); 
    cyoki=r_CYOKI*frand(); 
    pa=r_PA*frand(); 

 
    if(gu>cyoki){ 
        if(gu>pa) return 0; 
        else return 2; 
    } 
    else{ 
        if(cyoki>pa)return 1; 
        else return 2; 
    } 
} 

 

void winlose(int AI_t, int G_t){ 
    if(AI_t==0){ 
        if(G_t==1){ 
            r_GU=r_GU+ALPHA*r_GU; 
            kn++; 
        } 
        else if(G_t==2){ 
            r_GU=r_GU-ALPHA*r_GU; 
            mn++; 
        } 
        else 
            an++; 
    } 
    else if(AI_t==1){ 
        if(G_t==2){ 
            r_CYOKI=r_CYOKI+ALPHA*r_CYOKI; 
            kn++; 
        } 
        else if (G_t==0){ 
            r_CYOKI=r_CYOKI-ALPHA*r_CYOKI; 
            mn++; 
        } 
        else 
            an++; 
    } 
    else if(AI_t==2){
	    if(G_t==0){
		    r_PA=r_PA+ALPHA*r_PA;
		    kn++;
	   }
	   else if (G_t==1){
		    r_PA=r_PA-ALPHA*r_PA;
		    mn++;
	   }
	   else
	        an++;
	}
} 

  

int main(void){
    int i,n=100;
    int AI_t,G_t;
                
    srand((unsigned)time(NULL));
        
    printf("対戦を開始します\n\n");
    while(n!=9){
        
        printf("終了したい場合、９を入力しなさい\n");

        AI_t=hand( );

        printf("ゴリラの手を入力しなさい\n");
	    scanf("%d",&G_t);	
	    if(G_t==9){
	        n=9;
        }
	    if(G_t<0 || G_t>2){
	        printf("エラーです\n");
	    }

        winlose(AI_t,G_t);

        printf("AIの手＝%d  ゴリラの手＝%d\n",AI_t, G_t);
	    printf("r_GUの割合＝%6.3f, r_CYOKIの割合=%6.3f, r_PAの割合=%6.3f\n\n",  r_GU,r_CYOKI,r_PA);
    }	
    
    printf("AIは勝った回数は%d回です\n",kn);
	printf("AIは負けた回数は%d回です\n",mn);
	printf("あいこの回数は%d回です\n\n",an);
	return 0;
}

```

<br><br>

# じゃんけんゲーム

URL: https://ntaku256.github.io/Junior_Doctor/

<br>

![](https://github.com/ntaku256/AI/blob/main/Source/%E3%81%98%E3%82%83%E3%82%93%E3%81%91%E3%82%93%E3%82%B2%E3%83%BC%E3%83%A01.png)

<br>

![](https://github.com/ntaku256/AI/blob/main/Source/%E3%81%98%E3%82%83%E3%82%93%E3%81%91%E3%82%93%E3%82%B2%E3%83%BC%E3%83%A02.png)

<br>

![](https://github.com/ntaku256/AI/blob/main/Source/%E3%81%98%E3%82%83%E3%82%93%E3%81%91%E3%82%93%E3%82%B2%E3%83%BC%E3%83%A03.png)

<br>

![](https://github.com/ntaku256/AI/blob/main/Source/%E3%81%98%E3%82%83%E3%82%93%E3%81%91%E3%82%93%E3%82%B2%E3%83%BC%E3%83%A04.png)

<br>

![](https://github.com/ntaku256/AI/blob/main/Source/%E3%81%98%E3%82%83%E3%82%93%E3%81%91%E3%82%93%E3%82%B2%E3%83%BC%E3%83%A05.png)
