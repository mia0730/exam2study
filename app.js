/* Shared behavior: theme toggle, nav highlight, checklist memory */
(function () {
  "use strict";

  /* ---- Theme ---- */
  var KEY = "conm1200-theme";
  function stored(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  var saved = stored(KEY);
  if (saved === "dark" || saved === "light") {
    document.documentElement.setAttribute("data-theme", saved);
  }

  function currentIsDark() {
    var attr = document.documentElement.getAttribute("data-theme");
    if (attr) return attr === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest(".theme-btn");
    if (!b) return;
    var next = currentIsDark() ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    save(KEY, next);
    b.textContent = next === "dark" ? "☀" : "☾";
  });

  /* ---- Nav highlight ---- */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.main a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here) a.classList.add("here");
  });

  /* ---- Set theme button glyph on load ---- */
  document.querySelectorAll(".theme-btn").forEach(function (b) {
    b.textContent = currentIsDark() ? "☀" : "☾";
  });

  /* ---- Persistent checklists ---- */
  document.querySelectorAll(".check input[type=checkbox][data-key]").forEach(function (cb) {
    var k = "conm1200-" + cb.dataset.key;
    if (stored(k) === "1") { cb.checked = true; }
    if (cb.checked) cb.closest("li").classList.add("done");
    cb.addEventListener("change", function () {
      save(k, cb.checked ? "1" : "0");
      cb.closest("li").classList.toggle("done", cb.checked);
    });
  });

  /* ---- Order-the-steps drills ---- */
  document.querySelectorAll(".drill[data-steps]").forEach(function (box) {
    var correct = JSON.parse(box.dataset.steps);
    var ol = document.createElement("ol");
    var btns = document.createElement("div");
    btns.className = "btnrow";
    btns.style.marginBottom = "0";

    function shuffled() {
      var a = correct.slice();
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = a[i]; a[i] = a[j]; a[j] = t;
      }
      // guarantee it isn't already in order
      if (a.join("|") === correct.join("|") && a.length > 1) {
        var tmp = a[0]; a[0] = a[a.length - 1]; a[a.length - 1] = tmp;
      }
      return a;
    }

    function render(list) {
      ol.innerHTML = "";
      list.forEach(function (txt, i) {
        var li = document.createElement("li");
        li.draggable = true;
        li.innerHTML = '<span class="pos">' + (i + 1) + '</span><span class="handle">⠿</span><span>' + txt + '</span>';
        li.dataset.txt = txt;
        ol.appendChild(li);
      });
    }

    function renumber() {
      Array.prototype.forEach.call(ol.children, function (li, i) {
        li.querySelector(".pos").textContent = i + 1;
        li.classList.remove("correct", "wrong");
      });
    }

    var dragged = null;
    ol.addEventListener("dragstart", function (e) {
      dragged = e.target.closest("li");
      if (dragged) dragged.style.opacity = ".4";
    });
    ol.addEventListener("dragend", function () {
      if (dragged) dragged.style.opacity = "";
      dragged = null; renumber();
    });
    ol.addEventListener("dragover", function (e) {
      e.preventDefault();
      var over = e.target.closest("li");
      if (!over || !dragged || over === dragged) return;
      var rect = over.getBoundingClientRect();
      var after = (e.clientY - rect.top) > rect.height / 2;
      ol.insertBefore(dragged, after ? over.nextSibling : over);
    });

    // Tap-friendly fallback: click to move up
    ol.addEventListener("click", function (e) {
      var li = e.target.closest("li");
      if (!li) return;
      if (li.previousElementSibling) ol.insertBefore(li, li.previousElementSibling);
      renumber();
    });

    var check = document.createElement("button");
    check.className = "btn sm";
    check.textContent = "Check order";
    check.addEventListener("click", function () {
      var ok = 0;
      Array.prototype.forEach.call(ol.children, function (li, i) {
        var right = li.dataset.txt === correct[i];
        li.classList.toggle("correct", right);
        li.classList.toggle("wrong", !right);
        if (right) ok++;
      });
      out.textContent = ok + " of " + correct.length + " in the right place" +
        (ok === correct.length ? " — that's it." : "");
    });

    var reset = document.createElement("button");
    reset.className = "btn ghost sm";
    reset.textContent = "Shuffle again";
    reset.addEventListener("click", function () { render(shuffled()); out.textContent = ""; });

    var out = document.createElement("span");
    out.style.cssText = "font-size:14px;color:var(--ink-2);align-self:center";

    btns.appendChild(check); btns.appendChild(reset); btns.appendChild(out);

    var hint = document.createElement("p");
    hint.style.cssText = "font-size:13.5px;color:var(--ink-3);margin:0 0 11px";
    hint.textContent = "Drag to reorder — or tap a line to move it up one.";

    box.appendChild(hint);
    box.appendChild(ol);
    box.appendChild(btns);
    render(shuffled());
  });

  /* ---- Expand / collapse all ---- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-toggle-all]");
    if (!b) return;
    var open = b.dataset.state !== "open";
    document.querySelectorAll("details.qa").forEach(function (d) { d.open = open; });
    b.dataset.state = open ? "open" : "closed";
    b.textContent = open ? "Collapse all" : "Expand all";
  });
})();
