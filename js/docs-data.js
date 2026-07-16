/**
 * MapCraft Documentation Database
 * Houses structured content for all app features.
 */
const DOCS_DATA = {
    "home": {
        title: "MapCraft Documentation Portal",
        icon: "explore",
        category: "Overview",
        content: `
            <p class="lead">Welcome to the official documentation and user manual for <strong>MapCraft</strong> — a premium Android GIS application designed for high-performance offline mapping, field surveying, and network tracking.</p>
            
            <div class="alert-box tip">
                <span class="material-symbols-rounded alert-icon">info</span>
                <div class="alert-content">
                    <h4>First Time?</h4>
                    <p>Go to the <a href="#getting_started">Getting Started Guide</a> to download the APK and setup your first project folder structure in under 3 minutes.</p>
                </div>
            </div>

            <h2>Explore Key Documentation Areas</h2>
            <div class="grid-cards">
                <div class="doc-card" onclick="window.location.hash = 'map_screen'">
                    <span class="material-symbols-rounded card-icon">map</span>
                    <h3>Map Screen</h3>
                    <p>Master the primary GIS map interface, interactive gesture controllers, compass navigation, and target lock HUD overlays.</p>
                    <a href="#map_screen">View Article &rarr;</a>
                </div>
                <div class="doc-card" onclick="window.location.hash = 'layers'">
                    <span class="material-symbols-rounded card-icon">layers</span>
                    <h3>Layer Management</h3>
                    <p>Import and style vector overlay layers (KML, GPX, GeoJSON) and cache offline base raster maps (MBTiles).</p>
                    <a href="#layers">View Article &rarr;</a>
                </div>
                <div class="doc-card" onclick="window.location.hash = 'drawing_tools'">
                    <span class="material-symbols-rounded card-icon">edit_document</span>
                    <h3>Drawing Tools</h3>
                    <p>Learn how to sketch features, edit geometry vertexes, format labels, and configure forms on markers, lines, or polygons.</p>
                    <a href="#drawing_tools">View Article &rarr;</a>
                </div>
                <div class="doc-card" onclick="window.location.hash = 'target_locator'">
                    <span class="material-symbols-rounded card-icon">location_searching</span>
                    <h3>Target Locator</h3>
                    <p>Triangulate fire coordinates, incident reports, and map locations using azimuth degrees and intersection formulas.</p>
                    <a href="#target_locator">View Article &rarr;</a>
                </div>
                <div class="doc-card" onclick="window.location.hash = 'network_recorder'">
                    <span class="material-symbols-rounded card-icon">signal_cellular_alt</span>
                    <h3>Network Recorder</h3>
                    <p>Track cellular dead zones, log signal quality, and map network quality directly onto your vector route paths.</p>
                    <a href="#network_recorder">View Article &rarr;</a>
                </div>
                <div class="doc-card" onclick="window.location.hash = 'professional_mode'">
                    <span class="material-symbols-rounded card-icon">verified</span>
                    <h3>Professional Mode</h3>
                    <p>Unlock official GIS layers using department codes, and manage automatic data syncing with government repositories.</p>
                    <a href="#professional_mode">View Article &rarr;</a>
                </div>
            </div>

            <h2>Future Scalability Design</h2>
            <p>This documentation portal is constructed on modular schemas. As MapCraft expands, new custom templates, markdown pages, sitemaps, and search indices automatically adapt without code restructuring.</p>
        `
    },
    "getting_started": {
        title: "Getting Started Guide",
        icon: "rocket_launch",
        category: "Setup",
        content: `
            <p>Set up MapCraft on your Android device to begin field mapping and surveying projects.</p>
            
            <h2>Prerequisites</h2>
            <ul>
                <li>Android 8.0 (Oreo) or higher.</li>
                <li>At least 2GB of RAM (4GB recommended for heavy vector maps).</li>
                <li>GPS enabled.</li>
            </ul>

            <h2>1. Installation</h2>
            <p>Download the latest release APK from the <a href="#download">Downloads Page</a> and install it using these simple steps:</p>
            <ol>
                <li>Tap the downloaded APK file.</li>
                <li>If prompted, enable <strong>"Install from Unknown Sources"</strong> in your Android security settings.</li>
                <li>Open the app and grant the requested permissions (<strong>Location</strong> is mandatory for GIS tracking, and <strong>Storage</strong> is required to save maps and folders).</li>
            </ol>

            <h2>2. Creating Your First Project</h2>
            <p>A Project is a separate SQLite container database that keeps all your folders, layers, markers, and records organized.</p>
            <div class="alert-box tip">
                <span class="material-symbols-rounded alert-icon">lightbulb</span>
                <div class="alert-content">
                    <h4>Best Practice</h4>
                    <p>Always name your project based on the zone or date of your survey (e.g., <code>West_Forest_Survey_2026</code>) to avoid file confusion.</p>
                </div>
            </div>

            <h2>Next Steps</h2>
            <p>Once your project is created, explore the <a href="#map_screen">Map Screen Guide</a> to get familiar with the primary mapping dashboard.</p>
        `
    },
    "map_screen": {
        title: "Map Screen Dashboard",
        icon: "map",
        category: "Features",
        content: `
            <p>The Map Screen is the primary GIS viewport of MapCraft. It provides real-time mapping controls, overlay details, and surveying shortcuts.</p>
            
            <div class="img-container">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" alt="Map Dashboard Example" class="zoom-img">
                <div class="img-caption">Figure 1: High-precision GIS mapping view in MapCraft.</div>
            </div>

            <h2>Interface Overview</h2>
            <p>The interface is divided into the following key panels:</p>
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Panel Segment</th>
                            <th>Icon / Tool</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Top Status Bar</strong></td>
                            <td><code>GPS Fix Badge</code></td>
                            <td>Shows current location accuracy in meters, speed, and GPS satellites connected.</td>
                        </tr>
                        <tr>
                            <td><strong>Left Slider Drawer</strong></td>
                            <td><code>Folder Tree</code></td>
                            <td>Lists all project folders, subfolders, toggles map layer visibility, and selects active basemaps.</td>
                        </tr>
                        <tr>
                            <td><strong>Bottom Navigation Bar</strong></td>
                            <td><code>Map, Layers, Console, Sync, More</code></td>
                            <td>Primary tab switcher to quickly access various app screens.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Real-World Use Cases</h2>
            <ul>
                <li><strong>Forestry Surveys</strong>: Overlay boundary KML files while mapping track logs.</li>
                <li><strong>Network Audits</strong>: Visualize cell tower coverage grids on Google Hybrid base maps.</li>
        `
    },
    "map_structure": {
        title: "Map Controls & Structure",
        icon: "dashboard",
        category: "Features",
        content: `
            <p>This guide explains how MapCraft's controls, options, and overlays are structured on the main map dashboard, and how each component works during field surveys.</p>

            <h2>1. Sidebar Menu Drawer (Left Slider)</h2>
            <p>Access the left drawer by clicking the menu button (<code>☰</code>) in the top-left corner or swiping from the left edge of the screen.</p>
            <ul>
                <li><strong>Project Switcher</strong>: Tap the top header dropdown to select or change the active project database container.</li>
                <li><strong>Active Basemap selection</strong>: The active basemap (e.g. <em>Google Hybrid</em>) is shown in the dedicated drawer row. Tapping this row opens the Map Layer selection bottom sheet to quickly toggle map types (Satellite, Topographic, OSM).</li>
                <li><strong>Folder & Layer Tree</strong>: Lists all vector folders (e.g. Forest sectors, cellular sites) and imported layer files. Use checkboxes to toggle visibility on the map canvas.</li>
            </ul>

            <h2>2. Overlay Navigation HUD (Floating Widgets)</h2>
            <p>Overlays provide visual feedback and spatial metrics on top of the map layer:</p>
            <ul>
                <li><strong>GPS Status Badge</strong>: Positioned at the top. Shows active horizontal error/accuracy in meters (e.g. <code>Acc: 3.2m</code>), current altitude, and satellites locked. Tapping this opens the GPS Status panel.</li>
                <li><strong>Dynamic Compass Widget</strong>: Toggles between <em>North-up</em> (locks the map direction) and <em>Rotate-with-Device</em> (rotates map dynamically based on your phone's magnetometer compass).</li>
                <li><strong>Scale Bar Overlay</strong>: Renders at the bottom-left. Adjusts dynamically as you zoom, showing the ground scale distance representation in metric or imperial.</li>
                <li><strong>Active Coordinates Badge</strong>: Displays the exact center-screen cursor coordinate values in Decimal Degrees or UTM grid projections.</li>
            </ul>

            <h2>3. Active Geometry Editing HUD</h2>
            <p>When drawing or editing vector objects, a dedicated helper toolbar appears at the top:</p>
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Control Item</th>
                            <th>Action & Functionality</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>Snap Toggle</code></td>
                            <td>Automatically snaps the cursor to the nearest vertex of existing vector lines or polygons for topology alignment.</td>
                        </tr>
                        <tr>
                            <td><code>Undo / Redo</code></td>
                            <td>Quickly step backward or forward through coordinate point placements.</td>
                        </tr>
                        <tr>
                            <td><code>Measurement Badge</code></td>
                            <td>Displays real-time distance length (meters/km), perimeter, polygon area (sq. meters, hectares, acres), and segment heading bearing as you draw.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>4. Floating Action Buttons (FAB Cluster)</h2>
            <p>These actions controls are located at the bottom-right cluster:</p>
            <ul>
                <li><strong>Center Location Button</strong>: Shifts the map camera to lock onto your active GPS coordinate position.</li>
                <li><strong>Drawing Tool FAB</strong>: Tapping the draw pencil icon opens a tool sheet to create Points/Markers, Lines, Polygons, Circle radii, and Measurement paths.</li>
                <li><strong>Target Locator (Triangulation)</strong>: Opens bearing record tools to save fire sightings and locate target vectors.</li>
                <li><strong>Network Signal Log</strong>: Starts/stops cellular dead-zone monitoring logs.</li>
            </ul>
        `
    },
    "layers": {
        title: "Layer Management",
        icon: "layers",
        category: "Features",
        content: `
            <p>Layers organize spatial vector elements and base maps on your device. MapCraft supports both Vector layers (points, lines, polygons) and offline Raster layers (MBTiles format).</p>
            
            <h2>Supported File Formats</h2>
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Format</th>
                            <th>Type</th>
                            <th>Usage Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>KML / KMZ</strong></td>
                            <td>Vector</td>
                            <td>Import boundary polygons, track paths, and custom points (standard Keyhole Markup Language).</td>
                        </tr>
                        <tr>
                            <td><strong>GeoJSON</strong></td>
                            <td>Vector</td>
                            <td>Highly efficient web format for exchanging structured geographic geometry data.</td>
                        </tr>
                        <tr>
                            <td><strong>MBTiles</strong></td>
                            <td>Raster</td>
                            <td>Pre-rendered tile map packages containing offline Satellite, Topographic, or OpenStreetMap assets.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="alert-box warning">
                <span class="material-symbols-rounded alert-icon">warning</span>
                <div class="alert-content">
                    <h4>Memory Constraint</h4>
                    <p>Very large KML files (over 50MB) can cause rendering stutter on low-end devices. For massive maps, convert them to MBTiles format.</p>
                </div>
            </div>

            <h2>Adding a New Layer</h2>
            <ol>
                <li>Open the Left Navigation Drawer.</li>
                <li>Tap <strong>Layers</strong> in the menu.</li>
                <li>Click <strong>Import Layer</strong> at the bottom.</li>
                <li>Select your file and configure color and transparency styles.</li>
            </ol>
        `
    },
    "drawing_tools": {
        title: "Drawing & Editing Tools",
        icon: "edit_document",
        category: "Features",
        content: `
            <p>Draw vector features (Points, Lines, Polygons, and Circles) directly onto the map screen with sub-meter precision using manual taps or active GPS tracking.</p>
            
            <h2>Drawing Points/Markers</h2>
            <p>Points represent specific coordinate logs like cell tower locations, incident spots, or ground control markers.</p>
            <ul>
                <li>Tap the <strong>Draw Tool</strong> on the map, select <em>Add Point</em>.</li>
                <li>Tap the map to place the point, or click <em>Use GPS Location</em>.</li>
                <li>Enter custom forms, attach photos, and style the marker icon.</li>
            </ul>

            <h2>Drawing Lines & Polygons</h2>
            <p>Used to map linear routes, fences, area calculations, or boundary scopes.</p>
            <ol>
                <li>Select <em>Draw Line</em> or <em>Draw Polygon</em>.</li>
                <li>Place vertices by tapping on the map.</li>
                <li>Use the <strong>Vertex Editor</strong> to move, delete, or add mid-points to refine the boundary shapes.</li>
            </ol>

            <div class="alert-box tip">
                <span class="material-symbols-rounded alert-icon">lightbulb</span>
                <div class="alert-content">
                    <h4>Pro Tip</h4>
                    <p>Use the snap-to-vertex option to join boundaries together without overlap gaps.</p>
                </div>
            </div>
        `
    },
    "target_locator": {
        title: "Target Locator (Triangulation)",
        icon: "location_searching",
        category: "Features",
        content: `
            <p>The Target Locator tool is designed for foresters and search-and-rescue teams to locate and map remote targets (such as smoke, fire, or animal sightings) without physically going to the target.</p>
            
            <h2>How Triangulation Works</h2>
            <p>By capturing the bearing (azimuth angle) pointing towards the target from two different known GPS locations, MapCraft automatically calculates the intersection coordinates and plots the target location on the map.</p>
            
            <div class="img-container">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" alt="Space Triangulation Grid" class="zoom-img">
                <div class="img-caption">Figure 2: Triangulating target position based on intersecting directional vectors.</div>
            </div>

            <h2>Step-by-Step Triangulation</h2>
            <ol>
                <li>Stand at Point A, point the device compass towards the target, and record the bearing angle.</li>
                <li>Move to Point B (at least 50 meters away to ensure geometry precision), point, and record the second bearing angle.</li>
                <li>Click <strong>Calculate Target</strong>. The system will plot the intersection point and display coordinates in decimal degrees and UTM.</li>
            </ol>
        `
    },
    "network_recorder": {
        title: "Network Deadzone Recorder",
        icon: "signal_cellular_alt",
        category: "Features",
        content: `
            <p>The Network Recorder is a critical utility for field officers to log signal reception strength, carrier operators, and network types along their survey paths.</p>
            
            <h2>Features Overview</h2>
            <ul>
                <li><strong>Automatic Signal Logging</strong>: Captures signal details (in dBm) every 5 seconds.</li>
                <li><strong>Track Colorization</strong>: Renders paths dynamically (Green for Strong, Yellow for Weak, and Red for Dead Zones).</li>
                <li><strong>Offline Storage</strong>: Keeps all records locally on your SQLite database, ready to sync when back online.</li>
            </ul>

            <h2>Exporting Signal Logs</h2>
            <p>Export your log reports directly to CSV spreadsheets or GeoJSON shapefiles to run analysis on GIS software like QGIS or ArcGIS.</p>
        `
    },
    "app_sidebar": {
        title: "App Sidebar (Left Drawer)",
        icon: "menu",
        category: "Features",
        content: `
            <p>The Left Navigation Drawer acts as the control panel for project organization and directory structures in MapCraft.</p>

            <h2>Drawer Content</h2>
            <ul>
                <li><strong>Project Selector</strong>: An interactive dropdown container displaying the active project name. Tap it to switch context between different SQLite local project databases.</li>
                <li><strong>Folder Tree Manager</strong>: Displays a hierarchical checklist of all folders (e.g. Forest Divisions, Sector Cells) and subfolders. You can check/uncheck these to dynamically toggle map visibility.</li>
                <li><strong>Interactive Folder Search</strong>: Search through nested directory nodes to quickly isolate layers.</li>
                <li><strong>System Statistics</strong>: At the bottom of the drawer, see the total number of logged features, last sync timestamp, and active user profile fallback (<code>demo@mapcraft.com</code>).</li>
            </ul>

            <div class="alert-box tip">
                <span class="material-symbols-rounded alert-icon">info</span>
                <div class="alert-content">
                    <h4>Profile Info & Sync</h4>
                    <p>Tapping the user profile section at the bottom triggers an status Toast overlay: <em>"Sync feature will be available soon"</em>.</p>
                </div>
            </div>
        `
    },
    "polygon_styling": {
        title: "Polygon Drawing & Styling",
        icon: "pentagon",
        category: "Features",
        content: `
            <p>Polygons are used to map areas, boundaries, compartments, and zone ranges. MapCraft includes custom area stylers to customize boundary transparency, outline widths, and fill parameters.</p>

            <h2>Editing Styles</h2>
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Style Parameter</th>
                            <th>Description & Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Stroke Color</strong></td>
                            <td>Select outline color using preset material swatches or custom hex hex codes.</td>
                        </tr>
                        <tr>
                            <td><strong>Stroke Width</strong></td>
                            <td>Adjust outline width (1dp to 10dp) to emphasize boundaries.</td>
                        </tr>
                        <tr>
                            <td><strong>Fill Color & Opacity</strong></td>
                            <td>Set interior color and opacity (0% to 100%) to overlay map details underneath.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Using the Vertex Editor</h2>
            <ol>
                <li>Tap an existing polygon to enter edit mode.</li>
                <li>Drag existing vertices (circular pins) to modify the shape.</li>
                <li>Tap the transparent mid-point pins along segment edges to insert a new vertex point.</li>
                <li>Long-press a vertex pin to delete it.</li>
            </ol>
        `
    },
    "line_styling": {
        title: "Line Drawing & Editing Styles",
        icon: "gesture",
        category: "Features",
        content: `
            <p>Renders routes, roads, rivers, track paths, or fire lines. Line styling supports custom dash patterns, merging, and route splitting.</p>

            <h2>Line Styles Options</h2>
            <ul>
                <li><strong>Solid / Dashed / Dotted</strong>: Choose line rendering styles depending on type (e.g. Dashed for planned trails, Solid for highways).</li>
                <li><strong>Stroke Width</strong>: Control line thickness for map visibility.</li>
                <li><strong>Line Merging</strong>: Select two touching lines and click <strong>Merge</strong> in the bottom action bar to combine them into a single continuous route segment.</li>
                <li><strong>Line Splitting</strong>: Double-tap any vertex point and select <strong>Split</strong> to break a single route line into two independent features.</li>
            </ul>
        `
    },
    "top_app_bar": {
        title: "Global Scaffold Top App Bar",
        icon: "splitscreen",
        category: "Features",
        content: `
            <p>The Global Scaffold Top App Bar manages root application states, project switches, and sub-screen navigation across MapCraft.</p>

            <h2>1. Header Actions (Top Section)</h2>
            <ul>
                <li><strong>Home Button (Left)</strong>: Tapping the house icon (<code>Icons.Default.House</code>) instantly centers the camera and returns the viewport to the main map screen.</li>
                <li><strong>App Logo (Center)</strong>: Displays the MapCraft branding.</li>
                <li><strong>Project Dropdown (Right)</strong>: Displays the name of the active project database. Click it to trigger a dropdown menu to select other local workspaces.</li>
            </ul>

            <h2>2. Horizontal Scrollable Tab Row (Bottom Section)</h2>
            <p>Scroll horizontally to navigate to specific sub-screens directly:</p>
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Tab Link</th>
                            <th>Target Page / Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>About</strong></td>
                            <td>Displays app information, development logs, and licenses.</td>
                        </tr>
                        <tr>
                            <td><strong>Projects</strong></td>
                            <td>Manage, create, or drop SQLite project container databases.</td>
                        </tr>
                        <tr>
                            <td><strong>Folders</strong></td>
                            <td>Directory structure management for categorising shapes.</td>
                        </tr>
                        <tr>
                            <td><strong>Layers</strong></td>
                            <td>Manage offline raster tile overlays and vector layers.</td>
                        </tr>
                        <tr>
                            <td><strong>Import/Export</strong></td>
                            <td>Transfer shape data via GPX, KML, GeoJSON, or CSV files.</td>
                        </tr>
                        <tr>
                            <td><strong>More Options</strong></td>
                            <td>Displays shortcut cards (Backup Manager, Target Locator, Network Recorder).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="alert-box warning">
                <span class="material-symbols-rounded alert-icon">visibility_off</span>
                <div class="alert-content">
                    <h4>Contextual Visibility</h4>
                    <p>To maximize screen real estate, the Global Scaffold Top App Bar and its Horizontal Tab Row are automatically hidden on screens that manage their own navigation (such as the <strong>NetworkRecorderScreen</strong>).</p>
                </div>
            </div>
        `
    },
    "more_menu": {
        title: "More Options & Shortcuts",
        icon: "grid_view",
        category: "Features",
        content: `
            <p>The <strong>More Options</strong> screen (<code>MoreMenuScreen</code>) provides grid layouts shortcuts to tools, utilities, and managers inside MapCraft.</p>

            <h2>Tools Grid Cards</h2>
            <ul>
                <li><strong>Backup Manager</strong>: Perform system backups, restore database points, and clean up orphan cache files.</li>
                <li><strong>Target Locator</strong>: Plot azimuth triangulation vectors to estimate target coordinates.</li>
                <li><strong>Network Recorder</strong>: Start logging signal levels to color-code route quality tracks.</li>
            </ul>

            <h2>Triangulation & Target Mapping</h2>
            <p>Access the <strong>Target Locator</strong> to calculate intersecting bearings. It maps coordinates using mathematical angle intersection formulas based on your sensor compass logs.</p>
        `
    },
    "professional_mode": {
        title: "Professional Mode & Sync Options",
        icon: "verified",
        category: "Professional",
        content: `
            <p>MapCraft Professional Mode coordinates the field deployment of official government layers, forestry maps, and syncs vector data with central servers.</p>
            
            <h2>Setting Up Sync</h2>
            <p>Access the <strong>Sync</strong> tab in the bottom navigation bar to activate and configure your professional mode:</p>
            <ul>
                <li><strong>Activation</strong>: Enter your unique department code to fetch configuration details and download base boundaries.</li>
                <li><strong>Edit Code</strong>: If your code changes or contains a typo, click the Edit pencil icon to modify it.</li>
                <li><strong>Deactivate</strong>: Click the trash/delete icon to clean up activation records and clear official overlay structures.</li>
                <li><strong>Version Updates</strong>: Check for remote config updates. When a new map version (e.g. v5) is published, click <em>Download Update</em> to pull the latest layers.</li>
            </ul>

            <div class="alert-box warning">
                <span class="material-symbols-rounded alert-icon">gpp_maybe</span>
                <div class="alert-content">
                    <h4>Security Note</h4>
                    <p>Keep your department activation code private. Unauthorised sharing can exhaust download quotas set by your administrator.</p>
                </div>
            </div>
        `
    },
    "download": {
        title: "Download Releases",
        icon: "download",
        category: "Setup",
        content: `
            <p>Download the latest official MapCraft APK releases and documentation resources.</p>
            
            <h2>Latest Stable Release</h2>
            <div class="doc-card" style="border-color: var(--primary); background-color: var(--primary-soft); max-width: 500px; margin-bottom: 24px;">
                <span class="material-symbols-rounded card-icon" style="color: var(--primary);">download_for_offline</span>
                <h3>MapCraft v2.4.0 (APK)</h3>
                <p>Features animated splash screen, clickable drawer rows, bottom Sync navigation, and trailing-comma JSON parser support.</p>
                <button class="cta-btn" onclick="alert('Downloading MapCraft v2.4.0 APK...')">Download Installer (38 MB)</button>
            </div>

            <h2>User Guides</h2>
            <ul>
                <li><a href="#" onclick="alert('Downloading PDF manual...')">MapCraft Quick Start User Manual (PDF, 4.2 MB)</a></li>
                <li><a href="#" onclick="alert('Downloading CSV Template...')">Network Logging CSV Header Template (CSV, 1 KB)</a></li>
            </ul>
        `
    },
    "changelog": {
        title: "Release Changelog",
        icon: "history",
        category: "Overview",
        content: `
            <p>Read about all recent updates, security patches, features, and fixes in MapCraft.</p>
            
            <h2>v2.4.0 (2026-07-16)</h2>
            <ul>
                <li><strong>Sync Navigation Bar</strong>: Replaced static "Measure" with "Sync" tab on the main map.</li>
                <li><strong>Sync Interface</strong>: Added code editing, deactivation, and manual version update check/download capabilities.</li>
                <li><strong>JSON Robustness</strong>: Stripped trailing commas automatically from remote config files.</li>
                <li><strong>Premium Splash</strong>: Added premium topographic and grid layout animated splash screen.</li>
            </ul>

            <h2>v2.3.0 (2026-06-10)</h2>
            <ul>
                <li>Added cellular dead zone signal strength path colorization.</li>
                <li>Added incident bearing target locator triangulation.</li>
            </ul>
        `
    },
    "faq": {
        title: "Frequently Asked Questions",
        icon: "help",
        category: "Support",
        content: `
            <p>Find answers to common questions about MapCraft operation and GIS workflows.</p>
            
            <h2>General</h2>
            <h3>Does MapCraft require an active internet connection?</h3>
            <p>No. MapCraft is designed specifically for offline operation. All vector overlays, project maps, and database features run completely locally. You only need internet to check updates or sync data.</p>

            <h3>How do I load custom raster maps?</h3>
            <p>Copy your <code>.mbtiles</code> files into the <code>MapCraft/OfflineMaps/</code> folder on your device's external storage, then toggle them in the layers menu.</p>
        `
    },
    "troubleshooting": {
        title: "Troubleshooting Guide",
        icon: "build",
        category: "Support",
        content: `
            <p>Quick fixes for common issues encountered during setup, map rendering, and GPS logging.</p>
            
            <h2>GPS Failures</h2>
            <h3>The app shows "No GPS Signal" or poor accuracy</h3>
            <ul>
                <li>Ensure location permissions are set to "Allow all the time".</li>
                <li>Turn on high-accuracy location services in Android settings.</li>
                <li>Step outdoors with a clear view of the sky to connect to satellites.</li>
            </ul>

            <h2>Activation Crashes</h2>
            <h3>Failed to fetch department configuration error</h3>
            <p>This is often caused by formatting errors in your remote config JSON. Ensure there are no invalid characters. MapCraft v2.4.0 automatically sanitizes trailing commas to prevent this, so check that you are running the latest app version.</p>
        `
    },
    "privacy_policy": {
        title: "Privacy Policy",
        icon: "gavel",
        category: "Support",
        content: `
            <p>MapCraft respects your privacy. We do not gather, upload, or sell your spatial mapping data or logs.</p>
            <h2>Data Sovereignty</h2>
            <p>All project databases, location trails, offline cached maps, and photo attachments are stored locally on your device storage. We do not maintain any central cloud backups of your personal mapping records.</p>
        `
    },
    "contact": {
        title: "Contact Developer Support",
        icon: "contact_support",
        category: "Support",
        content: `
            <p>Need support or custom GIS application configurations for your department?</p>
            <p>Reach out directly to the MapCraft engineering team:</p>
            <ul>
                <li><strong>Email</strong>: <a href="mailto:support@mapcraft.app">support@mapcraft.app</a></li>
                <li><strong>Bug Tracker</strong>: <a href="https://github.com/mapcraftapp/maps/issues" target="_blank">MapCraft GitHub Issues</a></li>
            </ul>
        `
    }
};
