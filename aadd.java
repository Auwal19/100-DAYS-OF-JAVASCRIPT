import java.util.Scanner;
public class aadd{
	public static void main(String[] args){
		Scanner input = new Scanner(System.in);
		
		System.out.print("Enter a number: ");
		int number = input.nextInt();
		
		while ( number >= 10 ){
			int sum = 0;
	
			while( number > 0){
				int digit = number % 10;
				sum += digit;
				number = (number - digit) / 10;
			}
			number = sum;
		}

	System.out.print(number);
			

	}
}