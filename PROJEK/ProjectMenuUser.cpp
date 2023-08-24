#include<stdio.h>


void clearScreen(){
	for(int i =0;i< 100;i++){
		printf("\n\n\n");
	}
}

void listUsers( int index, char nama[][1000]){
		printf("=============================================\n");
		printf("|   Nama      | Umur |   gender  |   Agama  |\n");
		printf("=============================================\n");
		if(index > 0){
			for(int i =0;i < index; i++){
				printf("%d. ", i+1);
				printf("%s\n", nama[i]);
			}
		}else{
			printf("          No Data");
		}
		printf("\n\nMenu Users\n");
		printf("1. Add User\n");
		printf("2. Delete User\n");
}

int main(){
	char input;
	char nama[1000][1000];
	int umur[1000];
	char gender[1000][1000];
	char agama[1000][1000];
	int index = 0;

	do{
		clearScreen();
		listUsers(index, nama);
		
		do{
			printf("Mau Input apa [1 | 2 | x untuk keluar]: ");
			scanf("%c", &input);
			getchar();
		}while(input != '1' && input != '2' && input != 'x');
		
		switch(input){
			case '1':
				printf("Add User Menu\n");
				printf("Input nama: \n");
				scanf("%[^\n]", nama[index++]);
				getchar();
				break;
			case '2':
				break;
			default:
				printf("close program");
				break;
		}
		
	}while(input != 'x');
	
	return 0;
}
