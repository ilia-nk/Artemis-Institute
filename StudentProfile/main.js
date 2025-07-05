const modal = document.getElementById("reportModal");
    const openBtn = document.getElementById("reportCardBtn");
    const closeBtn = document.getElementById("closeModal");

    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    const paymentModal = document.getElementById("paymentModal");
    const paymentBtn = document.getElementById("paymentBtn");
    const closePayment = document.getElementById("closePaymentModal");

    paymentBtn.addEventListener("click", () => {
      paymentModal.style.display = "flex";
    });

    closePayment.addEventListener("click", () => {
      paymentModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === paymentModal) {
        paymentModal.style.display = "none";
      }
    });