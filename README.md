Peiniata Calculator 🍕
A powerful web app that solves the common office problem of fairly splitting group food orders, especially for services like efood that involve complex discounts and fees.

➡️ Live Demo: https://giannislar.github.io/PeiniataCalculator/

✨ Features
Tiered Discount Logic: Automatically applies "Peiniata" discounts based on the total order value (€6/€2, €15/€5, €20/€7, €30/€10).

Fair Cost Splitting: Intelligently splits the discount proportionally based on each person's spending, while splitting flat service fees equally among all participants.

Dynamic Item Entry: Add an unlimited number of people and their corresponding item costs to a calculation.

Name Management: Features a pre-populated, alphabetically sorted list of names in a dropdown for quick entry. This list is fully editable via a management panel, and all changes are saved locally.

Persistent History: Automatically saves your last 20 calculations to your browser's local storage. You can view or reload any past order with a single click.

Light & Dark Mode: Includes a sleek, floating toggle switch to alternate between light and dark themes. The user's preference is saved for future visits.

Fully Offline: Built as a single HTML file with embedded SVG icons, making it reliable anywhere, with or without an internet connection.

🛠️ Built With
This project was built from scratch using only the fundamentals of the web:

HTML5

CSS3 (with modern features like CSS Variables for theming)

Vanilla JavaScript (no libraries or frameworks)

Browser's LocalStorage API for all data persistence, ensuring no external database is needed.

🚀 How to Use
Open the App: Navigate to the live demo.

Add Items: For each person in the order, enter their name and the total cost of their items, then click "Προσθήκη +".

Enter Service Fee: In the second card, enter the total service fee, if any.

Calculate: Click the green "Υπολογισμός Κόστους" button.

View Results: The app will display a detailed table with the final amount each person needs to pay.

You can also manage the saved names list, view past orders in the history, and switch between light and dark themes using the buttons provided.
