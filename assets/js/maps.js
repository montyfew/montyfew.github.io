export const baseLayers = () => {
  let api_key = "9d825669-7c09-49be-89eb-1f4c8a50861d";
  let Stamen_Toner = L.tileLayer(
    `https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png?api_key=${api_key}`,
    {
      subdomains: "abcd",
      minZoom: 0,
      maxZoom: 20,
      ext: "png",
      className: "stamen_toner",
    }
  );

  let Alidade_Smooth = L.tileLayer(
    `https://tiles-eu.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=${api_key}`,
    {
      subdomains: "abcd",
      minZoom: 0,
      maxZoom: 20,
      ext: "png",
    }
  );

  let Alidade_Smooth_Greyscale = L.tileLayer(
    `https://tiles-eu.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=${api_key}`,
    {
      subdomains: "abcd",
      minZoom: 0,
      maxZoom: 20,
      ext: "png",
      className: "alidade_smooth_greyscale",
    }
  );

  return {
    "Stamen Toner": Stamen_Toner,
    "Alidade Smooth": Alidade_Smooth,
    "Alidade Smooth (greyscale)": Alidade_Smooth_Greyscale,
  };
};

export const defaultMap = () => {
  let maps = baseLayers();
  // Create the actual map on the page
  let map = L.map("banner-map", {
    attributionControl: false, // Turn off attribution on the map
    zoomControl: false, // Turn off zoom buttons on the maps
    zoomSnap: 0.5, // Allow fractional zoom levels
  }).setView({ lat: 51.50918512396602, lng: -0.12824427831868365 }, 10);

  map.addLayer(maps["Stamen Toner"]);
  //   let layerControl = L.control.layers(maps).addTo(map);
  map.setMaxZoom(14);
  // map.setMinZoom(10);
  return map;
};

export const customGeojsonStyles = (element) => {
  let options = {
    style: function (feature) {
      return {
        color: "white",
        weight: 2,
        opacity: 0.8,
      };
    },
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: 7,
        fillColor: "grey",
        color: "white",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.5,
      });
    },
  };
  // If an element has been passed then setup a hover effect for it
  if (element) {
    options.onEachFeature = (feature, layer) => {
      layer.bindPopup(feature.properties.name);
      layer.on("mouseover", () => {
        element.dataset.highlight = true;
      });
      layer.on("mouseout", () => {
        element.dataset.highlight = false;
      });
    };
  }
  return L.geoJson(null, options);
};

export const omnivoreLoaders = { kml: omnivore.kml, gpx: omnivore.gpx };

export default defaultMap;
