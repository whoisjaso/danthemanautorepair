(function () {
  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-menu-toggle]");
  var nav = document.querySelector("[data-site-nav]");
  var serviceSelect = document.querySelector("[data-service-select]");
  var issueSelect = document.querySelector("[data-issue-select]");
  var notesField = document.querySelector("[data-notes-field]");
  var result = document.querySelector("[data-problem-result]");
  var missionTitle = document.querySelector("[data-mission-title]");
  var missionProgress = document.querySelector("[data-mission-progress]");
  var missionDisplay = document.querySelector("[data-mission-display]");
  var checkpointDisplay = document.querySelector("[data-checkpoint-display]");
  var problemMeter = document.querySelector("[data-problem-meter]");
  var form = document.querySelector("[data-service-form]");
  var success = document.querySelector("[data-form-success]");

  if (toggle && header && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function chooseOption(select, value) {
    if (!select || !value) return;
    var normalized = value.toLowerCase();
    var options = Array.prototype.slice.call(select.options);
    var exact = options.find(function (option) {
      return option.value.toLowerCase() === normalized;
    });
    var partial = options.find(function (option) {
      return normalized.indexOf(option.value.toLowerCase()) >= 0 || option.value.toLowerCase().indexOf(normalized) >= 0;
    });
    var match = exact || partial;
    if (match) select.value = match.value;
  }

  function prefillService(value) {
    chooseOption(serviceSelect, value);
    if (notesField && value) {
      var text = "Service selected: " + value + ". ";
      if (!notesField.value.includes(text)) {
        notesField.value = text + notesField.value;
      }
    }
  }

  function setMission(issue, service) {
    if (missionTitle) {
      missionTitle.textContent = issue ? "Level 02: " + service : "Level 01: Diagnose";
    }
    if (missionDisplay) {
      missionDisplay.textContent = issue || "Find the issue";
    }
    if (checkpointDisplay) {
      checkpointDisplay.textContent = issue ? "Book " + service : "Request diagnostic";
    }
    if (missionProgress) {
      missionProgress.style.width = issue ? "72%" : "36%";
    }
    if (problemMeter) {
      problemMeter.style.width = issue ? "72%" : "36%";
    }
  }

  document.addEventListener("click", function (event) {
    var serviceLink = event.target.closest("[data-service]");
    if (serviceLink) {
      prefillService(serviceLink.getAttribute("data-service"));
    }
  });

  var chips = document.querySelectorAll("[data-issue]");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (item) {
        item.classList.remove("is-active");
      });
      chip.classList.add("is-active");
      var issue = chip.getAttribute("data-issue");
      var issueForSelect = issue.replace("Car ", "").replace("Brake Noise", "Noise").replace("Suspension Noise", "Noise").replace("Strange Vibration", "Noise").replace("Engine ", "").replace("Transmission Slipping", "Transmission Issue").replace("Battery Warning Light", "Electrical Issue").replace("Electrical Problem", "Electrical Issue");
      var service = issue.indexOf("Brake") >= 0 ? "Brake Service" : issue.indexOf("A/C") >= 0 ? "A/C Service" : issue.indexOf("Transmission") >= 0 ? "Transmission" : issue.indexOf("Tire") >= 0 ? "Tire Service" : issue.indexOf("Suspension") >= 0 ? "Suspension" : issue.indexOf("Battery") >= 0 ? "Battery" : issue.indexOf("Electrical") >= 0 ? "Electrical" : "Diagnostics";
      chooseOption(issueSelect, issueForSelect);
      chooseOption(serviceSelect, service);
      setMission(issue, service);
      if (notesField) {
        notesField.value = "Vehicle issue selected: " + issue + ". ";
      }
      if (result) {
        result.textContent = issue + " selected. Request a diagnostic and include any sounds, warning lights, leaks, or driving symptoms.";
      }
    });
  });

  var diagnosticButton = document.querySelector("[data-request-diagnostic]");
  if (diagnosticButton) {
    diagnosticButton.addEventListener("click", function () {
      chooseOption(serviceSelect, "Diagnostics");
      setMission("Diagnostic request", "Diagnostics");
    });
  }

  if (form && success) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      success.hidden = false;
      if (missionTitle) missionTitle.textContent = "Level 03: Submitted";
      if (missionProgress) missionProgress.style.width = "100%";
      if (problemMeter) problemMeter.style.width = "100%";
      if (checkpointDisplay) checkpointDisplay.textContent = "Confirmation";
      success.scrollIntoView({ behavior: "smooth", block: "center" });
      form.reset();
    });
  }

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    reveals.forEach(function (element, index) {
      element.style.transitionDelay = Math.min(index % 5, 4) * 55 + "ms";
      observer.observe(element);
    });
  } else {
    reveals.forEach(function (element) {
      element.classList.add("is-visible");
    });
  }
})();
