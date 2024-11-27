export default function menuBackdrop() {
 const backdrop = document.getElementById("backdrop");
 backdrop?.classList.contains("hidden") ? 
 backdrop?.classList.remove("hidden") : 
 backdrop?.classList.add("hidden")
}