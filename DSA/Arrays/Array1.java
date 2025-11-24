
import java.util.ArrayList;

public class Array1{
    public static void main(String[] args) {
        Array1 arrayExample = new Array1();
        arrayExample.removeDuplicates();
    }

    public void basics(){
        int[] arr = new int[5];
        arr[0] = 1;
        arr[1] = 2;
        arr[2] = 3;
        arr[3] = 4;
        arr[4] = 5;

        System.out.println("First element: " + arr[0]);
        System.out.println("Second element: " + arr[1]);
        System.out.println("Length of the array: " + arr.length);
        
        int n = arr.length;

        System.out.println("Last elements:" + arr[n-1]);
        System.out.println("Array elements:");

        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }

        int[] numbers = {10, 20, 30, 40, 50};
        System.out.println("Array elements:");
        
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }

    public void getAlternates(){
        int arr[] = {10, 20, 30, 40, 50};

        for(int i=0; i<arr.length; i++){
            if(i%2 == 1) continue;
            System.err.println("Print Odd One: " +arr[i]);
        }
    }

    public void Leaders(){
        int arr[] = {16,18,2,4,7,3};
        ArrayList<Integer> res = new ArrayList<>();
        for(int i=0; i<arr.length; i++){
            int j;
            for(j=i+1; j<arr.length; j++){
                if(arr[i]<arr[j]){
                    break;
                }
            }
            if(j == arr.length){
                res.add(arr[i]);
            }
        }

        for (Integer r : res) {
            System.err.println("Leaders: "+r);
        }
    }

    public void isSorted(){
        int arr[] = {10, 30, 20, 12, 33, 48};
        boolean res = false;

        for(int i=0; i<arr.length-1; i++){
            if(arr[i] < arr[i++]) res = true;
        }
        System.err.println("Array is Sorted ? : "+ res);
    }

    public void removeDuplicates(){
        int arr[] = {1,2,2,2,2,4,4,4,6,6,7};
        int n = arr.length;
        if (n <= 1)
            return;

        int idx = 1;
        for(int i=1; i<arr.length; i++){
            if(arr[i] != arr[i-1]){
                arr[idx++] = arr[i];
            }
        }

        System.err.println("New Fresh Array:");
        for (int i=0; i<idx; i++) {
            System.err.print(arr[i]+ ",");
        }
    }
}