You have a shop with some items in its inventory. The shop owner has asked that you create an interface to edit that inventory. The data you should start with is in a gist (link in this sentence). You must create all of the pieces of this application (HTML, Sass, JS) and should submit your GitHub repository for the project.

You should only need one Angular module and controller
Be sure to bootstrap your module to the <html> tag
Be sure to bind your controller to an element in the HTML document (what would be appropriate?)
Your controller should have a tax property on its scope set to 5.75%
Display a table of the item data from the controller's scope
Place the data linked above in your controller (for now)
Don't forget your table header
Only display the name, price, quantity and color
Make sure the price includes tax and any discount! (Discounts are in dollars, not percent.)
If the item has a discount, show this icon next to the price: discount icon
Be sure to have all the proper HTML...
your page should have a <header>, <footer>, and <main> most likely... anything else?
Don't worry about the styles too much, but make sure your table is easy to read:
with zebra striped rows; and
centered in the page with 80% width.
EPIC Mode

Internationalize your shop - have a controller property (and UI button) for US / UK. When set to "UK" your shop should:

Convert prices to GBP (just use 1.5 GBP to USD for now)
Say "colour" vs "color"
Replace any instances of "waste basket" with "rubbish bin"
