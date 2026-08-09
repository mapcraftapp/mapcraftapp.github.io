# MapCraft Highlighted Features

MapCraft is a professional-grade field-mapping and GIS survey application designed for precision data collection, powerful editing, and seamless enterprise synchronization. Below is a categorized highlight of the core features that set MapCraft apart.

## 🗺️ Core Mapping & Canvas Engine
- **Multi-Layer GIS Canvas**: Render points, polylines, polygons, and circles on map views with customizable colors, stroke widths, icons, and transparency.
- **Dynamic Basemaps**: Support for 14 online tile providers (Google Satellite/Terrain/Hybrid, OpenStreetMap, Carto, OpenTopoMap, ESRI, etc.) tailored for different lighting conditions and use cases.
- **Offline Maps (MBTiles)**: Load offline SQLite raster databases for full functionality deep in the field without cellular service.
- **GeoPDF Calibrated Blueprints**: Overlay and calibrate architectural site plans, CAD drawings, or legacy paper maps directly onto live GPS coordinates using affine transformation.
- **Telemetry Overlay**: Real-time crosshair GPS latitude, longitude, and elevation alongside GPS fix state and measurement data.

## ✏️ Precision GIS Creation & Editing
- **Professional Drawing Tools**: Plot discrete points, multi-vertex polylines, and auto-closing polygons.
- **Precision GIS Snapping Engine**: Automatically snap drawing crosshairs to nearby vertices, edges, or segment midpoints for CAD-like vector alignment. Includes geometry splitting and hole cutting.
- **Continuous Track Logger**: Background GPS recording to automatically log walking, driving, or biking paths as polyline features with speed and elevation metrics.
- **Measurement Tool**: Instant digital tape measure for real-time linear distances and enclosed polygonal surface area calculations.
- **Geometry Operations**: Merge multiple lines into a single continuous path or split lines at specific vertices.

## 📱 S Pen & Advanced Input Integration
- **Precision Digitizing**: Sub-pixel point placement and pressure-sensitive drawing for dynamic stroke thickness.
- **Hover Capabilities (Air View)**: Preview Lat/Long/MGRS coordinates or feature metadata instantly by hovering the S Pen tip over the screen without tapping.
- **Dual-Input Operating Mode**: Pan and zoom the map with your fingers while simultaneously drawing or measuring with the stylus—eliminating the need to switch tools.
- **S Pen Air Actions**: Use Bluetooth remote gestures (clicks and swipes) to drop waypoints, undo strokes, or capture geotagged photos from a distance.

## 📋 Custom Data Collection & Organization
- **Hierarchical Project Folders**: Organize spatial features into an unlimited tree of Projects, Folders, and Subfolders. Turn entire layers on/off with a single tap.
- **Dynamic Attribute Forms**: Build custom field survey forms (text, numbers, dropdown choices, checkboxes, photos) attached directly to vector GIS features. 
- **Mandatory Photo Capture**: Require inspectors to attach geotagged and timestamped photos before saving a feature.
- **Folder Style Customizer**: Apply consistent marker icons, fill colors, and stroke styles to all features inside a folder simultaneously.

## 📡 Advanced Field Utilities
- **Tactical Target Locator**: Compute target coordinates from multiple azimuth bearings using linear least-squares ray intersection. Displays confidence error radius and MGRS grid.
- **Cellular Network Signal Recorder**: Continuous background logging of cellular network strength (LTE/5G dBm), quality, and operator to generate route quality scores for drive testing.
- **Line Navigation Engine**: Turn-by-turn or straight-line navigation along polylines with TTS audio prompts and haptic feedback.
- **MapReel Animated Export**: Hardware-accelerated 60fps MP4 video renderer that animates camera flyovers along your navigation routes.

## 🔄 Enterprise Sync & Exports
- **Multi-Format Import/Export**: Parse and export spatial data seamlessly in GeoJSON, KML, KMZ, GPX, CSV, ESRI Shapefile, and PDF summary reports.
- **FTP Folder Synchronization**: Bi-directional, differential sync to remote corporate servers (FTP/REST/PostGIS) for near real-time multi-device collaboration.
- **Automated SQLite Backups**: Scheduled, compressed database snapshots to ensure field data is never lost.
