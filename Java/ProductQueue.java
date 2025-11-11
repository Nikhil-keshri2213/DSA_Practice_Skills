import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.stream.Collectors;

public class ProductQueue {
    public static void main(String[] args) {
        Queue<Product> queue = new LinkedList<>();
        Product p = new Product();
        p.setId(1);
        p.setName("Tshirt");
        p.setAmount(500);
        p.setCategory("Men");

        Product p1 = new Product();
        p1.setId(2);
        p1.setName("Kurti");
        p1.setAmount(699);
        p1.setCategory("Women");

        Product p2 = new Product();
        p2.setId(3);
        p2.setName("Shirt");
        p2.setAmount(300);
        p2.setCategory("Men");

        queue.add(p);
        queue.add(p1);
        queue.add(p2);

        // Print the entire queue
        System.out.println("Queue: " + queue);

        // Filter products based on category
        List<Product> filteredProducts = filterByCategory(queue, "Women");
        System.out.println("Filtered Products (Category: Women): " + filteredProducts);
    }

    // Method to filter products by category
    public static List<Product> filterByCategory(Queue<Product> queue, String category) {
        return queue.stream().filter(p -> p.getCategory().equalsIgnoreCase(category)).collect(Collectors.toList());
    }
}
