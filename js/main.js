const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function load() {
  await delay(5000);
  console.log("Loaded");
  document.getElementById("loading-screen").remove();
}
