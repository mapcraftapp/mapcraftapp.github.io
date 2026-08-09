# MAPCRAFT: THE MASTER TUTORIAL MANUAL & FIELD GUIDE 🗺️⚡
### An Exhaustive, Step-by-Step Operational Handbook with Real-World GIS & Survey Scenarios

---

## TABLE OF CONTENTS
1. [Chapter 1: Main Toolbar & Core Map Interface](#chapter-1-main-toolbar--core-map-interface)
   - 1.1 Map (Basemap Selector)
   - 1.2 Layers (Layer Stack & Visibility Control)
   - 1.3 Console (Live System Log & Terminal)
   - 1.4 Sync (Server Synchronization)
   - 1.5 Photo Over Layer (Ground Image Overlays)
   - 1.6 Projection Arrow / Navigation Compass
   - 1.7 More Menu (Utility Tools)
2. [Chapter 2: Left Slider Drawer (Folders & Forms)](#chapter-2-left-slider-drawer-folders--forms)
   - 2.1 Folders & Subfolders
   - 2.2 Folder Style Customizer
   - 2.3 Create Form Templates (Dynamic Attribute Forms)
   - 2.4 Rename Folder & Delete Empty Folders
3. [Chapter 3: Projects, List View, Search & Offline Cache](#chapter-3-projects-list-view-search--offline-cache)
   - 3.1 Projects Workspace
   - 3.2 List View & Proximity Filtering
   - 3.3 Global Search Bar (Address & Coordinate Formats)
   - 3.4 Offline Cache Manager
4. [Chapter 4: Spatial Creation Tools](#chapter-4-spatial-creation-tools)
   - 4.1 Point (📍)
   - 4.2 Line (📏)
   - 4.3 Area / Polygon (🔷)
   - 4.4 Circle (⭕)
   - 4.5 Track Logger (🏃)
   - 4.6 Measure Tool (📐)
5. [Chapter 5: Vector Creation Modes & Precision Editing Engine](#chapter-5-vector-creation-modes--precision-editing-engine)
   - 5.1 Add / Vertex Insertion
   - 5.2 Manual Coordinate Entry
   - 5.3 Finger Tap Mode
   - 5.4 Finger Draw / Freehand Mode
   - 5.5 GPS Location Drop
   - 5.6 Update Point & Delete Point
   - 5.7 Hole Editing Mode (Polygon Courtyards & Donuts)
   - 5.8 Undo (↶) & Redo (↷) Actions
   - 5.9 Magnetic Snapping Engine
6. [Chapter 6: Polygon Action Suite (Tapping a Polygon)](#chapter-6-polygon-action-suite-tapping-a-polygon)
   - 6.1 Polygon Details
   - 6.2 Edit Points & Geometry
   - 6.3 Polygon Styling & Opacity
   - 6.4 Navigation
   - 6.5 Radar Distance Proximity Alerts
   - 6.6 Photo Attachments & Inspection Logs
   - 6.7 Watch Geofence (Real-Time Perimeter Alarms)
   - 6.8 Standalone Shape Export
   - 6.9 Duplicate Polygon
7. [Chapter 7: Line Action Suite (Tapping a Polyline)](#chapter-7-line-action-suite-tapping-a-polyline)
   - 7.1 Continue from End
   - 7.2 Continue from Start
   - 7.3 Reverse Line Direction
   - 7.4 Merge Lines
   - 7.5 Split Line
   - 7.6 Show Segment Details (Distances, Bearings & Slopes)
8. [Chapter 8: Supported Layer Types & Import/Export Suite](#chapter-8-supported-layer-types--importexport-suite)
   - 8.1 Supported Layer Types
   - 8.2 Importing Data (KML, KMZ, CSV, GPX)
   - 8.3 Exporting Data (Project Zip, MapReel MP4, GeoPDF, KML, KMZ, GPX, GeoPackage, GeoJSON)
9. [Chapter 9: Advanced Field Utilities (Target Locator & Network Recorder)](#chapter-9-advanced-field-utilities-target-locator--network-recorder)
   - 9.1 Target Locator & Distance Triangulation
   - 9.2 Cellular Network Signal Recorder (Drive Testing)
10. [Chapter 10: GNSS Status, Compass & Satellite Analysis](#chapter-10-gnss-status-compass--satellite-analysis)
    - 10.1 Navigation Compass & Azimuth Indicator
    - 10.2 Satellite Overview
    - 10.3 Jump Filter (Multipath Noise Suppression)
    - 10.4 Draft / Drift Test (Static GPS Stability Test)
    - 10.5 Track Quality Score
    - 10.6 Satellite Accuracy & Telemetry (HDOP, VDOP, PDOP, SNR)
    - 10.7 Satellite Skyplot
11. [Chapter 11: Backup Manager](#chapter-11-backup-manager)
    - 11.1 Manual Instant Snapshots
    - 11.2 Scheduled Backup Routines
    - 11.3 Database Restoration Engine
12. [Chapter 12: Comprehensive System Settings](#chapter-12-comprehensive-system-settings)
    - 12.1 Unit Settings & Custom Measurement Units
    - 12.2 Track Settings
    - 12.3 Radar Settings
    - 12.4 Map Display Controls
    - 12.5 Render Performance & Hardware Acceleration
    - 12.6 Export & Sync Server Credentials

---

# CHAPTER 1: Main Toolbar & Core Map Interface

When you open MapCraft for the first time, you are greeted by the main map screen. This is your primary workspace — a full-screen interactive map with a vertical toolbar docked along the right edge, a top navigation bar with search and project selectors, and a live GPS telemetry strip showing your current latitude, longitude, elevation, speed, and satellite fix quality.

Every tool on this screen is designed to be reachable with one thumb while holding your phone in the field, even with gloves on. The right-side vertical toolbar contains the 7 most-used controls that you will interact with constantly throughout your day:

```
┌────────────────────────────────────────────────────────┐
│ [🔍 Search address/coords]         [📁 Projects] [⚙️]  │  <-- Top Bar
│ LAT 21.866498  LON 84.927636   GPS: 3D Fix (±1.1m)     │  <-- Status Strip
├────────────────────────────────────────────────────────┤
│  [≡ Drawer]                              [🎯 My Loc]   │
│                                          [🗺️ Map]     │  <-- Main Toolbar
│              MAP VIEW AREA               [📚 Layers]  │
│                                          [💻 Console] │
│                                          [☁️ Sync]    │
│                                          [🖼️ Photo]   │
│                                          [🧭 Compass] │
│                                          [⋮ More]     │
└────────────────────────────────────────────────────────┘
```

## 1.1 Map (Basemap Selector)

- **What It Is & How It Works**: The **Map (🗺️)** tool opens the background basemap picker — a scrollable gallery of map style cards that controls what the ground beneath your data looks like. Think of the basemap as the wallpaper underneath all your pins, lines, and polygons. MapCraft supports 14 online tile providers as well as fully offline raster MBTiles datasets that you can load from your device storage.

  The available online basemap styles include:
  - **Google Satellite**: High-resolution aerial/satellite photography. Best for seeing real terrain, buildings, trees, and water bodies exactly as they appear from above.
  - **Google Hybrid**: Satellite photography overlaid with labeled roads, place names, and political boundaries. Useful when you need both imagery and street context.
  - **Google Terrain**: A topographic hillshade map showing elevation contours, shading, and terrain relief. Ideal for hiking, mountain surveys, and slope analysis.
  - **Google Roadmap**: A clean vector street map with roads, highways, and landmarks. Best for urban navigation and address-based work.
  - **OpenStreetMap (OSM)**: The world's largest community-maintained free map. Shows trails, footpaths, small villages, and local features often missing from commercial maps.
  - **Carto Light**: A minimalist, high-contrast light basemap designed to make your own colored data layers stand out prominently. Excellent for dense data visualization.
  - **Carto Dark**: A sleek dark-mode basemap that reduces eye strain during night operations and makes neon-colored data points pop visually.
  - **OpenTopoMap**: Detailed topographic contours with elevation lines, tree cover shading, hiking trail markers, and peak labels. The go-to map for outdoor field surveys.

  You can also load **offline MBTiles files** (.mbtiles) from your device storage. These are pre-downloaded tile packages that allow full map rendering without any internet connection whatsoever.

- **Step-by-Step Instructions**:
  1. Tap **Map (🗺️)** on the right-hand main toolbar.
  2. A horizontal gallery of map style preview cards appears.
  3. Scroll left/right through the cards. Each card shows a thumbnail preview of that map style.
  4. Tap your desired style card. The entire map background instantly switches to the new style.
  5. To load an offline MBTiles file, scroll to the bottom of the gallery and tap **"Load MBTiles from Storage"**, then browse to your `.mbtiles` file.

- **Real-World Use Case**: A forestry management team preparing for a mountain timber assessment starts their planning session using **OpenTopoMap** in the office to study elevation contours, identify steep slopes (anything above 30° incline), and plan their approach routes. Once they arrive on site, they switch to **Google Satellite** to visually verify whether dense tree canopies match the boundaries drawn on their timber license plot map. At night camp, they switch to **Carto Dark** to reduce screen brightness in the tent while reviewing tomorrow's waypoints.

---

## 1.2 Layers (Layer Stack & Visibility Control)

- **What It Is & How It Works**: The **Layers (📚)** drawer manages every spatial dataset that sits on top of your basemap. Think of it like a stack of transparent overhead projector sheets — each sheet (layer) contains different information, and you control which sheets are visible, how transparent each sheet is, and which order they stack in.

  The Layers panel provides:
  - **Visibility Checkboxes**: Toggle individual layers on or off instantly. Unchecking a layer hides it from the map without deleting any data.
  - **Opacity Sliders**: Drag a slider from 0% (completely invisible) to 100% (completely solid) to control how see-through each raster layer is. This is especially powerful for blending blueprint overlays with live satellite imagery.
  - **Z-Order Reordering**: Drag layer handles up or down to control which layers render on top of others. For example, you want point icons above polygon fills, and polygons above raster blueprint images.
  - **Layer Locking**: Tap the padlock icon to lock a layer. When locked, you cannot accidentally select or edit features on that layer — useful when overlaying reference data you don't want to modify.

- **Step-by-Step Instructions**:
  1. Tap **Layers (📚)** on the right toolbar. The layers panel slides out.
  2. You will see a list of all active layers — your MapCraft data folders, any imported raster MBTiles, GeoPDF overlays, and WMS/WMTS services.
  3. Check or uncheck the checkbox next to any layer name to toggle its visibility.
  4. Drag the opacity slider left or right. At 50%, you can see both the layer contents and the basemap underneath at the same time.
  5. Long-press and drag a layer handle (the ≡ icon) up or down to change its rendering order.
  6. Tap the padlock (🔒) icon to lock a layer so it becomes untouchable.
  7. Tap **Done** or tap outside the panel to close it.

- **Real-World Use Case**: A city water department has three datasets: (1) an imported MBTiles satellite basemap, (2) a scanned PDF blueprint of underground water pipes from 1985, and (3) live MapCraft point markers for new valve installations. Using the Layers panel, the engineer sets the PDF blueprint to 55% opacity so they can see the old pipe routes partially transparent over the satellite photo. They lock the blueprint layer so nobody accidentally moves it, then place new valve points on top. The result is a layered view showing old infrastructure, current ground conditions, and new installations simultaneously.

---

## 1.3 Console (Live System Log & Terminal)

- **What It Is & How It Works**: The **Console (💻)** opens a floating dark-mode diagnostic terminal window overlaid on the map. This is MapCraft's internal "black box" — it shows you every operation happening behind the scenes in real time.

  The Console displays:
  - **GPS/GNSS Activity**: Raw NMEA 0183 sentence feeds from your device's GPS chipset (e.g., `$GPGGA` fix data, `$GPRMC` speed/heading). This tells you exactly what your GPS is reporting.
  - **Sync Operations**: HTTP request and response logs showing what is being uploaded to or downloaded from your server, including file sizes, transfer speeds, and any error codes.
  - **Tile Cache Activity**: Whether map tiles are being loaded from local cache (fast) or fetched from the internet (slow), and how much storage the cache is consuming.
  - **Import/Export Progress**: Real-time status of file imports (parsing progress, feature counts) and export operations (rendering progress for MapReel videos, file compression status).
  - **Error Messages**: Any warnings or failures — GPS signal loss, network timeouts, file format errors, or database write failures.

- **Step-by-Step Instructions**:
  1. Tap **Console (💻)** to expand the overlay log panel at the bottom of the screen.
  2. Watch log messages scroll in real time as the app operates.
  3. Use the search/filter input box at the top of the console to type keywords like `GPS`, `SYNC`, `ERROR`, or `IMPORT` to filter and show only relevant messages.
  4. Tap **Pause** to freeze the scrolling output so you can read a specific error message.
  5. Tap **Clear** to wipe all current log entries.
  6. Tap **Export Log** to save the entire log history as a `.txt` file on your device — useful for sending diagnostic reports to your IT department.
  7. Tap **Console (💻)** again to close the panel.

- **Real-World Use Case**: A field technician notices that the auto-sync spinner has been stuck for 10 minutes. They open the Console and see repeated messages: `SYNC ERROR: HTTP 401 Unauthorized — Invalid Authentication Token`. This immediately tells the technician that the problem is not their cellular signal — it's an expired server API key. They call the IT office, get the new token, update it in Settings, and sync completes instantly.

---

## 1.4 Sync (Server Synchronization)

- **What It Is & How It Works**: The **Sync (☁️)** button initiates bi-directional synchronization between your local SQLite database on the phone and remote enterprise servers. This means it both *uploads* your new work (newly drawn points, edited polygon boundaries, attached photos, updated form entries) *and* simultaneously *downloads* any changes your teammates have made from their devices.

  MapCraft supports syncing to:
  - **FTP/SFTP Servers**: Traditional file-based upload to corporate file servers.
  - **REST API Endpoints**: HTTP-based sync to web-hosted GIS platforms.
  - **PostGIS Databases**: Direct spatial database synchronization for enterprise GIS deployments.

  The sync engine uses **differential synchronization** — it only transfers features that have actually changed since the last sync, not the entire database. This makes syncing fast and data-efficient even on slow cellular connections.

  During sync, MapCraft handles **conflict resolution** automatically. If two team members edited the same polygon boundary from different devices, MapCraft detects the conflict and prompts you to choose which version to keep, merge both changes, or create a duplicate for manual review.

- **Step-by-Step Instructions**:
  1. Ensure you have active network connectivity — Cellular data, Wi-Fi, or satellite internet.
  2. Tap **Sync (☁️)** on the right toolbar.
  3. A spinning progress ring appears showing upload/download progress.
  4. When complete, a **green checkmark (✓)** confirms full sync success.
  5. If errors occur, a **red exclamation mark (!)** appears. Tap it to see conflict details and resolve them.
  6. Check the Console log for detailed transfer statistics if needed.

- **Real-World Use Case**: A pipeline inspection company has 15 field inspectors spread across a 200-mile corridor. Each inspector maps pipe welds, valve conditions, and leak hazard areas throughout the day. At the end of their shift (or whenever they have cellular signal), each inspector taps **Sync**. Within seconds, all 15 inspectors' data merges into a single corporate PostGIS database. The office GIS manager can immediately see the complete picture on their desktop QGIS without ever visiting the field.

---

## 1.5 Photo Over Layer (Ground Image Overlays)

- **What It Is & How It Works**: **Photo Over Layer (🖼️)** allows you to import any image file — a photograph, a scanned paper blueprint, a drone aerial picture, an architectural site plan, or even a hand-drawn sketch — and pin it directly onto the map so it appears overlaid on top of real geographic coordinates.

  Once imported, the image appears as a floating rectangle on the map screen with draggable corner handles. You can:
  - **Move** it by dragging the center.
  - **Rotate** it by using two-finger twist gestures.
  - **Scale** it by pinching or stretching.
  - **Stretch** it non-uniformly by dragging individual corner handles.
  - **Adjust Transparency** using an opacity slider, so you can see both the photo and the live map beneath it at the same time.

  Once you position the image correctly over the ground features, you tap **Lock Position** to permanently anchor it to those GPS coordinates. After locking, the image moves, zooms, and rotates naturally with the map as you navigate.

- **Step-by-Step Instructions**:
  1. Tap **Photo Over Layer (🖼️)** on the right toolbar.
  2. Choose **"Select Image from Gallery"** to pick an existing photo, or **"Take New Photo"** to capture one with your camera.
  3. The image appears floating on the map with 4 corner handles and a central drag point.
  4. Drag the center to roughly position the image over the correct geographic area.
  5. Use two-finger pinch/twist to scale and rotate the image to match the ground features.
  6. Drag individual corner handles for fine alignment — match known features on the photo (e.g., building corners, road intersections) to the same features visible on the basemap.
  7. Adjust the **Transparency Slider** (0% to 100%) until you can see both the photo and the basemap blended together.
  8. Tap **Lock Position** to permanently anchor the image.

- **Real-World Use Case**: A construction supervisor has a JPG photograph of the architect's building site layout. They import this image using Photo Over Layer and stretch its four corners until the building outline on the photograph aligns perfectly with the property boundary stakes visible on the satellite basemap. Now every worker on site can open MapCraft, walk to any location, and see exactly where walls, foundations, doorways, and utility trenches should be relative to their current GPS feet position — even if the ground is still bare dirt.

---

## 1.6 Projection Arrow / Navigation Compass

- **What It Is & How It Works**: The **Projection Arrow (🧭)** serves two critical purposes: it controls your map screen's **orientation mode**, and it displays a live **heading direction vector** showing which way you are physically facing or moving.

  **Orientation Modes** (toggle by tapping):
  - **North-Up Mode**: The top of the map screen always points geographic North. This is the traditional map orientation. Your blue location dot rotates to show which direction you face, but the map itself stays fixed. Best for planning and overview.
  - **Heading-Up Mode**: The map dynamically rotates so the top of the screen always points in the direction you are physically walking or driving. Your blue location dot stays centered and pointed "up," while the entire map canvas spins around you. Best for real-time navigation where you want "what I see ahead of me" to always be at the top of the screen.

  **Projection Arrow**: In both modes, a blue directional arrow extends from your location dot. This arrow shows your heading direction and its length scales with your current speed — the faster you move, the longer the arrow projects, showing you roughly where you will be in several seconds.

- **Step-by-Step Instructions**:
  1. Tap **Compass (🧭)** once to switch from North-Up to Heading-Up mode. The map will smoothly rotate to align with your physical heading.
  2. Observe the blue projection arrow extending from your location marker. Its direction shows your heading; its length scales with speed.
  3. Tap **Compass (🧭)** again to return to North-Up mode.

- **Real-World Use Case**: A park ranger is walking through dense forest to find a specific marked tree. In **North-Up mode**, the ranger constantly has to mentally calculate "the target is northeast, I'm facing east, so I need to turn left." By switching to **Heading-Up mode**, the target always appears at the top of the screen when the ranger is walking directly toward it. If the target drifts to the right side of the screen, the ranger knows to turn right. This eliminates all mental map-rotation gymnastics and is especially valuable in poor visibility conditions like fog, rain, or dense vegetation.

---

## 1.7 More Menu (Utility Tools)

- **What It Is & How It Works**: The **More Menu (⋮)** is a pop-up menu that gives you instant access to secondary tools and utilities that are important but used less frequently than the main toolbar buttons.

  Tools available in the More Menu include:
  - **GNSS Status & Analysis**: Full satellite telemetry dashboard (see Chapter 10).
  - **Target Locator**: Distance triangulation tool for finding distant objects (see Chapter 9).
  - **Network Recorder**: Cellular signal strength logging for drive tests (see Chapter 9).
  - **Unit Converter**: Quick conversion calculator between measurement systems.
  - **Coordinate Formatter**: Convert coordinates between DD, DMS, MGRS, and UTM formats.
  - **Offline Cache**: Download map tiles for offline use (see Chapter 3).

- **Step-by-Step Instructions**:
  1. Tap **More (⋮)** on the toolbar.
  2. A pop-up list of available utility tools appears.
  3. Tap the desired tool to open it.

- **Real-World Use Case**: A military operations planner receives coordinates in MGRS format (`45Q CE 92481 19284`) from a field team. They open **More > Coordinate Formatter**, paste the MGRS string, and instantly see the equivalent Decimal Degrees (`21.866498, 84.927636`), DMS (`21°51'59.4"N 84°55'39.5"E`), and UTM (`45N 492481 2418192`) formats — all without leaving the map screen.

---

# CHAPTER 2: Left Slider Drawer (Folders & Forms)

The Left Slider Drawer is MapCraft's organizational backbone. Slide your finger from the left screen edge (or tap the hamburger menu ≡) to open it. This drawer contains your entire folder taxonomy — the hierarchical category system that organizes all your spatial data into meaningful groups.

Think of folders like filing cabinets: instead of having thousands of points, lines, and polygons dumped randomly on the map, you sort them into labeled categories so you can find, filter, style, and manage them efficiently.

```
┌─────────────────────────────────────────┐
│ 📁 PROJECT TAXONOMY & FOLDERS           │
│ ├── 📂 Infrastructure [⚙️]              │
│ │   ├── 📂 Water Hydrants [⚙️]           │
│ │   ├── 📂 Sewer Manholes [⚙️]           │
│ │   └── 📂 Main Supply Lines [⚙️]        │
│ ├── 📂 Hazards & Incidents [⚙️]         │
│ │   └── 📂 Gas Leak Reports [⚙️]         │
│ └── 📂 Vegetation Survey [⚙️]           │
│ ─────────────────────────────────────── │
│ [+ Add Root Folder]   [📋 Create Form] │
│ [✏️ Rename]          [🗑️ Delete Empty] │
└─────────────────────────────────────────┘
```

## 2.1 Folders & Subfolders

- **What It Is & How It Works**: A hierarchical file directory system for organizing spatial features into structured categories. You can create **Root Folders** (top-level categories) and **unlimited nested Subfolders** inside them. Every point, line, and polygon you create in MapCraft is saved inside a specific folder.

  Folders serve multiple purposes:
  - **Organization**: Group related features together (e.g., all fire hydrants in one folder, all sewer pipes in another).
  - **Visibility Control**: Show or hide an entire folder (and all its features) with one checkbox in the Layers panel.
  - **Bulk Styling**: Apply consistent colors, icons, and line styles to everything in a folder at once.
  - **Form Attachment**: Attach custom data collection forms to a folder so every feature created in that folder automatically requires specific field data.
  - **Export Filtering**: Export only specific folders instead of the entire project.

- **Step-by-Step Instructions**:
  1. Open the left drawer by sliding from the left edge or tapping **≡**.
  2. Tap **"+ Add Folder"** at the bottom to create a new top-level root folder. Type a name (e.g., *"Water Infrastructure"*) and tap **Create**.
  3. To create a subfolder, tap the **"+"** icon beside any existing folder. Type a subfolder name (e.g., *"Hydrants"*) and tap **Create**.
  4. You can nest subfolders as deep as you need — subfolders within subfolders within subfolders.
  5. To move a feature from one folder to another, open the feature's details and change the **Folder** dropdown.
  6. To reorder folders, long-press and drag them up or down in the list.

- **Real-World Use Case**: An electric utility company doing a full infrastructure audit creates this folder taxonomy:
  - 📂 *Power Grid* (root)
    - 📂 *Substations* (subfolder — for transformer station polygons)
    - 📂 *Utility Poles* (subfolder — for individual pole point markers)
    - 📂 *High-Voltage Lines* (subfolder — for overhead line polylines)
    - 📂 *Underground Cables* (subfolder — for buried cable polylines)
    - 📂 *Damaged Equipment* (subfolder — for defect reports with mandatory photos)

  This clean structure means a field crew checking substations only needs to enable the *Substations* subfolder — they don't have to see the thousands of utility pole markers cluttering their screen.

---

## 2.2 Folder Style Customizer

- **What It Is & How It Works**: Assigns global visual styling rules to every feature contained within a specific folder or subfolder. Instead of styling each feature individually, you set one style at the folder level and it automatically applies to everything inside.

  Customizable properties include:
  - **Marker Icon**: Choose from built-in GIS icons — Pin, Hydrant, Pole, Valve, Tower, Warning Sign, House, Tree, Car, Boat, Flag, Star, Diamond, or custom uploaded icons.
  - **Marker Color**: Pick from a color swatch palette or type a custom Hex color code (e.g., `#FF0000` for bright red).
  - **Line Stroke Color**: Set the color of polyline and polygon border lines.
  - **Line Stroke Weight**: Set line thickness from 1px (hairline) to 15px (thick bold).
  - **Line Stroke Style**: Choose Solid, Dashed, or Dotted line patterns.
  - **Polygon Fill Color**: Set the interior fill color for area shapes.
  - **Polygon Fill Opacity**: Set fill transparency from 0% (completely transparent — outline only) to 100% (completely solid — no see-through).

- **Step-by-Step Instructions**:
  1. In the left drawer, tap the **Gear (⚙️)** icon next to the folder you want to style.
  2. The style editor panel opens, showing all customizable properties.
  3. Tap the **Marker Icon** selector to browse and choose an icon.
  4. Tap the **Color** swatch to pick a color, or tap the Hex input field and type a code like `#2196F3`.
  5. Drag the **Line Weight** slider to set border thickness.
  6. Tap the **Fill Opacity** slider and drag it to your desired transparency level.
  7. Tap **Apply to All Folder Items** to instantly update every feature in this folder.

- **Real-World Use Case**: A fire department emergency response team sets up their folders like this:
  - *Fire Hydrants* folder → Bright red hydrant icons, 3px solid red line → Instantly visible during emergencies.
  - *Water Reservoirs* folder → Blue polygon fill at 40% opacity → Shows water storage areas as translucent blue zones.
  - *Hazard Zones* folder → Orange dashed border, 2px, yellow fill at 20% → Draws attention without obscuring the basemap.
  
  When the team opens their map during a fire call, they can instantly distinguish hydrants (red pins), water sources (blue shading), and hazard areas (orange borders) at a glance — no confusion, no wasted time.

---

## 2.3 Create Form Templates (Dynamic Attribute Forms)

- **What It Is & How It Works**: A low-code visual form builder that allows you to create custom field data collection questionnaires attached to a folder. When someone creates any new feature inside that folder, MapCraft automatically presents the form and (optionally) requires them to fill it out before saving.

  This turns MapCraft from a simple map drawing tool into a full **mobile field data collection platform** — you're not just dropping pins on a map, you're collecting structured, consistent, validated data at every pin.

  **Supported Form Field Types**:
  - **Short Text**: Single-line text input. Use for names, IDs, serial numbers (e.g., *"Asset ID"*, *"Inspector Name"*).
  - **Long Notes / Paragraph**: Multi-line text box for detailed descriptions, observations, or freeform notes (e.g., *"Defect Description"*).
  - **Numeric Input**: Integer or decimal number entry with optional minimum/maximum validation (e.g., *"Pipe Diameter (inches)"* with min=1, max=48).
  - **Single-Select Dropdown**: A dropdown picker with pre-defined choices. The user selects exactly one option (e.g., *"Condition Rating"* with options: *Excellent, Good, Fair, Poor, Critical*).
  - **Multi-Select Checkbox Group**: A list of checkboxes where the user can select multiple options (e.g., *"Visible Defects"* with options: *Rust, Cracks, Leaking, Corrosion, Missing Parts*).
  - **Date & Time Picker**: A calendar/clock selector for recording dates and times (e.g., *"Inspection Date"*).
  - **Mandatory Photo Capture**: Requires the user to take a geotagged photo with their device camera before saving. The photo is stored with embedded GPS coordinates and timestamp (e.g., *"Site Photo — Required"*).
  - **Barcode / QR Code Scanner**: Opens the camera to scan barcodes or QR codes and stores the scanned data as text (e.g., *"Equipment Barcode"*).

  Each field can be marked as **Required** (mandatory — the user cannot save the feature without completing this field) or **Optional**.

- **Step-by-Step Instructions**:
  1. Tap the **Gear (⚙️)** icon next to a folder in the left drawer.
  2. Tap **"Create Form"** inside the folder settings panel.
  3. The form builder opens with an empty form.
  4. Tap **"+ Add Field"** to add your first form field.
  5. Select the field type (e.g., *Dropdown*).
  6. Type the field label (e.g., *"Pipe Material"*).
  7. If it's a dropdown, type each option on a new line (e.g., *PVC, Cast Iron, Copper, HDPE, Concrete*).
  8. Toggle the **Required** switch ON if this field must be completed before saving.
  9. Repeat steps 4-8 for each additional field.
  10. Tap **Save Form Template** when done.

  Now, every time anyone creates a new point, line, or polygon inside this folder, the form pops up automatically and they must fill it out.

- **Real-World Use Case**: A bridge inspection authority creates a form attached to their *Bridge Inspections* folder with these fields:
  - *Bridge Name* (Short Text, Required)
  - *Inspection Date* (Date Picker, Required)
  - *Inspector Name* (Short Text, Required)
  - *Structural Rating* (Dropdown: Excellent/Good/Fair/Poor/Critical, Required)
  - *Visible Defects* (Multi-Checkbox: Rust, Cracks, Spalling, Rebar Exposed, Settlement, Required)
  - *Estimated Repair Cost* (Numeric, Optional)
  - *Defect Photo* (Camera Photo, Required)
  - *Notes* (Long Text, Optional)

  When an inspector drops a pin on a bridge location, MapCraft forces them to fill out every required field and take a photo before saving. This ensures no bridge inspection is ever saved with missing critical data.

---

## 2.4 Rename Folder & Delete Empty Folders

- **Rename Folder**: Changes the display title of any root folder or nested subfolder without breaking any underlying database relationships. All features remain inside the folder — only the visible name changes.
  - **How to use**: Long-press any folder name in the left drawer ➔ Tap **"Rename"** ➔ Type new name ➔ Tap **Confirm**.

- **Delete Empty Folders**: Automatically scans your entire project and removes all folders that contain zero spatial features (no points, lines, or polygons). This is a cleanup utility that keeps your folder taxonomy tidy after reorganizing.
  - **How to use**: Open left drawer ➔ Tap **"Delete Empty Folders"** at the bottom ➔ MapCraft scans and lists all empty folders ➔ Tap **"Delete All Empty"** to purge them.

  *Safety note*: This only deletes folders that are truly empty. Folders containing even one feature are never touched.

---

# CHAPTER 3: Projects, List View, Search & Offline Cache

## 3.1 Projects Workspace

- **What It Is & How It Works**: Projects are completely isolated workspace containers — like separate filing cabinets for different jobs. Each project has its own database, its own folders, its own features, its own form templates, and its own settings. Nothing from Project A ever appears in or contaminates Project B.

  This isolation is critical for professional use where you work on multiple client jobs, different geographic regions, or separate phases of a long-term project.

- **Step-by-Step Instructions**:
  1. Tap **Projects (📁)** on the top action bar.
  2. You see a list of all existing projects with their name, creation date, and feature counts.
  3. Tap **"+ Create Project"** to start a new one.
  4. Type a project name (e.g., *"Highway 9 Phase 2 Expansion"*).
  5. Optionally select a starter template (*Blank*, *Municipal Survey*, *Forestry*, *Cellular Test*) that pre-creates common folder structures.
  6. Tap **Initialize**. The new project opens immediately.
  7. To switch between projects, tap **Projects (📁)** again and tap a different project name.

- **Real-World Use Case**: A land surveying consultant works for three clients simultaneously. They create separate projects: *"Anderson Property Boundary Survey"*, *"City of Springfield Park Renovation"*, and *"Highway 9 Right-of-Way"*. When the client calls about the park project, the surveyor switches to that project and immediately sees only the park data — no risk of accidentally editing highway data or mixing up client information.

---

## 3.2 List View & Proximity Filtering

- **What It Is & How It Works**: A tabular, scrollable sheet that lists all mapped features in the active project, sorted dynamically by real-time distance from the user's current GPS location. Instead of visually scanning the map to find a specific feature, you can search through a structured list.

  The list shows each feature's name, folder, type (point/line/polygon), and how far away it is from you right now (e.g., *"Valve #402 — 12 meters North-West"*). The distances update in real time as you move.

- **Step-by-Step Instructions**:
  1. Slide up the bottom sheet from the main screen.
  2. Select tabs at the top: *Points*, *Lines*, or *Polygons* to filter by feature type.
  3. Use the search/filter input to type keywords to narrow the list (e.g., type *"hydrant"* to see only hydrant features).
  4. Features are automatically sorted by distance — closest features at the top.
  5. Tap any listed item to instantly center the map camera on it and highlight it.

- **Real-World Use Case**: A water utility repair crew is searching for a buried shutoff valve in tall overgrown brush. The valve is somewhere nearby but invisible under vegetation. The crew leader opens **List View**, types *"valve"*, and sees: *"Valve #402 — 12 meters away North-West"*. They walk 12 meters northwest and find the valve hidden under leaves.

---

## 3.3 Global Search Bar (Address & Coordinate Formats)

- **What It Is & How It Works**: An intelligent search engine at the top of the screen capable of locating online street addresses, landmark names, named project features, or raw coordinate strings in four standard formats:
  - **Decimal Degrees (DD)**: `21.866498, 84.927636`
  - **Degrees Minutes Seconds (DMS)**: `21°51'59.4"N 84°55'39.5"E`
  - **Military Grid Reference System (MGRS)**: `45Q CE 92481 19284`
  - **Universal Transverse Mercator (UTM)**: `45N 492481 2418192`

  MapCraft auto-detects the coordinate format you paste — you don't need to tell it which format you're using.

- **Step-by-Step Instructions**:
  1. Tap the top search input bar.
  2. Type a street address (e.g., *"123 Main Street, Springfield"*), a pin label (e.g., *"Valve #402"*), or paste a coordinate string in any format.
  3. Tap **Search / Jump**. The map smoothly pans and zooms to center on the result.

- **Real-World Use Case**: A search-and-rescue coordinator receives a radio call: *"Lost hiker's phone last pinged at MGRS 45Q CE 92481 19284"*. The coordinator pastes this string into MapCraft's search bar. The map instantly jumps to the exact location — a remote forest clearing 3 miles off the nearest trail.

---

## 3.4 Offline Cache Manager

- **What It Is & How It Works**: Allows users to download basemap tiles (zoom levels 1 through 20) over a defined geographic area for offline operation. Once cached, you have a fully functional, zoomable map that works without any internet connection whatsoever.

  Zoom level 1 shows the entire world on one tile. Zoom level 18 shows individual buildings and trees. Higher zoom levels mean more tiles to download and more storage space required, but finer detail when offline.

- **Step-by-Step Instructions**:
  1. Pan and zoom the map screen to cover your entire intended survey area.
  2. Open **Settings > Offline Cache** or **More > Offline Cache**.
  3. Tap **"Download Region Tiles"**.
  4. Set the maximum zoom level (e.g., Level 16 for roads/buildings, Level 18 for fine detail).
  5. MapCraft shows the estimated download size (e.g., *"427 MB, ~12,000 tiles"*).
  6. Tap **Start Download**. A progress bar shows download completion.
  7. Once complete, the tiles are stored locally. You can now turn off cellular data and Wi-Fi entirely — the map works offline.

- **Real-World Use Case**: A wilderness search-and-rescue team is preparing for a mission in a national park with zero cellular coverage. Before leaving the station (which has Wi-Fi), they open Offline Cache, zoom the map to cover the entire park area, set zoom level 18, and download 800 MB of satellite tiles. In the field, deep in a canyon with no signal, they have full satellite basemap imagery at their fingertips.

---

# CHAPTER 4: Spatial Creation Tools

These are the six core drawing tools that create spatial data on your map. They are accessed from the bottom drawing toolbar that appears when you enter creation mode.

```
CREATION TOOLBAR:  [📍 Point]  [📏 Line]  [🔷 Area]  [⭕ Circle]  [🏃 Track]  [📐 Measure]
```

## 4.1 Point (📍)

- **What It Is & How It Works**: Drops discrete single-coordinate point markers on the map canvas. Each point stores a latitude, longitude, and (optionally) elevation. Points support custom icons, photo attachments, and dynamic attribute form responses. Points are the simplest spatial feature type — they represent a specific location with no length or area.

- **Step-by-Step Instructions**: 
  1. Tap **Point (📍)** on the drawing toolbar.
  2. Choose your input method (Finger Tap on map, GPS drop at your feet, or Manual coordinate entry — see Chapter 5).
  3. Tap the map at your desired location. A point marker appears.
  4. If the folder has a form template, the form pops up — fill in all required fields.
  5. Optionally attach a photo by tapping the camera icon.
  6. Tap **Save (💾)** to permanently save the point.

- **Real-World Use Case**: A utility company maps every streetlight on a 5-mile road. An inspector walks the road, and at each pole they tap the map to drop a point, fill in the form (Pole ID, Bulb Type, Height, Condition), snap a photo, and save. In one morning, they create 200 precisely-located, fully-documented streetlight records.

---

## 4.2 Line (📏)

- **What It Is & How It Works**: Draws connected multi-vertex polylines — paths made of straight segments connected at vertex nodes. As you add vertices, MapCraft automatically calculates and displays the total cumulative distance in real time. Lines represent linear features like roads, rivers, pipes, fences, cables, and trails.

- **Step-by-Step Instructions**: 
  1. Tap **Line (📏)** on the drawing toolbar.
  2. Choose your input method (Finger Tap, Finger Draw, GPS drop, or Manual coords).
  3. Tap sequential locations on the map to place vertex nodes. Each tap adds a new straight segment.
  4. Watch the live distance counter update with each new vertex (e.g., *"Total: 1,247.3 m"*).
  5. Tap **Save (💾)** when the line is complete.

- **Real-World Use Case**: A telecom contractor is mapping the route of a new 2-mile fiber optic cable being buried underground. They follow the trench, tapping the map at every bend and corner to create a precise multi-vertex polyline. MapCraft shows the total cable length as 3,218 meters — matching the cable purchase order.

---

## 4.3 Area / Polygon (🔷)

- **What It Is & How It Works**: Creates enclosed vector polygon shapes with a minimum of 3 vertices. MapCraft automatically calculates and displays both the perimeter length and the enclosed surface area in real time as you draw. Polygons represent bounded areas like property boundaries, building footprints, farm fields, lakes, parking lots, flood zones, or military restricted areas.

- **Step-by-Step Instructions**: 
  1. Tap **Area (🔷)** on the drawing toolbar.
  2. Tap 3 or more boundary points on the screen to define the polygon shape. MapCraft draws straight edges between your vertices and automatically closes the shape.
  3. Watch the live perimeter and area counters (e.g., *"Perimeter: 842 m | Area: 4.21 hectares"*).
  4. Tap **Save (💾)** when the polygon boundary is complete.

- **Real-World Use Case**: A farmer wants to know exactly how many acres of corn field they have to plan fertilizer purchases. They walk the field boundaries with GPS, tapping each corner. MapCraft calculates the enclosed area as *18.4 acres* — saving the farmer from expensive over-ordering or dangerous under-ordering of fertilizer.

---

## 4.4 Circle (⭕)

- **What It Is & How It Works**: Generates a mathematically perfect circular polygon based on a center point coordinate and a typed radius in meters or feet. Unlike hand-drawn polygons, circles are geometrically precise — every point on the boundary is exactly the specified distance from the center.

- **Step-by-Step Instructions**: 
  1. Tap **Circle (⭕)** on the drawing toolbar.
  2. Tap the map to set the center point of the circle.
  3. A dialog box appears asking for the radius value. Type the desired radius (e.g., `250` meters).
  4. Tap **Generate Circle**. A perfect circle polygon appears on the map.
  5. Tap **Save (💾)**.

- **Real-World Use Case**: An environmental response officer arrives at a chemical tanker spill on a highway. Per safety regulations, they must establish a 250-meter evacuation exclusion zone around the spill point. They tap the spill location, type `250` as the radius, and instantly have a precise circular safety perimeter drawn on the map. This circle is shared with police and fire teams to coordinate road closures.

---

## 4.5 Track Logger (🏃)

- **What It Is & How It Works**: Continuously logs your real-time GPS trajectory as a polyline as you move across terrain — walking, driving, boating, or cycling. Unlike manually drawing a line by tapping, the Track Logger automatically drops GPS coordinate points at configurable time or distance intervals, recording a breadcrumb trail of everywhere you go.

  Each track point stores: latitude, longitude, elevation, timestamp, speed, bearing, and satellite accuracy metrics.

- **Step-by-Step Instructions**: 
  1. Tap **Track (🏃)** on the drawing toolbar.
  2. Tap **"Start Track Recording"**. A recording indicator appears on screen.
  3. Walk, drive, or move along your route. MapCraft records your position automatically.
  4. Tap **"Pause"** if you need to stop temporarily (e.g., lunch break) without creating gaps.
  5. Tap **"Resume"** to continue recording.
  6. Tap **"Stop & Save Track"** when your route is complete.

- **Real-World Use Case**: A national park ranger walks a proposed new hiking trail route through the forest. The Track Logger records every step, every switchback, every creek crossing. Back at the ranger station, they export the track as a GPX file and send it to the trail design team, who use it to plan signage, rest areas, and difficulty ratings based on the actual recorded elevations and slope angles.

---

## 4.6 Measure Tool (📐)

- **What It Is & How It Works**: A temporary "digital tape measure" for quick distance and area calculations that does NOT save any data to your project database. It's a scratchpad ruler — use it, read the measurement, and discard it. Nothing permanent is created.

  You can measure:
  - **Linear distance** between 2 or more tapped points (displayed as total cumulative distance).
  - **Enclosed area** by tapping 3+ points to form a temporary polygon.

- **Step-by-Step Instructions**: 
  1. Tap **Measure (📐)** on the drawing toolbar.
  2. Tap sequential points on the map. A live measurement badge appears showing cumulative distance.
  3. For area measurement, tap 3+ points and the enclosed area is displayed alongside perimeter.
  4. Read the measurement values from the on-screen overlay badge.
  5. Tap **Clear Canvas** to erase all measurement lines and start fresh.

- **Real-World Use Case**: A building contractor needs to quickly check if a proposed shed location is at least 10 meters from the property line (as required by local zoning). They tap the shed location and tap the nearest property boundary — the measurement badge reads *"12.3 m"*. The shed passes the setback requirement. No permanent database entry was created; it was just a quick check.

---

# CHAPTER 5: Vector Creation Modes & Precision Editing Engine

When creating or editing polylines and polygons, MapCraft offers multiple vertex input methods and CAD-grade editing tools. These modes control *how* points are placed — whether by tapping the screen, drawing freehand, dropping at GPS position, or typing exact coordinates.

```
┌────────────────────────────────────────────────────────┐
│  DRAWING MODES:                                        │
│  [👆 Finger Tap]   [✏️ Finger Draw]   [📍 GPS Drop]      │
│  [⌨️ Manual Coords] [🧲 Magnetic Snap] [↶ Undo / ↷ Redo]│
└────────────────────────────────────────────────────────┘
```

## 5.1 Add / Vertex Insertion

- **What It Is & How It Works**: Extends an active drawing path by adding new vertices to the end of the path, or inserts new vertices into the middle of an existing line segment by tapping the segment's midpoint marker.

  When editing an existing line, small circular midpoint markers appear at the center of each segment. Tapping one of these midpoint markers inserts a new draggable vertex at that position, effectively splitting a straight segment into two segments with a new bend point.

- **Real-World Use Case**: After drawing a pipeline path, you discover the pipe actually bends around a tree you didn't notice initially. Tap the midpoint of the segment near the tree, and a new vertex appears that you can drag to create the correct bend.

---

## 5.2 Manual Coordinate Entry

- **What It Is & How It Works**: Allows users to type numerical Latitude, Longitude, and Elevation values via a popup numeric keypad instead of tapping the touch screen. This is essential when you have precise surveyed coordinates from paper documents, legal deeds, or total station printouts.

- **Step-by-Step Instructions**:
  1. During any drawing operation, tap the **Manual Entry** mode button.
  2. A dialog box appears with fields for Latitude, Longitude, and (optionally) Elevation.
  3. Type the exact values (e.g., Lat: `21.866498`, Lon: `84.927636`, Elev: `312.5`).
  4. Tap **Add Point**. The vertex is placed at those precise coordinates.
  5. Repeat for additional points.

- **Real-World Use Case**: A land surveyor has a paper legal deed that specifies property boundary corners as exact DD coordinates: *"NE Corner: 21.866498, 84.927636; SE Corner: 21.865012, 84.927641..."*. Instead of trying to tap the map at these exact microscopic locations, the surveyor types each coordinate set into the Manual Entry dialog and gets pixel-perfect boundary placement.

---

## 5.3 Finger Tap Mode

- **What It Is & How It Works**: Discrete point placement mode — the default and most commonly used mode. Each screen tap drops a single, clean vertex node at the exact map coordinates under your crosshair. Vertices are placed only where and when you tap, giving you full control.

  This mode is ideal for structured geometric shapes with straight edges and precise corners — building outlines, property boundaries, road segments, or any feature with clear angular bends.

- **Real-World Use Case**: Mapping a rectangular building footprint by tapping the four corners. Each tap places a corner vertex exactly where you touch, creating clean 90-degree corners.

---

## 5.4 Finger Draw / Freehand Mode

- **What It Is & How It Works**: Freehand continuous drawing mode. Instead of tapping individual points, you drag your finger or stylus continuously across the screen. MapCraft records a smooth stream of vertex nodes following your finger path. 

  Because raw finger tracking creates hundreds of unnecessary closely-spaced nodes, MapCraft applies **Douglas-Peucker path smoothing** — an algorithm that automatically removes redundant points while preserving the true shape of curves. The result is a clean, smooth polyline or polygon boundary with far fewer vertices than your raw finger movement.

- **Step-by-Step Instructions**:
  1. Select **Finger Draw** mode from the drawing mode selector.
  2. Press your finger onto the map and drag it along the path you want to trace.
  3. Lift your finger when done. MapCraft automatically smooths the path.

- **Real-World Use Case**: A biologist tracing the irregular shoreline of a lake. The shoreline has curves, inlets, and peninsulas that would take hundreds of individual taps to map precisely. With Finger Draw, they simply drag their finger along the shoreline on the satellite imagery, and MapCraft captures the entire shape in one smooth gesture.

---

## 5.5 GPS Location Drop

- **What It Is & How It Works**: Uses your phone's real-time GNSS location to drop a vertex node exactly at your physical feet. Instead of tapping the screen, you physically walk to the location and press a button — the vertex is placed at your current GPS coordinates.

  This mode is ideal for high-accuracy field surveys where you physically stand on each boundary corner, pipe junction, or landmark location.

- **Step-by-Step Instructions**:
  1. Select **GPS Drop** mode from the drawing mode selector.
  2. Physically walk to the location you want to mark.
  3. Stand still for a few seconds to let the GPS fix stabilize.
  4. Tap **"Drop at My GPS"**. A vertex is placed at your current GPS coordinates.
  5. Walk to the next point and repeat.

- **Real-World Use Case**: A land surveyor physically walks to each concrete boundary monument embedded in the ground, stands directly on top of it, waits for a stable GPS fix, and taps **Drop**. Each boundary corner is recorded at the surveyor's exact physical position with no screen-tapping inaccuracy.

---

## 5.6 Update Point & Delete Point

- **Update Point**: Touch, hold, and drag any existing vertex node dot to shift its geographic position. The node snaps to your finger position as you drag, and all connected line segments update in real time.

- **Delete Point**: Tap a specific vertex node to select it (it highlights), then select **"Delete Point"** from the action menu. The vertex is removed and the adjacent segments reconnect directly, smoothing out the path.

- **Real-World Use Case**: You mapped a fence line last week but one corner vertex is 3 meters off because your GPS signal was bouncing off a metal building. You tap and hold that vertex node, drag it to the correct position using the satellite imagery as reference, and release. The fence line is now accurate.

---

## 5.7 Hole Editing Mode (Polygon Courtyards & Donuts)

- **What It Is & How It Works**: Cuts internal hollow rings inside an existing outer polygon shape, creating a "donut" topology. The enclosed inner hole area is automatically subtracted from the polygon's total surface area calculations.

  This is essential for mapping buildings with interior courtyards, lakes with islands, parks with parking lots cut out, or any area where part of the enclosed space doesn't belong.

- **Step-by-Step Instructions**: 
  1. Tap an existing polygon to select it.
  2. Tap **Edit** from the action menu.
  3. Select **"Cut Hole"** from the editing tools.
  4. Draw the inner boundary shape inside the outer polygon (using any input mode — tap, draw, GPS, or manual).
  5. Tap **Save Hole**. The hole appears as a transparent cutout, and the area calculation updates (total area minus hole area).

- **Real-World Use Case**: Mapping a U-shaped apartment building that encloses an open-air courtyard. The outer polygon covers the entire building lot including the courtyard. Then you cut a hole for the courtyard area. Now the polygon area calculation shows only the actual built floor area (e.g., 2,400 sq m total minus 800 sq m courtyard = 1,600 sq m actual building footprint).

---

## 5.8 Undo (↶) & Redo (↷) Actions

- **Undo (↶)**: Reverts the last placed vertex point, deleted node, or geometric move in your active edit stack. You can undo multiple times to step back through your recent actions.
- **Redo (↷)**: Re-applies the previously undone action, stepping forward through the undo stack.

These buttons appear in the drawing toolbar during any active editing session. They only affect the current editing session — once you tap Save, the undo history is cleared.

---

## 5.9 Magnetic Snapping Engine

- **What It Is & How It Works**: A CAD-grade snapping engine that magnetically locks your drawing crosshair onto existing geometric features when you draw near them. This ensures topologically clean vector connections — new features connect precisely to existing ones without tiny gaps or overlaps.

  Three snapping modes:
  - **Vertex Snap**: When your crosshair approaches an existing vertex node (corner point), it snaps and locks precisely onto that node. This guarantees two features share the exact same corner coordinate.
  - **Edge Snap**: When your crosshair approaches an existing line segment edge, it snaps perpendicularly onto the nearest point on that edge. This guarantees a new feature connects cleanly to the side of an existing line.
  - **Midpoint Snap**: When your crosshair approaches the mathematical midpoint of an existing segment, it snaps onto that exact center point. Useful for connecting features at the precise middle of a segment.

  The snap radius (how close your crosshair needs to be before snapping activates) is configurable in Settings.

- **Real-World Use Case**: A water utility engineer is mapping a T-junction where a branch pipe connects to a main trunk line. Without snapping, the branch endpoint might be 0.3 meters away from the main line — creating a tiny gap that causes topology errors in GIS analysis. With **Vertex Snap** enabled, the branch endpoint magnetically locks onto the exact vertex of the main line, creating a topologically perfect connection with zero gap.

---

# CHAPTER 6: Polygon Action Suite (Tapping a Polygon)

Tapping any existing polygon shape on the map opens the **Polygon Action Menu** — a popup panel offering 9 operations you can perform on that specific shape:

```
┌────────────────────────────────────────────────────────┐
│  🔷 POLYGON ACTION MENU                                │
│  [📋 Details]     [✏️ Edit Points]    [🎨 Style Colors]│
│  [🧭 Navigation]  [📡 Radar Alert]    [📷 Photos]      │
│  [🛡️ Geofence]    [💾 Standalone Exp] [📄 Duplicate]   │
└────────────────────────────────────────────────────────┘
```

## 6.1 Polygon Details

- **What It Is & How It Works**: Displays comprehensive spatial metadata about the selected polygon, including:
  - **Surface Area** displayed simultaneously in multiple units: Acres, Hectares, Square Meters, Square Feet, Square Kilometers, Square Miles.
  - **Perimeter Length** in meters, kilometers, feet, and miles.
  - **Centroid Coordinates**: The geometric center point of the polygon in your selected coordinate format.
  - **Vertex Count**: How many corner points define the boundary.
  - **Folder Location**: Which folder this polygon belongs to.
  - **Creation Date & Time**: When it was originally created.
  - **Last Modified Date**: When it was last edited.
  - **Attribute Form Data**: All filled-in form responses (if a form template is attached to the folder).

- **Real-World Use Case**: A real estate attorney reviewing a property boundary polygon taps **Details** and sees: *Area: 4.21 acres (1.70 hectares) | Perimeter: 842 meters | Vertices: 12*. This matches the legal deed description, confirming the digital boundary is accurate before signing the purchase contract.

---

## 6.2 Edit Points & Geometry

- **What It Is & How It Works**: Re-opens the full vector editing engine on the selected polygon, allowing you to:
  - **Move** existing vertex nodes by dragging them.
  - **Insert** new vertices along edges by tapping midpoint markers.
  - **Delete** vertices by selecting them and tapping Delete.
  - **Cut Holes** (inner rings) using the Hole Edit mode.
  - **Use Undo/Redo** to step through changes.
  - **Enable Snapping** to lock onto nearby features.

- **Real-World Use Case**: A property was renovated and the building footprint expanded by 5 meters on the north side. The GIS technician taps the building polygon, selects **Edit**, drags the northern vertices 5 meters northward using the satellite imagery as reference, and saves. The polygon now reflects the current building shape.

---

## 6.3 Polygon Styling & Opacity

- **What It Is & How It Works**: Opens visual customization controls for the selected polygon. You can change:
  - **Border Stroke Color**: The color of the polygon's outline.
  - **Border Stroke Weight**: Line thickness in pixels (1px hairline to 15px bold).
  - **Border Stroke Style**: Solid, Dashed, or Dotted patterns.
  - **Fill Color**: The interior fill color of the polygon.
  - **Fill Opacity**: Transparency level from 0% (no fill — outline only) to 100% (completely solid fill).

  Style changes can be applied to just the selected polygon or inherited from the folder style.

- **Real-World Use Case**: A flood risk management agency colors their flood zone polygons: *High Risk* zones in red at 40% opacity, *Medium Risk* in orange at 30%, and *Low Risk* in yellow at 20%. The transparency allows the underlying street map to remain visible through the colored flood zones.

---

## 6.4 Navigation

- **What It Is & How It Works**: Starts turn-by-turn or straight-line navigation guidance along the perimeter boundary of the selected polygon. MapCraft calculates the total perimeter distance, breaks it into directional segments, and provides voice/visual guidance as you walk or drive around the boundary.

- **Real-World Use Case**: A ranch inspector needs to drive around an entire 200-acre property boundary checking fence post conditions. They tap the ranch polygon, select **Navigation**, and MapCraft guides them along the entire 5.2 km perimeter — telling them when to turn at each corner.

---

## 6.5 Radar Distance Proximity Alerts

- **What It Is & How It Works**: Activates a dynamic proximity detection system around the selected polygon. As you physically walk or drive toward the polygon boundary, MapCraft continuously calculates your real-time distance to the nearest edge and triggers escalating audio beeps, vibrations, and visual warnings as you approach.

  The alert thresholds are configurable (e.g., first beep at 200m, faster beeps at 100m, continuous alarm at 50m).

- **Real-World Use Case**: A construction site has an underground high-voltage electrical cable zone marked as a polygon. Heavy excavator operators enable **Radar** on this polygon. As their machine approaches the cable zone, their phone starts beeping — slow beeps at 100 meters, fast beeps at 50 meters, and a continuous alarm at 25 meters. This prevents catastrophic underground cable strikes.

---

## 6.6 Photo Attachments & Inspection Logs

- **What It Is & How It Works**: Allows field users to capture new geotagged photos with the device camera or attach existing photos from the gallery to the selected polygon's record. Photos are embedded with GPS coordinates and timestamps automatically.

- **Real-World Use Case**: A property inspector photographs all four sides of a building, the roof, and any visible damage. All photos are attached to the building polygon — creating a complete visual inspection record tied to the exact spatial location.

---

## 6.7 Watch Geofence (Real-Time Perimeter Alarms)

- **What It Is & How It Works**: Enables background real-time geofence monitoring. MapCraft monitors your GPS location continuously — even when the screen is off — and triggers an immediate audible alarm, vibration, and push notification whenever you **Enter** or **Exit** the polygon boundary.

  Unlike the Radar feature (which measures distance while the app is actively open), the Geofence runs as a persistent background service. It works while you're sleeping, driving, or using other apps.

- **Step-by-Step Instructions**:
  1. Tap a polygon to open its action menu.
  2. Tap **Watch Geofence**.
  3. Select trigger type: **On Entry** (alarm when you enter the zone), **On Exit** (alarm when you leave the zone), or **Both**.
  4. Tap **Activate**. A persistent notification appears showing the active geofence.
  5. To deactivate, open the notification and tap **Stop Monitoring**.

- **Real-World Use Case**: A lone field inspector working near a restricted military exclusion zone activates **Watch Geofence** with an **On Entry** trigger. If they accidentally wander past the boundary while focused on their equipment, a loud alarm sounds immediately — preventing a security incident.

---

## 6.8 Standalone Shape Export

- **What It Is & How It Works**: Exports only the selected polygon feature into a single standalone GIS file, independent of the rest of the project. Supported export formats include KML, GeoJSON, CSV, and GeoPackage.

  The exported file can be shared instantly via email, messaging apps, Bluetooth, or cloud storage.

- **Real-World Use Case**: A property assessor draws a boundary polygon for a client's land parcel and immediately exports it as a KML file. They email the KML to the client, who opens it in Google Earth on their desktop computer to review the boundary overlaid on satellite imagery.

---

## 6.9 Duplicate Polygon

- **What It Is & How It Works**: Creates an identical duplicate copy of the selected polygon — same geometry, same attributes, same form data — and places it slightly offset from the original on the map. The duplicate is a fully independent feature that can be moved, resized, or edited without affecting the original.

- **Real-World Use Case**: A housing developer is planning a subdivision with 30 identical house footprints. They meticulously draw one perfect house polygon, then **Duplicate** it 29 times. Each copy is then dragged to its planned lot position on the site layout. This is far faster than drawing 30 identical houses from scratch.

---

# CHAPTER 7: Line Action Suite (Tapping a Polyline)

Tapping any existing polyline feature opens the **Line Action Menu** — offering 6 operations specific to linear features:

```
┌────────────────────────────────────────────────────────┐
│  📏 LINE ACTION MENU                                   │
│  [▶️ Continue End] [◀️ Continue Start] [🔄 Reverse]     │
│  [🔗 Merge Lines]  [✂️ Split Line]      [📊 Segments]  │
└────────────────────────────────────────────────────────┘
```

## 7.1 Continue from End

- **What It Is & How It Works**: Resumes drawing from the last endpoint node of the existing polyline, allowing users to seamlessly append new vertices to extend the line further. The editing interface opens with the crosshair positioned at the last vertex, and every new tap adds a new segment extending from that endpoint.

- **Real-World Use Case**: A pipeline surveyor mapped 3 miles of pipe route yesterday before darkness forced them to stop. Today, they tap the saved line, select **Continue from End**, and resume drawing exactly where they left off — extending the route another 2 miles without any gap.

---

## 7.2 Continue from Start

- **What It Is & How It Works**: Extends the polyline backward from its original starting point node. This is the opposite of Continue from End — it adds new vertices before the first vertex, extending the line in the reverse direction.

- **Real-World Use Case**: A trail mapper started recording a hiking trail from the summit and walked downhill to the trailhead. They realize they forgot to map the first 500 meters from the parking lot to where they started recording. Using **Continue from Start**, they extend the trail line backward from the original starting point to the parking lot.

---

## 7.3 Reverse Line Direction

- **What It Is & How It Works**: Flips the direction of the entire polyline by reversing the order of all vertices. What was previously the start point becomes the end point, and vice versa. Visually, the line looks the same on the map, but its directional vector (the start-to-end sequence) is reversed.

  This matters for:
  - **Navigation guidance** (which direction does turn-by-turn guidance follow?).
  - **Flow analysis** (which direction does water flow through a storm drain?).
  - **Topological ordering** (upstream vs. downstream in hydrological models).

- **Real-World Use Case**: A hydrologist mapped a storm drain line by walking downstream (following the water flow). But their GIS analysis software requires drain lines to be digitized in the upstream-to-downstream direction. They tap the line, select **Reverse**, and the directional vector is flipped to match the required convention.

---

## 7.4 Merge Lines

- **What It Is & How It Works**: Connects two separate, independent polyline features into one continuous unified line feature. The end of Line A is joined to the start of Line B, creating a single combined polyline.

- **Step-by-Step Instructions**: 
  1. Tap Line A to open its action menu.
  2. Select **Merge Line**.
  3. MapCraft prompts you to tap the second line. Tap Line B on the map.
  4. A preview shows the proposed merged line. Confirm the merge.
  5. The two lines become one single feature with combined attributes.

- **Real-World Use Case**: Two survey teams working from opposite ends of a highway each mapped their half of the road. The result is two separate polylines that meet in the middle. Using **Merge Line**, the GIS manager combines them into one complete highway feature.

---

## 7.5 Split Line

- **What It Is & How It Works**: Cuts a single polyline feature into two separate, independent line features at a user-selected vertex node. After splitting, the two halves become fully independent features that can be edited, styled, or deleted independently.

- **Step-by-Step Instructions**:
  1. Tap the line to open its action menu.
  2. Select **Split Line**.
  3. MapCraft highlights all vertex nodes on the line.
  4. Tap the vertex where you want to cut. The line splits into two separate features at that point.

- **Real-World Use Case**: A city has a 40-mile highway polyline that crosses a county border. The highway department needs the road split into two features — one for each county's maintenance jurisdiction. They tap the vertex at the county boundary and split the line cleanly into two independent road segments.

---

## 7.6 Show Segment Details (Distances, Bearings & Slopes)

- **What It Is & How It Works**: Opens a detailed breakdown table listing every individual segment of the polyline, showing:
  - **Segment Number**: Sequential order (Segment 1, 2, 3...).
  - **Segment Length**: Distance of each individual segment in meters/feet.
  - **Compass Bearing**: Direction angle (0°-360°) of each segment relative to true North.
  - **Elevation Change**: Vertical rise or fall in meters across each segment.
  - **Slope Incline**: 3D slope angle or percentage grade of each segment.

- **Real-World Use Case**: A mountain trail builder reviews segment details for a proposed trail. Segment 4 shows a 35% slope grade — far too steep for hikers. They reroute that section with switchbacks to reduce the grade to 15%.

---

# CHAPTER 8: Supported Layer Types & Import/Export Suite

## 8.1 Supported Layer Types

MapCraft natively renders multiple spatial raster and vector formats:

- **Vector Layers**:
  - *Native MapCraft Features*: Points, lines, and polygons created directly in the app.
  - *KML/KMZ*: Google Earth format with styled features and folder hierarchies.
  - *GPX*: GPS Exchange Format — waypoints, tracks, and routes.
  - *GeoJSON*: Lightweight JSON-based spatial format widely used in web mapping.
  - *GeoPackage (.gpkg)*: OGC standard SQLite-based geospatial container.

- **Raster Basemap Tiles**:
  - *MBTiles (.mbtiles)*: Pre-packaged offline tile databases.
  - *XYZ Tile Servers*: Standard web tile servers (z/x/y URL pattern).
  - *WMS (Web Map Service)*: OGC standard for serving map images.
  - *WMTS (Web Map Tile Service)*: OGC standard for serving pre-rendered tiles.

- **Blueprint Paper Layers**:
  - *GeoPDF Documents*: PDF files embedded with geospatial coordinate metadata.
  - *Calibrated PDF Site Plans*: Scanned paper blueprints aligned to GPS coordinates.
  - *Photo Overlays*: Raster images positioned on the map via Photo Over Layer.

```
┌────────────────────────────────────────────────────────┐
│  IMPORT / EXPORT SUITE                                 │
│  [📥 Import Data]          [📤 Export Project]         │
│  Formats: KML, KMZ, GPX, CSV, GeoPackage, GeoJSON      │
│  Special: 🎬 MapReel MP4 Flythrough, 📄 GeoPDF Blueprint│
└────────────────────────────────────────────────────────┘
```

## 8.2 Importing Data (KML, KMZ, CSV, GPX)

- **KML / KMZ**: Imports Google Earth vector features — points, lines, polygons, and their folder tree structures — complete with styles, colors, and descriptions. KMZ files are compressed KML archives that may include embedded images.
- **GPX**: Imports GPS Exchange Format files from handheld Garmin devices, fitness trackers, or other GPS units. Supports waypoints, track logs, and route data.
- **CSV**: Imports tabular spreadsheet datasets (from Excel, Google Sheets, etc.) containing columns for Latitude, Longitude, and custom attribute fields. MapCraft prompts you to map column headers to spatial fields.

- **Step-by-Step Instructions**:
  1. Open **Import / Export > Import Data**.
  2. Select the file format: **KML/KMZ**, **GPX**, or **CSV**.
  3. Browse your device files and select the file to import.
  4. For CSV files, a column mapping dialog appears: select which column is Latitude, which is Longitude, and optionally which columns are Name, Description, or custom attributes.
  5. Select the target destination folder where imported features should be placed.
  6. Tap **Import**. MapCraft parses the file, creates spatial features, and adds them to the selected folder.

- **Real-World Use Case**: A surveyor receives an Excel spreadsheet from a client containing 500 rows of valve coordinates (columns: Valve_ID, Lat, Lon, Diameter, Material). They save it as CSV, import it into MapCraft, map the columns (Lat → Latitude, Lon → Longitude, Valve_ID → Name), and all 500 valves instantly appear as point markers on the map — complete with attribute data.

---

## 8.3 Exporting Data (Project Zip, MapReel MP4, GeoPDF, KML, KMZ, GPX, GeoPackage, GeoJSON)

- **Export Project (Full Zip)**: Compresses the entire project — database, folder structures, form templates, form responses, and all attached photos — into a portable `.zip` archive. This is a complete backup that can be restored on any device.

- **MapReel Flythrough Video (.mp4)**: Renders a dramatic 3D animated camera flyover video that follows a selected polyline path or track log. You can configure:
  - *Resolution*: 720p, 1080p, or 4K.
  - *Frame Rate*: 30 or 60 FPS.
  - *Camera Altitude*: How high above the ground the virtual camera flies.
  - *Camera Tilt Angle*: How steeply the camera looks down at the ground.
  - *Flight Speed*: How fast the camera moves along the path.

  The rendered MP4 video can be shared directly to clients, social media, or presentation software.

- **GeoPDF Map**: Renders a high-resolution PDF document containing geospatial coordinate metadata embedded in the PDF. When opened in compatible PDF readers (like Adobe Acrobat or Avenza Maps), the user can click on features and see real GPS coordinates. Great for sharing with non-GIS users who don't have mapping software.

- **Standard GIS Formats**: KML, KMZ, GPX, GeoPackage (.gpkg), and GeoJSON — all widely supported by desktop GIS software like QGIS, ArcGIS, Google Earth Pro, and web mapping platforms.

- **Real-World Use Case**: A civil engineering firm completes a highway corridor survey. They export the full project as a GeoPackage for their QGIS team, render a MapReel flythrough MP4 video for the client's board presentation, and generate a GeoPDF for the field inspectors who only have PDF readers on their tablets.

---

# CHAPTER 9: Advanced Field Utilities (Target Locator & Network Recorder)

## 9.1 Target Locator & Distance Triangulation

- **What It Is & How It Works**: Calculates the exact geographic coordinates of distant, inaccessible physical objects — a mountain peak, a fire smoke plume, an offshore boat, a property boundary across a river — without physically traveling to the target. It uses **cross-bearing triangulation**: you take compass sighting readings from two different known positions, and MapCraft calculates where the two bearing lines intersect.

```
Observer Location A (Azimuth Sight: 42°)  ───╮
                                             ├──► 🎯 CALCULATED TARGET
Observer Location B (Azimuth Sight: 312°) ───╯    Lat: 21.87102, Lon: 84.93110
                                                  Accuracy: ± 5 meters
```

- **Step-by-Step Instructions**:
  1. Open **More > Target Locator**.
  2. **Observation 1**: Stand at Location A. Aim your phone directly at the target object (hold it like a compass). Tap **"Record Sight 1"**. MapCraft records your current GPS position and the compass bearing angle you're aiming.
  3. **Observation 2**: Walk 50 to 200 meters sideways to Location B (the further you move, the more accurate the triangulation). Aim your phone at the same target object and tap **"Record Sight 2"**.
  4. Tap **"Calculate Triangulation"**. MapCraft computes where the two bearing lines intersect, displays the calculated target coordinates in DD, DMS, and MGRS formats, shows the estimated accuracy radius, and plots the target point on your map.

  *Tip*: For best accuracy, the angle between your two sightings should be between 30° and 150°. Angles close to 0° or 180° produce poor accuracy.

- **Real-World Use Case**: Two wildfire lookout towers spot smoke on the horizon. Tower A records a bearing of 42° toward the smoke. Tower B (6 km away) records a bearing of 312° toward the same smoke. MapCraft calculates the fire's exact GPS coordinates deep in an unnavigable forest — enabling helicopter crews to fly directly to the fire without searching.

---

## 9.2 Cellular Network Signal Recorder (Drive Testing)

- **What It Is & How It Works**: Logs cellular network signal diagnostics in real time while walking or driving, creating a spatial dataset of signal quality along your route.

  **Logged telemetry at each GPS point includes**:
  - Signal strength in dBm (e.g., -65 dBm = excellent, -110 dBm = very poor).
  - Signal bars (0-4).
  - Network generation (5G NR, 4G LTE, 3G HSPA, 2G EDGE).
  - Carrier name (e.g., Jio, Airtel, AT&T, Vodafone).
  - Ping latency in milliseconds.
  - Cell Tower ID.
  - GPS coordinates and timestamp.

  After stopping the session, MapCraft calculates an overall **Route Coverage Score (0-100)** and generates a color-coded heatmap showing signal quality along your route (green = strong, yellow = moderate, red = weak, black = dead zone).

- **Step-by-Step Instructions**:
  1. Open **More > Network Recorder**.
  2. Tap **"Start Recording Session"** and type a session name (e.g., *"Highway 10 5G Audit"*).
  3. Mount your phone in a car holder or carry it while walking.
  4. Drive or walk your route. MapCraft logs signal data automatically in the background.
  5. Tap **"Stop Session"** when finished.
  6. Review the session summary: total distance, points logged, average signal, dead zone count, and Route Coverage Score.
  7. Export the results as CSV (for spreadsheet analysis) or GeoJSON (for map visualization with color-coded signal strength).

- **Real-World Use Case**: A telecom company has deployed a new 5G tower. An RF engineer drives the surrounding 20 km of highways with Network Recorder running. The exported heatmap reveals a 1.5 km dead zone behind a hill where the 5G signal drops to -115 dBm. The engineer recommends installing a signal repeater on the hilltop.

---

# CHAPTER 10: GNSS Status, Compass & Satellite Analysis

Access the full satellite telemetry dashboard via **More (⋮) > GNSS Status & Analysis**. This dashboard gives you deep visibility into the quality and reliability of your GPS signal — critical for professional surveys where accuracy matters.

```
┌────────────────────────────────────────────────────────┐
│  📡 GNSS SATELLITE TELEMETRY ANALYSIS                 │
│  Active Constellations: GPS (12), GLONASS (9), GALILEO (8)│
│  Accuracy: ± 0.9m | HDOP: 0.7 | VDOP: 0.9 | PDOP: 1.1  │
│  [ Overview ]  [ Jump Filter ]  [ Draft Test ]         │
│  [ Track Quality ] [ Satellite Accuracy ] [ Skyplot ]  │
└────────────────────────────────────────────────────────┘
```

## 10.1 Navigation Compass & Azimuth Indicator

Displays a digital compass showing your real-time heading (0°-360°), magnetic declination offset (the difference between magnetic north and true north at your location), device tilt roll/pitch angles, and cardinal direction labels (N, NE, E, SE, S, SW, W, NW).

## 10.2 Satellite Overview

Displays live satellite fix telemetry across all four major global navigation satellite constellations:
- **GPS (USA)**: Up to 31 satellites.
- **GLONASS (Russia)**: Up to 24 satellites.
- **Galileo (EU)**: Up to 30 satellites.
- **BeiDou (China)**: Up to 35 satellites.

Shows total satellites visible in the sky vs. total satellites actively used in your position fix. More satellites used = better accuracy.

## 10.3 Jump Filter (Multipath Noise Suppression)

- **What It Is & How It Works**: An advanced mathematical filter that detects and suppresses sudden erroneous GPS coordinate "jumps" — position spikes where your location suddenly teleports 50+ meters and then snaps back. These spikes are caused by multipath interference (GPS signals bouncing off tall buildings, metal structures, or cliff walls before reaching your phone) and are common in urban canyons and dense forests.

  When the Jump Filter is enabled, MapCraft mathematically analyzes each incoming GPS fix and discards any that represent physically impossible movement speeds (e.g., a fix that implies you moved 200 meters in 1 second while standing still).

## 10.4 Draft / Drift Test (Static GPS Stability Test)

- **What It Is & How It Works**: Evaluates your GPS receiver's location stability while keeping the phone completely motionless. You place your phone on a flat surface, start the test, and MapCraft records GPS fixes for 60 seconds. It then generates a **scatter plot** showing how much your reported position drifted during that time.

  A tight cluster (all points within 1-2 meters) indicates excellent GPS conditions. A wide spread (points scattered across 10+ meters) indicates poor conditions — maybe heavy tree cover, nearby buildings, or atmospheric interference.

  This test helps you decide whether your current location is suitable for high-accuracy survey work, or if you need to move to a clearer area.

## 10.5 Track Quality Score

Computes a 0 to 100 overall precision rating for previously recorded GPS track paths based on continuous satellite signal-to-noise ratios (SNR), satellite constellation geometry (PDOP), and HDOP values during the recording. A score of 90+ indicates survey-grade quality; 50-70 is acceptable for general mapping; below 50 suggests the track may have accuracy issues.

## 10.6 Satellite Accuracy & Telemetry (HDOP, VDOP, PDOP, SNR)

Provides detailed dilution of precision metrics — mathematical measures of how satellite geometry affects your position accuracy:

- **HDOP (Horizontal Dilution of Precision)**: Measures horizontal (latitude/longitude) accuracy. Lower is better. Values below 1.0 indicate excellent accuracy; 1.0-2.0 is good; above 5.0 is poor.
- **VDOP (Vertical Dilution of Precision)**: Measures vertical (elevation) accuracy. Elevation is always less accurate than horizontal position.
- **PDOP (Positional Dilution of Precision)**: Overall 3D position quality combining both horizontal and vertical. PDOP below 2.0 is excellent.
- **Signal-to-Noise Ratio (SNR)**: Individual signal strength bar graphs for each satellite, measured in decibel-Hertz (dB-Hz). Higher bars = stronger signals. Satellites below 20 dB-Hz are contributing little to your fix.

## 10.7 Satellite Skyplot

Renders a 360-degree polar sky diagram — a circular chart representing the sky overhead as seen from your location. Each satellite is plotted at its current azimuth (compass direction) and elevation angle (how high above the horizon). Satellites near the center are directly overhead; satellites near the edge are near the horizon.

Color-coded by signal strength: green = strong signal, yellow = moderate, red = weak, gray = visible but not used in fix.

- **Real-World Use Case**: A land surveyor setting up in a narrow canyon checks the Skyplot. They see that all satellites are clustered on the eastern sky with a huge gap in the western sky (blocked by the canyon wall). This asymmetric geometry gives poor HDOP (3.2). They move 200 meters north to a wider section of the canyon, check the Skyplot again, and see satellites evenly distributed across the sky with HDOP of 0.8 — now suitable for boundary survey work.

---

# CHAPTER 11: Backup Manager

Your field data is irreplaceable. The Backup Manager ensures you never lose a single point, line, polygon, photo, or form response — even if your phone is dropped in a river, run over by a truck, or stolen.

```
┌────────────────────────────────────────────────────────┐
│  📦 BACKUP MANAGER                                     │
│  [💾 Create Backup Now]   [🕒 Auto Backup: Daily]       │
│  Available Restores:                                   │
│  - Backup_2026-08-05_2300.zip (45 MB) [Restore]         │
│  - Backup_2026-08-04_2300.zip (42 MB) [Restore]         │
│  - Backup_2026-08-03_2300.zip (38 MB) [Restore]         │
└────────────────────────────────────────────────────────┘
```

## 11.1 Manual Instant Snapshots

- **What It Is & How It Works**: Creates an immediate, full snapshot archive of your entire MapCraft workspace — the SQLite database, all project data, custom form schemas, layer styles, folder structures, and attached photo files — compressed into a single `.zip` file saved on your device's internal storage.

  You should create a manual backup before any risky operation (major edits, data imports, firmware updates) or at the end of every field day.

## 11.2 Scheduled Backup Routines

- **What It Is & How It Works**: Automates background backup creation on a schedule (**Daily** at a configurable time, or **Weekly** on a configurable day). MapCraft automatically maintains the 5 most recent backup snapshots and purges older archives to conserve device storage space.

## 11.3 Database Restoration Engine

- **What It Is & How It Works**: Restores your entire MapCraft workspace to any historical backup snapshot with a single tap. Select a backup file from the list, tap **Restore**, and MapCraft replaces the current database with the backup copy.

  *Warning*: Restoring a backup overwrites all current data with the backup's contents. Any work done after the backup date will be lost.

- **Real-World Use Case**: A field technician's phone falls into a muddy irrigation ditch and is destroyed. They get a replacement phone, install MapCraft, copy their last backup `.zip` file from cloud storage, and tap **Restore**. In under 2 minutes, every single project, folder, pin, line, polygon, photo, and form response is recovered exactly as it was — zero data loss.

---

# CHAPTER 12: Comprehensive System Settings

Tap **Settings (⚙️)** on the top bar to configure global operational parameters.

```
┌────────────────────────────────────────────────────────┐
│  ⚙️ MAPCRAFT SETTINGS CONTROL PANEL                     │
│  [📏 Units & Custom Units]   [🏃 Track Settings]       │
│  [📡 Radar Settings]         [🖥️ Map Display]           │
│  [⚡ Render Performance]      [🔄 Export & Sync]         │
└────────────────────────────────────────────────────────┘
```

## 12.1 Unit Settings & Custom Measurement Units

- **Standard Measurement Systems**:
  - *Metric*: meters, kilometers, square meters, hectares.
  - *Imperial*: feet, miles, square feet, acres.
  - *Nautical*: nautical miles, knots.

- **Custom Measurement Units**: Define your own custom conversion units for specialized industries. Enter a unit name and a conversion multiplier relative to meters. Examples:
  - *Rods*: 1 rod = 5.0292 meters.
  - *Chains*: 1 chain = 20.1168 meters.
  - *Vara (Texas)*: 1 vara = 0.8467 meters.
  - *Leagues*: 1 league = 4,828.03 meters.

  Once defined, your custom units appear as options in all measurement displays throughout the app.

- **Coordinate Display Settings**: Select the default coordinate format used throughout the app:
  - Decimal Degrees (DD): `21.866498, 84.927636`
  - Degrees Minutes Seconds (DMS): `21°51'59.4"N 84°55'39.5"E`
  - Military Grid Reference System (MGRS): `45Q CE 92481 19284`
  - Universal Transverse Mercator (UTM): `45N 492481 2418192`

## 12.2 Track Settings

- **Time Logging Interval**: How frequently the Track Logger captures GPS points. Options: every 1 second (highest detail, largest file), 5 seconds, 10 seconds, or 30 seconds (lowest detail, smallest file).
- **Distance Filter**: Minimum distance the user must move before a new track point is recorded. Example: if set to 2 meters, the logger ignores GPS drift while you're standing still and only logs when you actually move 2+ meters.
- **Auto-Pause**: Automatically suspends track recording when the device detects you've stopped moving (speed drops to 0). Prevents recording stationary clusters of points during breaks or traffic stops.

## 12.3 Radar Settings

- **Warning Distance Radius**: The distance threshold at which proximity alerts begin triggering. Configurable from 50 meters to 500 meters depending on your safety requirements.
- **Alert Tones & Vibration**: Configure the type of alert — continuous beep patterns, escalating beep frequency, spoken voice announcements, or tactile vibration pulses. You can combine multiple alert types.

## 12.4 Map Display Controls

- **Icon & Text Scaling**: Adjust map marker icon sizes from 50% (tiny) to 200% (oversized) and text label font sizes from small to extra-large. Larger sizes improve outdoor readability in bright sunlight.
- **Feature Visibility Toggles**: Globally toggle visibility for entire feature categories — show or hide all points, all polylines, all polygons, all vertex nodes, or coordinate grid lines. Useful for temporarily decluttering the map when working with very dense datasets.

## 12.5 Render Performance & Hardware Acceleration

- **Max POI Render Limit**: Sets the maximum number of point features rendered on screen simultaneously. On older phones, rendering 50,000 points can cause lag. Reduce this limit (e.g., to 5,000 or 10,000) to maintain smooth 60 FPS map panning on lower-end devices.
- **Tile Cache Sizing**: Allocate how much RAM the map tile cache can consume, from 64 MB to 1024 MB. Larger caches mean smoother panning (tiles stay in memory) but consume more RAM.
- **Hardware Acceleration**: Toggle OpenGL/Vulkan GPU acceleration for vector map rendering. When enabled, the GPU handles drawing operations, achieving 60 FPS smooth map animations. Disable on devices with known GPU driver bugs.

## 12.6 Export & Sync Server Credentials

- **FTP / SFTP Host Credentials**: Configure your sync destination server:
  - Host Server IP or domain name.
  - Port number (21 for FTP, 22 for SFTP).
  - Username and Password.
  - Remote Server Target Directory (where uploaded files are saved on the server).

- **Auto-Sync Interval Schedule**: Set automatic background sync timers: **Off** (manual sync only), **Every 15 minutes**, **Every 30 minutes**, or **Every 1 hour**. When enabled, MapCraft syncs automatically at the configured interval without you needing to tap the Sync button.

---

### End of Master Manual Book
*MapCraft GIS & Mobile Surveying Platform — Field Ready.* 🗺️⚡
