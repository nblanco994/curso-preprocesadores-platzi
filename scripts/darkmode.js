const root = document.documentElement;
let styles = getComputedStyle(root);

const toggle = styles.getPropertyValue("--Toggle");
const light_theme_BG = styles.getPropertyValue("--color-claro");

function dashboardTheme() {
		if (light_theme_BG == styles.getPropertyValue("--color-claro")){
      document.body.classList.toggle("darkTheme");
    }
}