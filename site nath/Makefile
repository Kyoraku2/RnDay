TEMPLATES_DIR = files_to_modify
FINAL_DIR = docs

all: fr css

fr: bightml
	minify $(FINAL_DIR)/about.big.html > $(FINAL_DIR)/about.html
	minify $(FINAL_DIR)/activites.big.html > $(FINAL_DIR)/activites.html
	minify $(FINAL_DIR)/index.big.html > $(FINAL_DIR)/index.html
	minify $(FINAL_DIR)/contact.big.html > $(FINAL_DIR)/contact.html
	minify $(FINAL_DIR)/inscription.big.html > $(FINAL_DIR)/inscription.html
	rm -f $(FINAL_DIR)/*.big.*

bightml:
	mustache $(TEMPLATES_DIR)/common.json $(TEMPLATES_DIR)/about.mustache > $(FINAL_DIR)/about.big.html
	mustache $(TEMPLATES_DIR)/common.json $(TEMPLATES_DIR)/activites.mustache > $(FINAL_DIR)/activites.big.html
	mustache $(TEMPLATES_DIR)/common.json $(TEMPLATES_DIR)/index.mustache > $(FINAL_DIR)/index.big.html
	mustache $(TEMPLATES_DIR)/common.json $(TEMPLATES_DIR)/contact.mustache > $(FINAL_DIR)/contact.big.html
	mustache $(TEMPLATES_DIR)/common.json $(TEMPLATES_DIR)/inscription.mustache > $(FINAL_DIR)/inscription.big.html

css:
	rm -f $(FINAL_DIR)/css/all.min.css
	minify $(FINAL_DIR)/fonts/icomoon/style.css > $(FINAL_DIR)/fonts/icomoon/style.min.css
	minify $(FINAL_DIR)/css/*.css > $(FINAL_DIR)/css/all.min.css

js:
	rm -f $(FINAL_DIR)/js/all.min.js
	minify $(FINAL_DIR)/js/*.js > $(FINAL_DIR)/js/all.min.js

clean:

mrproper: clean
	rm -f $(FINAL_DIR)/*.html
	rm -f $(FINAL_DIR)/css/all.min.css
