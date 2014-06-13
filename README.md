# o-layers

This module provides a namespace for managing modules that make use of the z-axis, and provides a number of events and css classes that modules may use to interact with other modules that use the z-axis

## Terminology

Below the term *layer* refers to the owned DOM, or portion of owned DOM, of any module that makes use of the z-axis

## Classes

### `o-layers__context`

This class should be added to any element `el` which defines an area where every layer should be concerned about other layers only if they also lie within `el`. e.g. Within an interactive graphic any popup info windows only need concern themselves with the state of other popup windows which also overlay the same graphic; popups overlaying another map lower down the page.

A layer must either

* be a descendant of an element with the class `o-layers__context` and *must not* overlap any part of the page not contained within this element
* not be a descendant of any element with the class `o-layers__context` (in which case `document.body` provides the default layer context)



