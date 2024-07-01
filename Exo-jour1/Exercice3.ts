// Définition de la classe Product
class Product {
    name: string; // Propriété pour le nom du produit
    price: number; // Propriété pour le prix du produit
    quantity: number; // Propriété pour la quantité du produit en stock

    // Constructeur de la classe Product qui initialise les propriétés name, price et quantity
    constructor(name: string, price: number, quantity: number) {
        this.name = name; // Initialise le nom du produit
        this.price = price; // Initialise le prix du produit
        this.quantity = quantity; // Initialise la quantité du produit en stock
    }

    // Méthode pour vendre une certaine quantité du produit
    sell(amount: number): void {
        // Vérifie si la quantité à vendre est positive et ne dépasse pas la quantité en stock
        if (amount > 0 && amount <= this.quantity) {
            this.quantity -= amount; // Réduit la quantité en stock
            console.log(`Sold ${amount} ${this.name}(s). ${this.quantity} left.`); // Affiche le message de vente
        } else {
            console.log(`Not enough ${this.name} in stock.`); // Affiche un message si pas assez de stock
        }
    }

    // Méthode pour obtenir la valeur totale du stock du produit
    getTotalValue(): number {
        return this.price * this.quantity; // Retourne le prix multiplié par la quantité en stock
    }
}

// Création d'une liste de produits
let products: Product[] = [
    new Product("Laptop", 1000, 5), // Produit 1 : Laptop avec un prix de 1000 et une quantité de 5
    new Product("Mouse", 20, 10), // Produit 2 : Mouse avec un prix de 20 et une quantité de 10
    new Product("Keyboard", 50, 7) // Produit 3 : Keyboard avec un prix de 50 et une quantité de 7
];
console.log(products)

// Fonction pour calculer la valeur totale de tous les produits dans la liste
function calculateTotalValue(products: Product[]): number {
    let totalValue = 0; // Initialisation de la valeur totale à 0
    // Parcourt chaque produit dans la liste des produits
    for (let product of products) {
        totalValue += product.getTotalValue(); // Ajoute la valeur totale du produit à la valeur totale
    }
    return totalValue; // Retourne la valeur totale de tous les produits
}

// Test de la vente d'un produit
products[0].sell(2); // Vendre 2 laptops

// Affiche la valeur totale en stock après la vente
console.log("Total stock value:", calculateTotalValue(products)); // Affiche la valeur totale en stock
