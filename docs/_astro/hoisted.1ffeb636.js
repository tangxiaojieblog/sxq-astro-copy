const t=(()=>typeof localStorage<"u"&&localStorage.getItem("theme")?localStorage.getItem("theme"):window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")();t==="light"?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark");window.localStorage.setItem("theme",t);const l=()=>{const e=document.documentElement;e.classList.toggle("dark");const o=e.classList.contains("dark");localStorage.setItem("theme",o?"dark":"light")};document.getElementById("themeToggle").addEventListener("click",l);
