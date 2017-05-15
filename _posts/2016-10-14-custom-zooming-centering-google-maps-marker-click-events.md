---
layout: post
title: "Custom Zooming and Centering on Google Maps Marker Click Events"
date: 2016-10-14
---

The Google Maps API makes it easy to integrate map functionality into any web application. But sometimes building out advanced functionality with this API provides challenges, albeit fun ones. In this post we will explore how to create a custom zooming and centering functionality when a user clicks on a map marker using [NgMap](https://ngmap.github.io/). This functionality becomes a little tricky, especially when the markers we want to center lie on an outside edge of our market cluster, because we then have to reset the zoom of the map to show all the markers tidily. But no fear, we will accomplish this with three simple functions.


First let's create two of the "functional" functions that will handle the calculating the map's new center and handling the zooming level for the map.

```javascript
function getNewCenter(marker) {
  return {
    lat: marker.getPosition().lat(),
    lng: marker.getPosition().lng()
  };
}

function zoomToIncludeMarkers() {
  NgMap.getMap().then(map => {
    let bounds = new google.maps.LatLngBounds();
    for (var key in map.markers) {
      bounds.extend(map.markers[key].getPosition());
    }
    map.fitBounds(bounds);
  });
}
```

The function getNewCenter returns a LatLng object of the marker's position, for the marker that we want to center the map on. The function zoomToIncludeMakrers grabs the current map's boundaries, iterates through our map markers to get their positions, and then extends the bounds object to include all of the desired map markers. For bonus functionality, you can set a limit of the number of markers that we extend the bounds upon to only include the closest n pin locations. Finally, we re-fit the map bounds. If some of these methods look a little foreign, be sure to check out the [Google Maps API](https://developers.google.com/maps/documentation/javascript/reference).

Finally, we can create the function that we will bind to our marker (pin) click event.
```javascript
function selectMarker(marker) {
  NgMap.getMap().then(map => {
    google.maps.event.addListenerOnce(map, 'bounds_changed', () => {
      map.panTo(getNewCenter(marker));
    });
    map.panTo(getNewCenter(marker));
    zoomToIncludeMarkers();
  });
}
```

In this function, we first re-center the map to our selected marker. Then we call our zoomToIncludeMarkers function which will continually expand the map boundaries to include all of our markers. One thing to note is that sometimes when re-sizing the boundaries, the center of the map can get moved. Furthermore, because the fitBounds method in zoomToIncludeMarkers happens asynchronously, we want to wait for map to fit the new bounds before re-centering the map to the selected marker. As a result, I added a listener for this event, and then will re-center the map one final time.

You can achieve a whole lot with the Google Maps API and the NgMap directive, so be sure to check them out. Hopefully these functions can help expand upon existing functionality that they offer and provide even more features.

For reference:
* [Google Maps API](https://developers.google.com/maps/documentation/javascript/reference)
* [NgMap](https://ngmap.github.io/)
