---
layout: page
title: The UFO map of ESU 2021
menutitle: Map
menuorder: 5
---

On Kaggle you can find the UFO Sightings [dataset](https://www.kaggle.com/NUFORC/ufo-sightings) of reports of some 80000 Unidentified flying object reports in the last century collected by the National UFO Reporting Center [@NUFORC](https://twitter.com/NUFORC).

The map below shows a subset of the data, within the bounding box (36.4,12.2,61.4,33.5), corresponding roughly to the Arabian peninsula.  


<iframe src="https://djwrisley.github.io/Arabia_UFO/index.html#3/" width="100%" height="600"></iframe>


How to explore this map: This map has clickable points which provide information from the dataset and a sample picture chosen to correspond to the reported shape of the sighting.  *NB: These are not the actual images from the NUFORC dataset.*

Context: This map's dataset provides us with some 80K points of sightings of UFOs in the world.

Algorithmic manipulation: The exact means of geocoding was not made clear in the original [dataset](https://github.com/planetsig/ufo-reports), however this meant that many sightings in individual cities would overlap with each other. I used the QGIS 3.0 plugin MMQGIS to prevent occultation of points. This means that there are some points from the same city which appear close to each other. This is for visual effect only. The points on the map do not represent the exact point of sighting.

Notes on data decisions: Refer to the [README](https://github.com/planetsig/ufo-reports) in the original dataset for their decisions. There were approximately 1800 points in the Kaggle dataset listed as 0,0.  I concatenated the location information provided and geocoded these missing coordinates with Geocode by Awesome Tables which resulted in a few errors (such as the purple dot on the Persian Coast for Jafir).

License: Creative Commons 4.0 BY-NC-SA International Creative Commons License. 

Suggested Citation: Humanities Data and Map Environments (2021). UFO Sightings on the Arabian Peninsula. Accessed xxxx.yy.zz.
