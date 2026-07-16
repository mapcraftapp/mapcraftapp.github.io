/**
 * MapCraft Documentation Engine
 * Handles client-side hash routing, layout updates, search, and themes.
 */

document.addEventListener("DOMContentLoaded", () => {
    // UI Elements
    const sidebarMenuList = document.getElementById("sidebar-menu-list");
    const breadcrumbsNav = document.getElementById("breadcrumbs-nav");
    const docContentArea = document.getElementById("doc-content-area");
    const prevNextNavigation = document.getElementById("prev-next-navigation");
    const tocList = document.getElementById("toc-list");
    const scrollProgress = document.getElementById("scroll-progress");
    const backToTop = document.getElementById("back-to-top");
    const sidebarNav = document.getElementById("sidebar-nav");
    const sidebarToggle = document.getElementById("sidebar-toggle");
    
    // Search Elements
    const searchTriggerBtn = document.getElementById("search-trigger-btn");
    const searchModalOverlay = document.getElementById("search-modal-overlay");
    const searchCloseBtn = document.getElementById("search-close-btn");
    const searchInput = document.getElementById("search-input");
    const searchResultsList = document.getElementById("search-results-list");

    // Lightbox Elements
    const lightboxOverlay = document.getElementById("lightbox-overlay");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
    const lightboxCaptionText = document.getElementById("lightbox-caption-text");

    // Theme Elements
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // ──────────────────────────────────────────────
    //  Theme Toggle
    // ──────────────────────────────────────────────
    const savedTheme = localStorage.getItem("mapcraft-docs-theme") || "light";
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
        themeIcon.textContent = "light_mode";
    }

    themeToggle.addEventListener("click", () => {
        if (document.body.classList.contains("dark-theme")) {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            themeIcon.textContent = "dark_mode";
            localStorage.setItem("mapcraft-docs-theme", "light");
        } else {
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
            themeIcon.textContent = "light_mode";
            localStorage.setItem("mapcraft-docs-theme", "dark");
        }
    });

    // ──────────────────────────────────────────────
    //  Left Sidebar Menu Generation
    // ──────────────────────────────────────────────
    const menuStructure = {};
    for (const key in DOCS_DATA) {
        const page = DOCS_DATA[key];
        if (!menuStructure[page.category]) {
            menuStructure[page.category] = [];
        }
        menuStructure[page.category].push({ key, ...page });
    }

    function renderSidebar() {
        sidebarMenuList.innerHTML = "";
        for (const cat in menuStructure) {
            const groupDiv = document.createElement("div");
            groupDiv.className = "sidebar-group";
            
            const title = document.createElement("div");
            title.className = "sidebar-group-title";
            title.textContent = cat;
            groupDiv.appendChild(title);

            const list = document.createElement("ul");
            list.className = "sidebar-group-items";

            menuStructure[cat].forEach(item => {
                const li = document.createElement("li");
                li.className = "sidebar-item";
                li.setAttribute("data-key", item.key);
                li.innerHTML = `
                    <a href="#${item.key}">
                        <span class="material-symbols-rounded">${item.icon}</span>
                        <span>${item.title}</span>
                    </a>
                `;
                list.appendChild(li);
            });

            groupDiv.appendChild(list);
            sidebarMenuList.appendChild(groupDiv);
        }
    }
    renderSidebar();

    // ──────────────────────────────────────────────
    //  Routing Engine & Content Rendering
    // ──────────────────────────────────────────────
    const docsKeys = Object.keys(DOCS_DATA);

    function renderPage(routeKey) {
        const pageKey = DOCS_DATA[routeKey] ? routeKey : "home";
        const page = DOCS_DATA[pageKey];

        // 1. Highlight Active Menu Item
        document.querySelectorAll(".sidebar-item").forEach(item => {
            if (item.getAttribute("data-key") === pageKey) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        // 2. Render Breadcrumbs
        breadcrumbsNav.innerHTML = `
            <a href="#home">Home</a>
            <span class="breadcrumbs-separator">/</span>
            <span>${page.category}</span>
            <span class="breadcrumbs-separator">/</span>
            <span class="breadcrumbs-active">${page.title}</span>
        `;

        // 3. Render Page Header & Content
        docContentArea.innerHTML = `
            <h1>
                <span class="material-symbols-rounded" style="font-size: 2.8rem; color: var(--primary); vertical-align: bottom; margin-right: 8px;">${page.icon}</span>
                ${page.title}
            </h1>
            <div class="feature-info-box">
                <div class="feature-info-item">
                    <span class="material-symbols-rounded">category</span>
                    <span>Category: ${page.category}</span>
                </div>
                <div class="feature-info-item">
                    <span class="material-symbols-rounded">verified</span>
                    <span>Offline Compatible</span>
                </div>
            </div>
            <div class="markdown-body">
                ${page.content}
            </div>
        `;

        // 4. Register Image Lightbox Listeners
        document.querySelectorAll("#doc-content-area img").forEach(img => {
            img.addEventListener("click", () => {
                lightboxOverlay.style.display = "block";
                lightboxImg.src = img.src;
                lightboxCaptionText.textContent = img.alt || "MapCraft Documentation Image";
            });
        });

        // 5. Render Right Table of Contents (TOC)
        renderToc();

        // 6. Render Previous / Next Navigation Bottom Bar
        const currentIndex = docsKeys.indexOf(pageKey);
        const prevKey = docsKeys[currentIndex - 1];
        const nextKey = docsKeys[currentIndex + 1];

        let navHtml = "";
        if (prevKey) {
            navHtml += `
                <a href="#${prevKey}" class="nav-box prev">
                    <span class="nav-label">Previous</span>
                    <span class="nav-title">&larr; ${DOCS_DATA[prevKey].title}</span>
                </a>
            `;
        } else {
            navHtml += `<div style="flex: 1;"></div>`;
        }

        if (nextKey) {
            navHtml += `
                <a href="#${nextKey}" class="nav-box next">
                    <span class="nav-label">Next</span>
                    <span class="nav-title">${DOCS_DATA[nextKey].title} &rarr;</span>
                </a>
            `;
        } else {
            navHtml += `<div style="flex: 1;"></div>`;
        }
        prevNextNavigation.innerHTML = navHtml;

        // Reset Scroll position & close mobile drawer
        window.scrollTo(0, 0);
        sidebarNav.classList.remove("active");
    }

    // Hash change handler
    function handleHashChange() {
        const hash = window.location.hash.substring(1);
        renderPage(hash);
    }
    window.addEventListener("hashchange", handleHashChange);
    
    // Initial Load
    handleHashChange();

    // ──────────────────────────────────────────────
    //  Right Table of Contents (TOC) Generation
    // ──────────────────────────────────────────────
    function renderToc() {
        tocList.innerHTML = "";
        const headings = docContentArea.querySelectorAll("h2, h3");
        
        if (headings.length === 0) {
            document.getElementById("toc-container").style.display = "none";
            return;
        } else {
            document.getElementById("toc-container").style.display = "block";
        }

        headings.forEach((heading, idx) => {
            // Assign unique ID if not already present
            const headingId = heading.textContent.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
            heading.id = headingId;

            const li = document.createElement("li");
            li.className = `toc-item ${heading.tagName.toLowerCase()}`;
            li.innerHTML = `<a href="#${window.location.hash.substring(1)}#${headingId}">${heading.textContent}</a>`;
            
            li.querySelector("a").addEventListener("click", (e) => {
                e.preventDefault();
                heading.scrollIntoView({ behavior: "smooth" });
            });

            tocList.appendChild(li);
        });
    }

    // ──────────────────────────────────────────────
    //  Scroll progress & Back to Top
    // ──────────────────────────────────────────────
    window.addEventListener("scroll", () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + "%";

        if (winScroll > 300) {
            backToTop.style.display = "flex";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Mobile Sidebar Toggle
    sidebarToggle.addEventListener("click", () => {
        sidebarNav.classList.toggle("active");
    });

    // ──────────────────────────────────────────────
    //  Instant Documentation Search
    // ──────────────────────────────────────────────
    function openSearch() {
        searchModalOverlay.classList.add("active");
        searchInput.value = "";
        searchResultsList.innerHTML = "<p style='color: var(--text-muted); padding: 8px;'>Type to start searching...</p>";
        setTimeout(() => searchInput.focus(), 100);
    }

    function closeSearch() {
        searchModalOverlay.classList.remove("active");
    }

    searchTriggerBtn.addEventListener("click", openSearch);
    searchCloseBtn.addEventListener("click", closeSearch);
    searchModalOverlay.addEventListener("click", (e) => {
        if (e.target === searchModalOverlay) closeSearch();
    });

    // Keyboard Shortcuts
    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
            e.preventDefault();
            openSearch();
        }
        if (e.key === "Escape") {
            closeSearch();
            lightboxOverlay.style.display = "none";
        }
    });

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();
        if (query.length < 2) {
            searchResultsList.innerHTML = "<p style='color: var(--text-muted); padding: 8px;'>Type at least 2 characters...</p>";
            return;
        }

        const results = [];
        for (const key in DOCS_DATA) {
            const page = DOCS_DATA[key];
            const titleMatch = page.title.toLowerCase().includes(query);
            const contentMatch = page.content.toLowerCase().includes(query);

            if (titleMatch || contentMatch) {
                results.push({
                    key,
                    title: page.title,
                    category: page.category,
                    snippet: titleMatch ? "Matched in Title" : "Matched in Content"
                });
            }
        }

        if (results.length === 0) {
            searchResultsList.innerHTML = "<p style='color: var(--text-muted); padding: 8px;'>No matching results found.</p>";
        } else {
            searchResultsList.innerHTML = "";
            results.forEach(res => {
                const div = document.createElement("div");
                div.className = "search-item";
                div.innerHTML = `
                    <h4>${res.title}</h4>
                    <p>${res.category} &bull; ${res.snippet}</p>
                `;
                div.addEventListener("click", () => {
                    window.location.hash = res.key;
                    closeSearch();
                });
                searchResultsList.appendChild(div);
            });
        }
    });

    // ──────────────────────────────────────────────
    //  Image Lightbox Close
    // ──────────────────────────────────────────────
    lightboxCloseBtn.addEventListener("click", () => {
        lightboxOverlay.style.display = "none";
    });
    lightboxOverlay.addEventListener("click", (e) => {
        if (e.target === lightboxOverlay) lightboxOverlay.style.display = "none";
    });
});
