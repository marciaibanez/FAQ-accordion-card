let accordionDetails = document.querySelectorAll("details");

accordionDetails.forEach((detailTarget) => {
  detailTarget.addEventListener("toggle", () => {
    if (detailTarget.open) {
      accordionDetails.forEach((detail) => {
        if (detail !== detailTarget) {
          detail.open = false;
        }
      });
    }
  });
});
