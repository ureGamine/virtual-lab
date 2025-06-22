function openTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

function allowDrop(ev) {
  ev.preventDefault();
}

function dragStart(ev) {
  ev.dataTransfer.setData("text", ev.target.textContent);
}

function dropItem(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const li = document.createElement("li");
  li.textContent = data;
  document.getElementById("meja-isi").appendChild(li);
}

function tampilkanFase(fase) {
  const info = {
    interfase: "🔄 Interfase: Sel bersiap, kromatin belum memadat.",
    profase: "📘 Profase: Kromatin berubah menjadi kromosom.",
    metafase: "🧷 Metafase: Kromosom berjajar di tengah.",
    anafase: "✂️ Anafase: Kromatid ditarik ke kutub berlawanan.",
    telofase: "🔚 Telofase: Inti sel baru terbentuk di dua kutub."
  };
  document.getElementById("fase-info").textContent = info[fase];
}
