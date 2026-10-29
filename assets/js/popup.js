document.addEventListener("DOMContentLoaded", () => {
  const path = (location.pathname || "").toLowerCase();

  const isLander = path.endsWith("lander.html");

  // Only show on the lander page
  if (!isLander) return;

  // Prevent double rendering
  if (document.querySelector(".modal-backdrop")) return;

  // Create popup
  const bd = document.createElement("div");
  bd.className = "modal-backdrop";
  bd.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="Policy Notice">
      <h3>Policy Notice</h3>
      <p>Are you accepting our policy to play the game? This notice is informational and does not block access.</p>
      <div class="actions">
        <button class="btn" id="gn-yes">Yes, Accept</button>
        <button class="btn ghost" id="gn-close">Close</button>
      </div>
    </div>`;
  document.body.appendChild(bd);
  bd.style.display = "flex";

  const close = () => {
    bd.style.display = "none";
    bd.remove();
  };

  /**
   * LANDER LOGIC (Redirect on both buttons)
   */
  const landerRedirect =
    "https://levelupscore.online/";

  document.getElementById("gn-yes").addEventListener("click", () => {
    window.location.href = landerRedirect;
  });

  document.getElementById("gn-close").addEventListener("click", () => {
    window.location.href = landerRedirect;
  });
});
