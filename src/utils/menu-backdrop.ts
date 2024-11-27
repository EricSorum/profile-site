export default function menuBackdrop() {
 const backdrop = document.getElementById("backdrop");
 console.log(backdrop?.classList)
 backdrop?.classList.contains("hidden") ? 
 backdrop?.classList.remove("hidden") : 
 backdrop?.classList.add("hidden")
}