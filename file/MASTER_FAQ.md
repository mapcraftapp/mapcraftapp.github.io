# MapCraft Master FAQ & Troubleshooting Guide ❓🔍

---

## 🗺️ General Questions

### Q: What offline map formats does MapCraft support?
**A**: MapCraft supports MBTiles (`.mbtiles` SQLite raster and vector tiles) and calibrated GeoPDF maps (`.pdf`).

### Q: Can MapCraft work completely offline without an internet connection?
**A**: Yes! MapCraft is designed offline-first. All vector feature collection, target triangulation, line navigation, signal logging, and local database operations work without an active cell or Wi-Fi connection.

---

## 🎯 Target Locator & Triangulation

### Q: How many observation points are required for target triangulation?
**A**: A minimum of 2 observation points with valid bearings is required. However, 3 or more observation points are recommended to enable automated outlier rejection and calculate high-confidence error radiuses.

### Q: What coordinate system does the Target Locator use?
**A**: Target Locator supports standard Latitude/Longitude (Decimal Degrees, DMS) and MGRS (Military Grid Reference System) coordinates.

### Q: Does the crosshair move with the blue location point?

**A**: Yes. When **Follow Location mode** is active, the map continuously keeps your blue GPS location centered on the screen, so the crosshair remains locked directly over the blue location point. If you manually drag or pan the map, **Follow Location mode is turned off**, allowing the blue location point to move away from the crosshair. Tapping the **Current Location** button again re-centers the map and reactivates Follow Location mode.

---

## 📶 Signal Recording & Data Export

### Q: Does signal recording consume significant battery?
**A**: Signal recording runs a background location service and queries telephony hardware at regular intervals. It is optimized for efficiency, but using high-frequency GPS tracking will consume battery faster. Connecting a portable power bank during drive tests is recommended.

### Q: What formats can I export my field survey data to?
**A**: Data can be exported to GeoJSON, KML, KMZ, GPX, CSV, ESRI Shapefiles (`.zip`), PDF summary reports, and MapReel MP4 flyover videos.

---

## 🛠️ Troubleshooting & Diagnostics

### 1. Database Corruption & Boot Recovery Failures
**Symptom**: App crashes immediately upon launch or enters a crash loop after upgrading the app.

**Cause**: SQLite database migration mismatch or corrupted `gis_mapper_native.db` file.

**Resolution**:
MapCraft includes an automated recovery system:
1. On startup, MapCraft attempts to open the database and run pending migrations.
2. If opening fails, the app automatically deletes `gis_mapper_native.db` and rebuilds a fresh schema, preventing the app from being stuck in a crash loop.
3. **Manual Recovery**: Go to Android Settings > Apps > MapCraft > Storage > **Clear Data**.

### 2. Google Maps API Blank / White Screen
**Symptom**: Map view displays grey grid squares or watermarks with "For development purposes only".

**Resolution**:
1. Check `local.properties` to ensure `MAPS_API_KEY` is populated.
2. Verify logcat for `Google Maps Android API` errors.
3. Ensure the SHA-1 fingerprint of your signing key (Debug or Release) is registered in Google Cloud Console under API Key Restrictions.

### 3. Location / GPS Not Updating in Background
**Symptom**: Network Signal Recorder or Line Navigation stops tracking position when the phone screen turns off or when another app is opened.

**Resolution**:
1. Ensure **`ACCESS_BACKGROUND_LOCATION`** permission is granted in Android System Settings.
2. Check battery optimization settings: Android Settings > Apps > MapCraft > Battery > Set to **Unrestricted**.
3. Verify that `NetworkRecorderService` is running as an active Foreground Service with a persistent notification.

### 4. FTP / Enterprise Sync Failures
**Symptom**: Sync log shows `FTP Connection Refused` or `SocketTimeoutException`.

**Resolution**:
1. Verify FTP server host, port (default 21), and credentials in **Settings > FTP Settings**.
2. Check firewall rules on the target server.
3. If using FTPS (Explicit/Implicit TLS), verify server certificate trust requirements.
